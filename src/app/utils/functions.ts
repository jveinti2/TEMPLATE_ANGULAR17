import swal from 'sweetalert2';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class Functions {
  private _loading_tools: string = `${environment.URL_SERVE}assets/img/loading.gif`;
  loadingFloatingTools(): any {
    return swal.fire({
      html: `<img src="${this._loading_tools}" width="30" style="margin-bottom: 10px;">`,
      width: 100,
      padding: '0.2em',
      background: '#fff',
      backdrop: 'rgb(0 0 0 / 30%)',
      showConfirmButton: false,
      showCloseButton: false,
      showCancelButton: false,
      allowOutsideClick: false,
    });
  }
  formatMoney(number: any) {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }
  inTwoDigits(number: any): string {
    return `0${number}`.slice(-2);
  }
  generateColorRandom() {
    return (
      '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')
    );
  }
  floatingValue(number: any): number {
    return Math.round(number * 100) / 100;
  }
}
