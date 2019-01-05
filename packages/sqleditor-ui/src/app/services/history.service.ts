import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { History } from '../home/editor/history/history.component';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  @Output() OnHistoryUpdated: EventEmitter<
    BehaviorSubject<any>
  > = new EventEmitter<BehaviorSubject<any>>();

  histories: any = [];
  constructor() {}

  addHistory(history: History) {
    this.histories.push(history);
    this.OnHistoryUpdated.next(this.histories);
  }
}
