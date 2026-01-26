import { Component, signal } from '@angular/core';
import { ActivityIcon } from 'ng-animated-icons';

@Component({
  selector: 'app-root',
  imports: [ActivityIcon],
  template: `
    <i-activity />

    <!-- HTML-style attributes -->
    <i-activity class="border p-4" color="purple" size="24" strokeWidth="1" animate />

    <!-- Regular input binding -->
    <i-activity
      [class]="'border p-4'"
      [color]="'purple'"
      [size]="24"
      [strokeWidth]="1"
      [animate]="false"
    />

    <!-- Will be blue, with size 30 -->
    <i-activity />

    <!-- Will still be blue, but with size 36 -->
    <i-activity size="36" />
  `,
  styles: `
    :host {
      margin: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  `,
})
export class App {
  protected readonly title = signal('test-icons');
}
