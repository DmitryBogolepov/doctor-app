import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menu = document.getElementById('menu');
  menuIcon = document.getElementById('menu-icon');
  closeIcon = document.getElementById('close');

  open() {
    if (this.menu) {
      this.menu.style.transform = 'translateX(0%)';
    }
  }

  close() {
    if (this.menu) {
      this.menu.style.transform = 'translateX(-100%)';
    }
  }

}
