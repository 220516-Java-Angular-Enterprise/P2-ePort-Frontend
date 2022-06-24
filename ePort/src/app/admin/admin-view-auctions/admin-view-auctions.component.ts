import { Component, OnInit } from '@angular/core';
import { AuctionShowing } from 'src/app/models/auction-showing';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-view-auctions',
  templateUrl: './admin-view-auctions.component.html',
  styleUrls: ['./admin-view-auctions.component.css']
})
export class AdminViewAuctionsComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  auctions: AuctionShowing[] = [];

  ngOnInit(): void {
    this.adminService.getAllAuctionShowings().then(a => {
      this.auctions = a;
    });
  }

}
