import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError, of } from 'rxjs';
import { IDatabaseService } from './idatabase.service';
import { MockedColumns } from '../utilities/types';

export class QueryData {
  public result: any[];
  public query: any;

  constructor(result: any[] = [], query: string = '') {
    this.result = result;
    this.query = query;
  }
}

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  @Output() OnQueryExecuted: Subject<QueryData> = new Subject<QueryData>();

  tables: Observable<MockedColumns[]>;

  constructor(private databaseService: IDatabaseService) {}

  executeQuery(query) {
    return this.databaseService.getDatabases(query).subscribe(
      (data: any) => {
        this.OnQueryExecuted.next(new QueryData(data, query));
      },
      (error: any) => {
        this.OnQueryExecuted.error(error);
      }
    );

  }
}
