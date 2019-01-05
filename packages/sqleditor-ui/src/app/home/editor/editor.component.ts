import {
  Component,
  HostListener,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';
import { QueryEditor } from 'src/app/utilities/types';
import { DynamicDatabase } from 'src/app/utilities/tree-db.class';
import { QueryService } from 'src/app/services/query.service';
import { QueryComponent } from './query/query.component';
import { HistoryService } from 'src/app/services/history.service';
import { Subject } from 'rxjs';
import { History } from './history/history.component';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  providers: [DynamicDatabase]
})
export class EditorComponent {
  @ViewChild(QueryComponent) queryComponent: QueryComponent;
  @ViewChild('historyCountLabel') historyCountLabel: ElementRef;

  constructor(
    private queryService: QueryService,
    private historyService: HistoryService
  ) {
    this.historyService.OnHistoryUpdated.subscribe((data: History[]) => {
      this.historyCountLabel.nativeElement.innerText = '' + data.length;
    });
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.ctrlKey && event.shiftKey && event.key === 'E') {
      console.log('shortcut');
      this.execute();
    }
  }

  executeQuery(event) {
    console.log('execute query');
    this.execute();
  }

  execute() {
    const queryData: QueryEditor = this.queryComponent.getActiveTabContent();
    const query: string = queryData.query.trim();
    this.queryService.executeQuery(query);
  }

  clearQueryEditor(event) {
    this.queryComponent.resetQueryEditor();
  }
}
