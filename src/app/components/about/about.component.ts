import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {
  private track = 0;

  constructor() { }

  ngOnInit() {}

  printAboutData() {
    // console.group('About');
    console.log('From about cmp');
    // console.log('count: ' + ++this.track);
    // console.groupEnd();

    return 'Iam from about';
  }
}
