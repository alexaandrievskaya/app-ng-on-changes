import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-sample-item',
  templateUrl: './sample-item.component.html',
  styleUrls: ['./sample-item.component.scss']
})
export class SampleItemComponent implements OnInit, OnChanges {

  /* Пример 1
  @Input() value: string; */

  @Input() name: string;
  @Input() value: number;

  constructor() { }

  ngOnInit(): void {
  }

  /* { [propertyName: string]: SimpleChange } - массив с строковыми ключами и значениями типа SimpleChange
  * С помощью этого массива можно определить, какие изменения были внесены в компонент,
  * т.е. какие свойства изменились, какими были значения и какие они сейчас */

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
    /* сработал метод ngOnChanges, ниже к примеру 1
    console.log(`ngOnChanges --- "value" = "${this.value}"`); */
    const msgArray: string[] = [];

    /* Будет столько итераций, сколько свойство одновременно изменилось */
    for (const propName in changes) {
      msgArray.push(`Свойство "${propName}", \n\tтекущее значени = ${changes[propName].currentValue}, \n\tпредыдущее значение = ${changes[propName].previousValue}`);
    }

    console.log(msgArray.join('\n'));
  }

}


