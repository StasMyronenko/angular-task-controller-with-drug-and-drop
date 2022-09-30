import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() showLogo: boolean = true;
  @Input() isAuthorized: boolean = false;  // mb create function for this
  constructor() { }

}
