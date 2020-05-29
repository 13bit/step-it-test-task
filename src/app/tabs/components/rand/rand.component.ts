import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rand',
  templateUrl: './rand.component.html',
  styleUrls: ['./rand.component.css']
})
export class RandComponent implements OnInit {
  rand: number;

  constructor() {
  }

  ngOnInit() {
    this.rand = this.generateRand();
  }

  generateRand(): number {
    return Math.floor(Math.random() * (100 - 1)) + 1;
  }
}
