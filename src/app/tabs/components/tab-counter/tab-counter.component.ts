import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-counter',
  templateUrl: './tab-counter.component.html',
  styleUrls: ['./tab-counter.component.css']
})
export class TabCounterComponent implements OnInit {
  @Input()
  total: number;


  constructor() { }

  ngOnInit() {
  }

}
