import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';
import { QueryService } from 'src/app/services/query.service';

export class History {
  message: string;
  type: string;
  query?: string;

  constructor(message: string, type: string, query?: string) {
    this.message = message;
    this.type = type;
    this.query = query;
  }
}

@Component({
  selector: 'app-editor-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  @Input()
  historyCount: ElementRef;

  histories: History[] = [];

  constructor(
    private historyService: HistoryService,
    private queryService: QueryService
  ) {
    this.historyService.OnHistoryUpdated.subscribe(
      (data: any) => (this.histories = data)
    );
  }

  ngOnInit() {}

  executeQuery(query) {
    this.queryService.executeQuery(query);
  }
}
