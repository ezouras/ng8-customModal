import {Injectable} from "@angular/core";

@Injectable({
  providedIn:"root"
})

export class SavedStuffService{
  savedStuff:Array<string>=[
    "one is the lonliest number that you ever knew",
    "Get your facts first, then distort them as you please",
    "Go to heaven for the climate, hell for the company",
    "Common sense is the collection of prejudices aquired by age eighteen",
    "The superfluous, a very necessary thing",
    "if you want a guarantee, buy a toaster"
  ]

getSavedStuff(){
  return [...this.savedStuff];

}

}
