import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'LearningApp | What you need to watch';

  constructor(private httpClient: HttpClient) {
    console.log('eks dee')
  }
 
  //Verwerken api calls
  // https://www.youtube.com/watch?v=MN2WkxPnGTo
  // https://developers.google.com/youtube/v3/getting-started
  getStuff(){
    this.httpClient.get('https://my-json-server.typicode.com/typicode/demo/posts/?id=1')
    .subscribe(
      (data: any[]) => console.log(data)
    )
  }
}
