import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://www.espn.com/', 'https://launchcode.instructure.com/courses/62', 'https://media2.giphy.com/media/13FrpeVH09Zrb2/giphy.gif'];

  constructor() { }

  ngOnInit() {
  }

}
