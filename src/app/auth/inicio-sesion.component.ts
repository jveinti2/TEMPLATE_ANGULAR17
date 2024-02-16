import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio-sesion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InicioSesionComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  logo_mdc: string = `${environment.URL_SERVE}assets/img/logo-mdc.png`;
  _loading: string = `${environment.URL_SERVE}assets/img/loading.gif`;

  ngOnInit(): void {}
}
