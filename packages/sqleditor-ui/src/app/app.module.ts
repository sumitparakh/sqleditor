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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    EditorComponent,
    ResultComponent,
    HistoryComponent,
    QueryComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    MatModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
