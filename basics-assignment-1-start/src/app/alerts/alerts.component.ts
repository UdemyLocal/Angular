import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  template: `
    <p>This is the alerts component, it was generated using angular CLI. <br>
      It is nesting two types of alert. <br>
      It is using a default selector, inline template and inline styles. <br>
      It's styles are inherited by it's child components.</p>
    <div class="app-success-alert"></div>
    <div app-warning-alert></div>
  `,
  styles: [`
    ::ng-deep.c-alerts {
      padding: 10px;
      border-radius: 8px;
    }
  `]
})
export class AlertsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
