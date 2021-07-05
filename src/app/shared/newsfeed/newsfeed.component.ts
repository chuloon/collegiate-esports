import { Post } from './../../classes/post';
import { IconSetService } from '@coreui/icons-angular';
import { Component, Input, OnInit } from '@angular/core';
import { cilClock } from '@coreui/icons';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {
  @Input() title: string;
  @Input() showSummary: boolean = false;
  @Input() showThumbnail: boolean = true;
  @Input() isMain: boolean = false;
  @Input() filter: string = 'latest';

  posts: Post[] = [];

  constructor(public iconSet: IconSetService, private db: AngularFirestore) {
    iconSet.icons = { cilClock }
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts = () => {
    const posts$ = this.db.collection('posts', ref => ref.where('tags', 'array-contains', this.filter)).valueChanges();

    posts$.subscribe(data => {
      this.posts = [];
      for(let i = 0; i < data.length; i++) {
        this.posts.push(new Post(data[i]));
      }
    });
  }
}
