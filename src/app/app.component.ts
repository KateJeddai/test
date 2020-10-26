import { Component, OnInit, Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT} from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ang-app';
  langs = ['English', 'Deutsch'];
  languageSelect = new FormGroup({
    language: new FormControl('')  
  })
    
  constructor(private http: HttpClient,
              @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    console.log(window.location)
  }

  changeLanguage() {
    const lang = this.languageSelect.value.language;
    const url = lang === "English" ? "https://dashboard.heroku.com/apps/stormy-thicket-55977/api/en" : "https://dashboard.heroku.com/apps/stormy-thicket-55977/api/de";
    this.document.location.href = url;
  }
}
