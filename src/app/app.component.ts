import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  notes = [
    ['notaPrueba', 'bien']
  ];

  ngOnInit() {
    $('.collapsible').collapsible();
  }

  addNote(Title: HTMLInputElement, Content) {
    console.log(Title.value);
    const text = document.getElementById('textarea1').value;
    console.log(text);
  }

}
