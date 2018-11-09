import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  @Input() name;
  @Input() index;

  constructor() { }

  ngOnInit() {}

  log() {
    console.log(this.index + ' Todo Changed');
  }
}
