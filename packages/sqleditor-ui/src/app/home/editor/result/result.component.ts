import { Component, OnInit, ViewChild } from '@angular/core';
import { QueryService, QueryData } from 'src/app/services/query.service';
import {
  MatTableDataSource,
  MatPaginator,
  MatSnackBar
} from '@angular/material';
import { MessageComponent } from 'src/app/message/message.component';
import { HistoryService } from 'src/app/services/history.service';
import { History } from '../history/history.component';
import { MockService } from 'src/app/utilities/mock.class';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' }
];

@Component({
  selector: 'app-editor-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  tableSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  displayedColumns: string[];

  constructor(
    private queryService: QueryService,
    public snackBar: MatSnackBar,
    private historyService: HistoryService,
    private mock: MockService
  ) {
    this.queryService.OnQueryExecuted.subscribe(
      (data: QueryData) => {
        if (data.result['error']) {
          this.displayError(
            data.result['error'] + '. Displaying mock data.',
            data.query
          );
          this.onQueryExecutedHandler(
            this.mock.getMockedRecords(),
            data.query,
            true
          );
        }
        this.onQueryExecutedHandler(data.result, data.query);
      },
      (error: any) => {
        this.displayError(error);
      }
    );
  }

  displayError(error: string, query: string = '') {
    this.historyService.addHistory(new History(error, 'error', query));
    this.snackBar.openFromComponent(MessageComponent, {
      data: { type: 'error', message: error }
    });
  }

  onQueryExecutedHandler(result: any, query: string, error: boolean = false) {
    if (result && result.length > 0) {
      this.tableSource = new MatTableDataSource<any>(result);
      this.displayedColumns = Object.keys(result[0]);
      setTimeout(() => (this.tableSource.paginator = this.paginator));

      if (!error) {
        this.snackBar.openFromComponent(MessageComponent, {
          data: { type: 'success' }
        });
        this.historyService.addHistory(
          new History(query + ': executed successfully.', 'success', query)
        );
      }
    }
  }

  ngOnInit() {}

  applyFilter(filterValue: string) {
    this.tableSource.filter = filterValue.trim().toLowerCase();
  }
}
