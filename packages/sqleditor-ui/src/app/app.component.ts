import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sqleditor-ui';
  constructor(public matSnackBar: MatSnackBar) {
  }
  ngOnInit() {
  }
}
