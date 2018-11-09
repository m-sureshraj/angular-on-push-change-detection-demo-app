import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodolistComponent implements OnInit {
  @Input() initialData = [];

  constructor() { }

  ngOnInit() {}

  addName(name) {
    if (!name.trim()) return;

    // mutating the []
    this.initialData.push({ name });
  }

  log() {
    console.log('From todo list');
  }
}
