import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../shared';
import { BeerService } from '../shared/beer/beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css'],
  providers: [BeerService, GiphyService]
})
export class BeerListComponent implements OnInit {
  beers: Array<any> = [];
  constructor(private beerService: BeerService, private giphyService: GiphyService) { }

  ngOnInit(): void {
    this.beerService.getAll().subscribe(
      data => {
        this.beers = data;
        for (const beer of this.beers) {
          this.giphyService.get(beer.name).subscribe(url => beer.giphyUrl = url);
        }
      },
      error => console.log(error)
    )
  }

}
