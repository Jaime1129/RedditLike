import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  // add a topic
  addTopic(title: HTMLInputElement): boolean {
    console.log(`Successfully add a topic: ${title.value}`);
    return false;
  }
}
