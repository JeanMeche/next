import { Component, input } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'component-parent',
  standalone: true,
  template: `{{ val() }} `,
})
class Child {
  val = input('');
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Child],
  template: `
    <h1>Hello, {{ title }}</h1>
    <component-parent [val]="title" />
  `,
})
export class AppComponent {
  title = 'signals';
}

bootstrapApplication(AppComponent);
