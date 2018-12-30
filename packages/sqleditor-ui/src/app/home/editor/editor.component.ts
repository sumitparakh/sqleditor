import { Component, OnInit, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, merge } from 'rxjs';
import { FlatTreeControl } from '@angular/cdk/tree';
import { CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { map } from 'rxjs/operators';
import { QueryEditor, Table, Database, Column } from 'src/app/utilities/types';
import { IDatabaseService } from 'src/app/services/idatabase.service';
import * as faker from 'faker';
/**
 * Json node data with nested structure. Each node has a filename and a value or a list of children
 */
export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
}

/** Flat node with expandable and level information */
export class DynamicFlatNode {
  constructor(
    public item: string,
    public level = 1,
    public expandable = false,
    public isLoading = false
  ) {}
}

/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
export class DynamicDatabase {
  dataMap = new Map<string, string[]>([
    ['Fruits', ['Apple', 'Orange', 'Banana']],
    ['Vegetables', ['Tomato', 'Potato', 'Onion']],
    ['Apple', ['Fuji', 'Macintosh']],
    ['Onion', ['Yellow', 'White', 'Purple']]
  ]);

  rootLevelNodes: string[] = ['Fruits'];

  /** Initial data from database */
  initialData(): DynamicFlatNode[] {
    return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
  }

  getChildren(node: string): string[] | undefined {
    return this.dataMap.get(node);
  }

  isExpandable(node: string): boolean {
    return this.dataMap.has(node);
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Injectable()
export class DynamicDataSource {
  dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);

  get data(): DynamicFlatNode[] {
    return this.dataChange.value;
  }
  set data(value: DynamicFlatNode[]) {
    this.treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  constructor(
    private treeControl: FlatTreeControl<DynamicFlatNode>,
    private database: DynamicDatabase
  ) {}

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    this.treeControl.expansionModel.onChange.subscribe(change => {
      if (
        (change as SelectionChange<DynamicFlatNode>).added ||
        (change as SelectionChange<DynamicFlatNode>).removed
      ) {
        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(
      map(() => this.data)
    );
  }

  /** Handle expand/collapse behaviors */
  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
    if (change.added) {
      change.added.forEach(node => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed
        .slice()
        .reverse()
        .forEach(node => this.toggleNode(node, false));
    }
  }

  /**
   * Toggle the node, remove from display list
   */
  toggleNode(node: DynamicFlatNode, expand: boolean) {
    const children = this.database.getChildren(node.item);
    const index = this.data.indexOf(node);
    console.log(index);
    if (!children || index < 0) {
      // If no children, or cannot find the node, no op
      return;
    }

    if (expand) {
      const nodes = children.map(
        name =>
          new DynamicFlatNode(
            name,
            node.level + 1,
            this.database.isExpandable(name)
          )
      );
      this.data.splice(index + 1, 0, ...nodes);
    } else {
      let count = 0;
      for (
        let i = index + 1;
        i < this.data.length && this.data[i].level > node.level;
        i++, count++
      ) {}
      this.data.splice(index + 1, count);
    }

    // notify the change
    this.dataChange.next(this.data);
  }
}

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  providers: [DynamicDatabase]
})
export class EditorComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  tableSource = ELEMENT_DATA;

  treeControl: FlatTreeControl<DynamicFlatNode>;

  dataSource: DynamicDataSource;
  private readonly DEFAILT_TEXTAREA_ROWS: number = 10;

  queryEditor: QueryEditor[] = [
    {
      name: 'Query Editor ',
      query: '',
      textAreaRows: this.DEFAILT_TEXTAREA_ROWS
    }
  ];

  tables: Observable<Table[]>;
  databases: Database[] = [];

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;

  constructor(
    private database: DynamicDatabase,
    private databaseService: IDatabaseService
  ) {
    this.tables = this.databaseService.getDatabases();

    const MockData = this.getMockedDatabase();

    this.databases.push(MockData);
    // MockData.name = 'adsf';
    // this.databases.push(MockData);
    database.dataMap.clear();

    this.tables.subscribe((data: any) => console.log(data));

    this.setTreeView();
  }

  ngOnInit() {}

  onClick(event) {
    alert('hello');
  }

  setTreeView() {

    this.databases.map((_database: Database) => {
      const databaseProps = { tables: [], columns: [] };
      _database.tables.map((_table: Table) => {
        databaseProps.tables.push(_table.name);
        databaseProps.columns = [];
        _table.columns.map((_column: Column) => {
          databaseProps.columns.push(_column.name);
        });
        this.database.dataMap.set(_table.name, databaseProps.columns);
      });
      this.database.dataMap.set(_database.name, databaseProps.tables);
    });

    this.database.rootLevelNodes = this.databases.map(
      (_database: Database) => _database.name
    );
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(
      this.getLevel,
      this.isExpandable
    );
    this.dataSource = new DynamicDataSource(this.treeControl, this.database);
    this.dataSource.data = this.database.initialData();
  }

  addNewDatabase(event) {
    this.databases.push(this.getMockedDatabase(true));
    this.setTreeView();
  }

  getMockedDatabase(random = false) {
    return {
      name: random ? faker.lorem.word() : 'MockedDB',
      tables: [
        {
          name: random ? faker.lorem.word() : 'order_sample',
          columns: [
            { name: random ? faker.lorem.word() : 'orderID' },
            { name: random ? faker.lorem.word() : 'productID' },
            { name: random ? faker.lorem.word() : 'productName' },
            { name: random ? faker.lorem.word() : 'customerID' },
            { name: random ? faker.lorem.word() : 'employeeID' },
            { name: random ? faker.lorem.word() : 'orderDate' },
            { name: random ? faker.lorem.word() : 'requiredDate' },
            { name: random ? faker.lorem.word() : 'shippedDate' },
            { name: random ? faker.lorem.word() : 'shipVia' },
            { name: random ? faker.lorem.word() : 'freight' },
            { name: random ? faker.lorem.word() : 'shipName' },
            { name: random ? faker.lorem.word() : 'shipAddress' },
            { name: random ? faker.lorem.word() : 'Abbaye' },
            { name: random ? faker.lorem.word() : 'shipCity' },
            { name: random ? faker.lorem.word() : 'shipRegion' },
            { name: random ? faker.lorem.word() : 'shipPostalCode' },
            { name: random ? faker.lorem.word() : 'shipCountry' },
            { name: random ? faker.lorem.word() : 'unitPrice' },
            { name: random ? faker.lorem.word() : 'quantity' },
            { name: random ? faker.lorem.word() : 'discount' }
          ]
        }
      ]
    };
  }

  addQueryEditor(event) {
    this.queryEditor.push({
      name: 'Query Editor',
      query: '',
      textAreaRows: this.DEFAILT_TEXTAREA_ROWS
    });
  }
}
