import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NewAuction } from 'src/app/models/new-auction';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-auction',
  templateUrl: './add-auction.component.html',
  styleUrls: ['./add-auction.component.css']
})
export class AddAuctionComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router) { }

  displayFormSubmitError: boolean = false;

  newAuction: NewAuction = {
    title: "",
    buyOut: 0,
    startingBid: 0,
    status: true,
    startingDate: "",
    expiration: "",
    scpName: "",
    user_id: ""
  };

  ngOnInit(): void {
    this.newAuction.user_id = localStorage.getItem("id")!;
  }

  processForm(newAuctionForm: NgForm){
    console.log(this.newAuction);
    if(newAuctionForm.form.status == 'VALID'){
      this.adminService.createNewAuction(this.newAuction);
      this.router.navigateByUrl('/admin/view-auctions')
    }
    else{
      this.displayFormSubmitError = true;
    }
  }
}
