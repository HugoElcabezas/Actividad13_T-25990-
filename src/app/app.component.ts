import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  notes = [];

  ngOnInit() {
    $('.collapsible').collapsible();
  }

  addNote(Title: HTMLInputElement, Content) {

    var text = (<HTMLInputElement>document.getElementById('textarea1')).value;

    if (Title.value !== '' && text !== '') {
      this.notes.unshift([Title.value,text]);
    } else {
      alert('Please add a title and a content for your new note.');
    }
    Title.value = null;
    $('textarea#textarea1').val(null);
    M.textareaAutoResize($('#textarea1'));
  }

}
