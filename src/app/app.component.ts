import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public Pages = [
    {
      title: 'Hello',
      url: '',
      icon: ''
    },
    {
      title: 'Welcome Back',
      url: '',
      icon: ''
    },
    {
      title: 'Goodbye',
      url: '',
      icon: ''
    },
  ];

  constructor() {}

  public test(){
    alert('woop');
  }
}
