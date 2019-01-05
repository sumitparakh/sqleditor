import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-message',
  template: `
    <mat-icon [ngClass]="data.type">
      {{
        data.type || data.type == 'success' ? 'verified_user' : 'error_outline'
      }}
    </mat-icon>
      &nbsp;
    <span [ngClass]="data.type">
      {{ data.message ? data.message : 'Query executed successfully' }}.</span
    >
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      .error {
        color: #eb8989;
      }
      span {
        color: #81c784;
        font-family: Roboto, 'Helvetica Neue', sans-serif;
      }
      mat-icon {
        color: #4caf50;
      }
    `
  ]
})
export class MessageComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
  }
}
