import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringCleaner',
  standalone: true
})
export class StringCleanerPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    // Remove non-letters
    const lettersOnly = value.replace(/[^a-zA-Z]/g, '');

    // Reverse the result
    return lettersOnly.split('').reverse().join('');
  }
}
