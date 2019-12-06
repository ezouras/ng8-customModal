import { Component, OnInit } from '@angular/core';
import { modalService } from "./../services/modal.service";
import { SavedStuffService } from "./../services/savedStuff.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bodyText:String;
  quotes:Array<string>;

  constructor(private modalService:modalService, private savedStuffService:SavedStuffService) {
      console.log("modal service is ", modalService)
   }

  ngOnInit() {
    this.bodyText = "this text can be updated by the modal";
    this.quotes = this.savedStuffService.getSavedStuff();
  }

  openModal(id:string){
    this.modalService.open(id);
  }

  closeModal(id:string){
    this.modalService.close(id)
  }

}
