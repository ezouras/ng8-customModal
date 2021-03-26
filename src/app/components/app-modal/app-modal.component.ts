import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { modalService } from "./../../services/modal.service";
@Component({
  selector: 'app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.css']
})
export class AppmodalComponent implements OnInit, OnDestroy{
  @Input() id: string;
  private element:any;

  constructor(private modalService:modalService, private el:ElementRef) {
    console.log("in app modal constructor and element is ", el);
      this.element = el.nativeElement;
   }

  ngOnInit():void {
    let modal = this;

    if(!this.id){
      console.error("modal must have an id");
      return;
    }

    this.element.style.display="none";
    document.body.appendChild(this.element);

    this.element.addEventListener("click",e=>{
      if(e.target.className === "app-modal"){
        modal.close();
      }
    });

    this.modalService.add(this);
  }

  ngOnDestroy(){
    this.modalService.remove(this.id);
    this.element.remove();
  }

  //open modal
  open(){
    console.log("opening modal..")
    this.element.style.display = "block";
    document.body.classList.add("app-modal-open")
  }

  close(){
    console.log("closing modal...")
    this.element.style.display="none";
    document.body.classList.remove("app-modal-open")
  }

}
