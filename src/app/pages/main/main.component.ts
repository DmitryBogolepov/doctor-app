import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterLink,
    Swiper
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
