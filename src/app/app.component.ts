import { Component, OnInit } from '@angular/core';
import * as gplay from 'google-play-scraper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'online-store';
  ngOnInit(): void {
    // gplay
    //   .app({ appId: 'com.google.android.apps.translate' })
    //   .then(console.log, console.log);
  }
}
