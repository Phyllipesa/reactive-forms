import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePlaceholder'
})
export class PhonePlaceholderPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
