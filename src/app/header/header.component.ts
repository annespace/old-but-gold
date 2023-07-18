import { Component } from '@angular/core';
import { choann } from '../choann';
import { MY_SONGS } from '../mySongs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  personalData: choann = new choann();
  mySongs = MY_SONGS;
}
