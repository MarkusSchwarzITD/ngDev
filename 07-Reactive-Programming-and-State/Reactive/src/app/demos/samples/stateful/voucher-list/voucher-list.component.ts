import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Voucher } from '../../model';
import { StatefulVoucherService } from '../stateful-voucher.service';

@Component({
  selector: 'app-voucher-list',
  templateUrl: './voucher-list.component.html',
  styleUrls: ['./voucher-list.component.scss'],
})
export class VoucherListComponent implements OnInit {
  dataSource: MatTableDataSource<Voucher>;
  displayedColumns = ['ID', 'Text', 'Date', 'Amount'];

  constructor(private vs: StatefulVoucherService) {}

  ngOnInit() {
    this.vs.getAllVouchers().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  editItem(row) {
    console.log('Edit Row', row);
  }
}
