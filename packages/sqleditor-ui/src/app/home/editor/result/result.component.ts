import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  tableSource: [];
  displayedColumns: [];
  constructor() { }

  ngOnInit() {
  }

}
