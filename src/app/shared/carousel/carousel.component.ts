import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images = [
    { path: 'https://csgopedia.com/uploads/blog/image069.jpg', data: "hello" },
    { path: 'https://wallpapercave.com/wp/wp2349422.jpg', data: "hello2" },
    { path: 'https://i.pinimg.com/originals/63/f5/00/63f5000130d5b138692cb1658c337758.jpg', data: "hello3" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  handleCarouselEvents = (event) => {
    console.log(event);
  }

}
