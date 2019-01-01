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

  constructor() {

  }

  ngOnInit() {}

  onClick(event) {
    alert('hello');
  }
}
