import { Injectable } from "@angular/core";

@Injectable({
  providedIn:"root"
})


export class modalService{
  private modals: any[] = [];

  add(modal:any){
    console.log("adding modal ", modal)
    this.modals.push(modal);
  }

  remove(id:string){
    this.modals = this.modals.filter((modal)=>{
      modal.id !== id;
    })
  }

  open(id:string){
    let modal:any = this.modals.filter(modal=>modal.id == id)[0];
    modal.open();
  }

  close(id:string){
    let modal:any = this.modals.filter(modal=>modal.id==id)[0];
    modal.close();

  }

}
