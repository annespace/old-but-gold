import { Component } from '@angular/core';
import { choann } from '../choann';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  personalData: choann = new choann();
}
