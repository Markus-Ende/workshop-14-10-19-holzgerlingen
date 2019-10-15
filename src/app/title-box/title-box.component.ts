import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'me-title-box',
  templateUrl: './title-box.component.html',
  styles: [``]
})
export class TitleBoxComponent implements OnInit {
  @Input() title = 'no title';
  @Output() titleClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onTitleClick() {
    this.titleClicked.emit(this.title);
  }
}
