import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  DynamicFlatNode,
  Table,
  Database,
  Column
} from 'src/app/utilities/types';
import { DynamicDataSource } from 'src/app/services/dynamic-data-source.service';
import { DynamicDatabase } from 'src/app/utilities/tree-db.class';
import { IDatabaseService } from 'src/app/services/idatabase.service';
import { Observable } from 'rxjs';
import * as faker from 'faker';
import { MockService } from 'src/app/utilities/mock.class';

@Component({
  selector: 'app-editor-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [MockService]
})
export class SidebarComponent implements OnInit {
  treeControl: FlatTreeControl<DynamicFlatNode>;

  dataSource: DynamicDataSource;
  databases: Database[] = [];

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;

  constructor(
    private database: DynamicDatabase,
    private databaseService: IDatabaseService,
    private mock: MockService
  ) {
    const MockData = this.mock.getMockedDatabase();
    this.databases.push(MockData);
    database.dataMap.clear();
    this.setTreeView();
  }

  ngOnInit() {}

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
    this.databases.push(this.mock.getMockedDatabase(true));
    this.setTreeView();
  }
}
