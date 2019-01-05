import { Component, OnInit, ViewChild } from '@angular/core';
import { QueryEditor } from 'src/app/utilities/types';
// import { QueryService } from 'src/app/services/query.service';
import { MatTabGroup } from '@angular/material';

@Component({
  selector: 'app-editor-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {
  @ViewChild('queryTabGroup') matTabGroup: MatTabGroup;
  private readonly DEFAILT_TEXTAREA_ROWS: number = 10;

  private readonly DEFAULT_QUERY_EDITOR_CONFIG: QueryEditor = {
    name: 'Query Editor ',
    query: '',
    textAreaRows: this.DEFAILT_TEXTAREA_ROWS
  };

  queryEditor: QueryEditor[] = [];

  constructor() {
    const queryEditorData: any = JSON.parse(
      localStorage.getItem('sql.queryeditor')
    );

    if (queryEditorData) {
      this.queryEditor = queryEditorData;
    } else {
      this.queryEditor.push(this.DEFAULT_QUERY_EDITOR_CONFIG);
    }

    localStorage.setItem('sql.queryeditor', JSON.stringify(this.queryEditor));
  }

  resetQueryEditor() {
    this.queryEditor = [];
    this.queryEditor.push(this.DEFAULT_QUERY_EDITOR_CONFIG);
    localStorage.setItem('sql.queryeditor', JSON.stringify(this.queryEditor));
  }

  ngOnInit() {}

  addQueryEditor(event) {
    this.queryEditor.push(this.DEFAULT_QUERY_EDITOR_CONFIG);
    localStorage.setItem('sql.queryeditor', JSON.stringify(this.queryEditor));
  }

  updateLocalStorage(event) {
    localStorage.setItem('sql.queryeditor', JSON.stringify(this.queryEditor));
    return true;
  }

  getActiveTabContent() {
    return this.queryEditor[this.matTabGroup.selectedIndex];
  }
}
