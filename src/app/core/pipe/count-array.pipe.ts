import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countArray',
})
export class CountArrayPipe implements PipeTransform {
  transform(value: Array<any>): number {
    let count = 0;
    console.log(value);
    return count;
  }
}
