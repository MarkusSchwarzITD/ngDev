import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StatefulVoucherService } from './stateful-voucher.service';
import { Voucher } from '../model';

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.scss'],
  providers: [StatefulVoucherService],
})
export class StatefulComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
