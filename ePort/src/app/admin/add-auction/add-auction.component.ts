import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuctionShowing } from 'src/app/models/auction-showing';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-auction',
  templateUrl: './add-auction.component.html',
  styleUrls: ['./add-auction.component.css']
})
export class AddAuctionComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router) { }

  displayFormSubmitError: boolean = false;

  auctionShowing: AuctionShowing = {
    id: "",
    title: "",
    auctionStatus: true,
    startingBid: 0,
    buyoutBid: 1
  };

  placeholders = {

  };

  ngOnInit(): void {
  }

}
