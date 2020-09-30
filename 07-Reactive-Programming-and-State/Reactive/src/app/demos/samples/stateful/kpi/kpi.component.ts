import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { StatefulVoucherService } from '../stateful-voucher.service';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.scss'],
})
export class KpiComponent implements OnInit {
  constructor(private vs: StatefulVoucherService) {}

  sum$ = this.vs
    .getAllVouchers()
    .pipe(map((vs) => vs.reduce((runningSum, v) => runningSum + v.Amount, 0)));

  ngOnInit(): void {}
}
