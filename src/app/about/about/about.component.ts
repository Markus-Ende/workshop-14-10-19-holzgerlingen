import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'me-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    // interval(1000).subscribe(i => console.log(i));
    console.log('about init');
  }
  ngOnDestroy(): void {
    console.log('about destroy');
  }
}
