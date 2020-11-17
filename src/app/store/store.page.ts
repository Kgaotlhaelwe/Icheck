import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 3
    
  };
  constructor() { }

  ngOnInit() {
  }

}
