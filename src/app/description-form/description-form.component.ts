import { Component, HostListener } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-description-form',
  standalone: true,
  imports: [ButtonModule, ChipModule],
  templateUrl: './description-form.component.html',
  styles: ``
})
export class DescriptionFormComponent {
  @HostListener('window:beforeunload')
  exit() {
    return confirm();
  }
}
