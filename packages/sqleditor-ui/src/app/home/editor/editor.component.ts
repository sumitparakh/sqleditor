import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { QueryEditor, Table, Database, Column, DynamicFlatNode } from 'src/app/utilities/types';
import { IDatabaseService } from 'src/app/services/idatabase.service';
import * as faker from 'faker';
import { DynamicDatabase } from 'src/app/utilities/tree-db.class';
import { DynamicDataSource } from 'src/app/services/dynamic-data-source.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  providers: [DynamicDatabase]
})
export class EditorComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  tableSource = [];

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
      name: random ? faker.lorem.word() : 'order_sample_db',
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
