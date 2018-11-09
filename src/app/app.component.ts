import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list = [
    { name: 'Bar' },
    { name: 'Foo' },
  ];

  fakeData = {
    name: 'Suresh',
    job: 'Dev',
    city: 'Deniyaya'
  };
}
