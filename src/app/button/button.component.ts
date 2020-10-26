import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() langChanged = new EventEmitter<String>();
  lang: String = "Deutsch";

  constructor() { }

  ngOnInit(): void {
  }

  changeLang() {
    this.lang === 'English' ? 'Deutsch' : 'English';
    this.langChanged.emit(this.lang);
  }

}
