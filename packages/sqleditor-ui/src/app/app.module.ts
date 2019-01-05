import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { MatModule } from './mat.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { EditorComponent } from './home/editor/editor.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResultComponent } from './home/editor/result/result.component';
import { HistoryComponent } from './home/editor/history/history.component';
import { QueryComponent } from './home/editor/query/query.component';
import { SidebarComponent } from './home/editor/sidebar/sidebar.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { MessageComponent } from './message/message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockService } from './utilities/mock.class';
import { AboutComponent, DialogOverviewExampleDialogComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    EditorComponent,
    ResultComponent,
    HistoryComponent,
    QueryComponent,
    SidebarComponent,
    MessageComponent,
    AboutComponent,
    DialogOverviewExampleDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  providers: [MatSnackBar, MockService],
  bootstrap: [AppComponent],
  entryComponents: [MessageComponent, AppComponent, DialogOverviewExampleDialogComponent]
})
export class AppModule {}
