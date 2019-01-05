import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MockedColumns } from '../utilities/types';
import { map, catchError } from 'rxjs/operators';
import { MockService } from '../utilities/mock.class';
import { Observable, throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IDatabaseService {
  constructor(private http: HttpClient, private mock: MockService) {}

  getDatabases(query: string): Observable<any> {
    let finalQuery: string[] = [];
    try {
      finalQuery = this.parseQuery(query);
    } catch (exception) {
      return of<any>({ error: exception });
    }
    return this.http.get<any>('assets/datasets/order_sample.json').pipe(
      map((res: any[]) =>
        res.map((item: MockedColumns) => this.arrayToJson(finalQuery, item))
      ),
      catchError<any, never>((err: any) => throwError(err))
    );
  }

  parseQuery(query: string) {
    const regex = /(?<=select\s).*(?=\sfrom)/gim;
    let m,
      finalQuery = '';
    while ((m = regex.exec(query)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
        finalQuery = match;
      });
    }

    if (!finalQuery) {
      throw new Error(query + ': Unable to parse query');
    }
    finalQuery = finalQuery.trim() === '*' ? null : finalQuery;
    return finalQuery
      ? finalQuery.replace(/ /g, '').split(',')
      : this.mock.getMockedColumns();
  }

  arrayToJson(arr: any = [], item: MockedColumns): any {
    const columns = {};
    arr.forEach(element => {
      columns[element] = item[element];
    });

    return columns;
  }
}
