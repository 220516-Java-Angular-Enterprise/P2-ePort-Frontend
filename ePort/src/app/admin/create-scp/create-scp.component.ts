import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SCP } from 'src/app/models/SCP';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-create-scp',
  templateUrl: './create-scp.component.html',
  styleUrls: ['./create-scp.component.css']
})
export class CreateScpComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  displayFormSubmitError: boolean = false;
  
  scp: SCP = {
    name: ""
  }

  ngOnInit(): void {
  }

  processForm(newSCP: NgForm){
    if(newSCP.form.status == 'VALID'){
      console.log(this.scp);
      this.adminService.createSCP(this.scp);
    }
    else{
      this.displayFormSubmitError = true;
    }
  }
}
