import { Component, OnInit, Inject } from '@angular/core';
import { PeriodicElement } from 'src/app/models/PeriodicElement';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.scss']
})
export class ElementDialogComponent implements OnInit {

  isChange: boolean = false;
  element!: PeriodicElement

  constructor(
    public dialogRef: MatDialogRef<ElementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement,) { }

  ngOnInit(): void {
    if (this.data.position !== null) {
      this.isChange = true;
    } else {
      this.isChange = false;
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
