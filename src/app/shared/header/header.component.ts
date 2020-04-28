import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  email: string;


  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  loginModal() {
    const dialogRef = this.dialog.open(LoginModalComponent, { data: {email: this.email}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
