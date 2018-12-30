import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Table } from '../utilities/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IDatabaseService {
  constructor(private http: HttpClient) {}

  getDatabases(): Observable<Table[]> {
    return this.http.get<Table[]>('assets/datasets/order_sample.json');
  }
}
