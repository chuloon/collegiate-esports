import { IconSetService } from '@coreui/icons-angular';
import { Component, Input, OnInit } from '@angular/core';
import { cilClock } from '@coreui/icons';

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

  constructor(public iconSet: IconSetService) {
    iconSet.icons = { cilClock }
  }

  ngOnInit(): void {
  }

}
