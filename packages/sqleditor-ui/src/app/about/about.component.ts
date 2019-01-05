import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  template: `
    <h1 mat-dialog-title>About</h1>
    <div mat-dialog-content>
      <p>
        Made with ♡ by
        <a href="https://github.com/sumitparakh" target="_blank"
          >Sumit Parakh</a
        >
        for both Developers & Database Admins
      </p>
      <p>
        Currently in beta release and only for presentation purpose. UI & UX
        might change in final release
      </p>
      <p>Build: <a href="https://github.com/sumitparakh/sqleditor" target="_blank">master</a></p>
    </div>
    <div mat-dialog-actions [style.float]="'right'">
      <button mat-button [mat-dialog-close]="true" >Ok</button>
    </div>
  `
})
export class DialogOverviewExampleDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [MatDialog]
})
export class AboutComponent implements OnInit {
  constructor(public dialog: MatDialog, private router: Router) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      height: '315px',
      width: '400px',
      data: { name: 'Sumit' }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigateByUrl('');
    });
  }

  ngOnInit() {}
}
