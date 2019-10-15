import { Component } from '@angular/core';

@Component({
  selector: 'me-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'workshop-holzgerlingen';

  onTitleClick(event: string) {
    this.appTitle = this.appTitle + '!';
    console.log(event);
  }
}
