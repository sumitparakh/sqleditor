import { Component, OnInit } from '@angular/core';
import { QueryEditor } from 'src/app/utilities/types';

@Component({
  selector: 'app-editor-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {

  private readonly DEFAILT_TEXTAREA_ROWS: number = 10;

  queryEditor: QueryEditor[] = [
    {
      name: 'Query Editor ',
      query: '',
      textAreaRows: this.DEFAILT_TEXTAREA_ROWS
    }
  ];

  constructor() { }

  ngOnInit() {
  }


  addQueryEditor(event) {
    this.queryEditor.push({
      name: 'Query Editor',
      query: '',
      textAreaRows: this.DEFAILT_TEXTAREA_ROWS
    });
  }
}
