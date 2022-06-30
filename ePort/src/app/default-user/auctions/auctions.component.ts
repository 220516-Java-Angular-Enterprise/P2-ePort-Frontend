import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuctionShowing } from 'src/app/models/auction-showing';
import { AuctionService } from 'src/app/services/auction.service';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent implements OnInit {

  constructor(private auctionService: AuctionService, private router: Router) { }

  auctions: AuctionShowing[] = [];

  ngOnInit(): void {
    this.auctionService.getAllAuctions().then(a => {
      this.auctions = a;
    });
  }

  goToAuction(title: string | undefined) {
    this.router.navigateByUrl('default-user/auctions/' + title)
  }

}
