import { Component, OnInit, AfterViewInit, ɵSWITCH_COMPILE_PIPE__POST_R3__ } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  images: string[] = [
    'assets/banner-1.png',
    'assets/banner-2.png'
  ];

  mySwiper: Swiper;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container');
  }

}
