import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss']
})
export class SamplesComponent implements OnInit {

  /*counter = 0;*/

  nameValue: string;
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  /* Пример 1
  increment(): void {
    this.counter++;
  } */

  private getTimeString = (): string => {
    const d = new Date();
    return `name-${d.getMinutes()}-${d.getSeconds()}-${d.getMilliseconds()}`;
  }

  changeName(): void {
    this.nameValue = this.getTimeString();
  }

  changeValue(): void {
    this.counter++;
  }

  changeBoth(): void {
    this.changeName();
    this.changeValue();
  }

}
