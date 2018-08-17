import { Component, OnInit } from '@angular/core';
import { YOUTUBEBOOKS } from '../mock-youtube-book';

@Component({
  selector: 'app-youtube-book',
  templateUrl: './youtube-book.component.html',
  styleUrls: ['./youtube-book.component.scss']
})
export class YoutubeBookComponent implements OnInit {

  youtubeBooks = YOUTUBEBOOKS;
  
  constructor() { }

  ngOnInit() {
  }

}
