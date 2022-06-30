import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Bid } from 'src/app/models/bid';
import { SCP } from 'src/app/models/SCP';
import { ViewedAuction } from 'src/app/models/viewed-auction';
import { AuctionService } from 'src/app/services/auction.service';

@Component({
  selector: 'app-auction-details',
  templateUrl: './auction-details.component.html',
  styleUrls: ['./auction-details.component.css']
})
export class AuctionDetailsComponent implements OnInit {

  constructor(private auctionService: AuctionService, private currRouter: ActivatedRoute) { }

  title: string ="";
  displayFormSubmitError: boolean = false;

  auction: ViewedAuction = {
    id: "",
    title: "",
    buyout_bid: 0,
    starting_bid: 0,
    startDate: undefined,
    expirationDate: undefined,
    highestBid: 0,
    scpName: "",
    scpImage: "",
    scpDescription: ""
  }

  bid: Bid = {
    auction_id: "",
    user_id: "",
    amount: 0
  }

  ngOnInit(): void {
    this.currRouter.params.subscribe(p => {
      this.title = p['title'];
      this.auctionService.getAuctionDetails(this.title).then(a =>{
        this.auction = a; 
        if(this.auction.scpImage === "ERROR NO IMAGE FOUND"){
          this.auction.scpImage = "https://i.kym-cdn.com/photos/images/original/000/449/811/171.jpg";
        }
      })
    })
  }

  processForm(newBid: NgForm){
    if(newBid.form.status == 'VALID'){
      this.bid.auction_id = this.auction.id;
      this.bid.user_id = localStorage.getItem("id")!;
      this.auctionService.newBid(this.bid);
    }
    else{
      this.displayFormSubmitError = true;
    }
  }
}
