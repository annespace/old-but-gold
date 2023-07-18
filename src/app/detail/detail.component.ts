import { Component } from '@angular/core';
import { SongInfo } from '../songInfo';
import { MY_SONGS } from '../mySongs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  mySongs: SongInfo[] = MY_SONGS;
  selectedSongIndex: number = 0;

  showSongDetails(index: number): void {
    this.selectedSongIndex = index;
  }
}
