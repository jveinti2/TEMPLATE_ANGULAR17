import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: ` <h1 style="color: #de7d2b;" class="fs-4 pt-3 ">{{ title }}</h1> `,
})
export class TitleComponent {
  @Input({ required: true }) title!: string;
}
