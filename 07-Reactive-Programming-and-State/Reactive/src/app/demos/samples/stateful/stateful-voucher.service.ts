import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Voucher } from '../model';
import { environment } from 'src/environments/environment';
import { lateVoucher } from '../late-voucher';

@Injectable({
  providedIn: 'root',
})
export class StatefulVoucherService {
  constructor(private httpClient: HttpClient) {
    this.initData();
    this.addLateVoucher();
  }

  private vouchers: BehaviorSubject<Voucher[]> = new BehaviorSubject([]);

  private initData() {
    this.httpClient
      .get<Voucher[]>(`${environment.apiUrl}`)
      .subscribe((data) => {
        this.vouchers.next(data);
      });
  }

  addLateVoucher() {
    setTimeout(() => {
      const arr = this.vouchers.getValue();
      arr.push(lateVoucher as Voucher);
      this.vouchers.next(arr);
    }, 4000);
  }

  getAllVouchers(): Observable<Voucher[]> {
    return this.vouchers;
  }

  getVoucherById(id: number): Observable<Voucher> {
    return this.vouchers.pipe(map((m) => m.find((mi) => mi.ID == id)));
  }

  insertVoucher(v: Voucher): any {
    const arr = this.vouchers.getValue();
    arr.push(lateVoucher as Voucher);
    this.vouchers.next(arr);
  }

  updateVoucher(v: Voucher): any {}

  deleteVoucher(id: number) {}
}
