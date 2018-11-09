import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child-json-printer',
  templateUrl: './child-json-printer.component.html',
  styleUrls: ['./child-json-printer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildJsonPrinterComponent implements OnInit {
  @Input() obj;
  track = 0;

  constructor() {}

  ngOnInit() {}

  print() {
    // console.group('child-json-printer-cmp');
    console.log('from json printer cmp');
    // console.log('count: ' + ++this.track);
    // console.groupEnd();

    return this.obj;
  }
}
