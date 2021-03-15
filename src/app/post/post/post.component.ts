import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe(params => {
      console.log(params['slug']);
    });
  }

  ngOnInit(): void {
  }

}
