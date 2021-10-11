import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  language:string='';
  listofLanguages:string[]=["English","German","Spanish"];
  addlanguage(){
    console.log("Add Button Clicked!!");
    this.listofLanguages.push(this.language);
    console.log(this.listofLanguages);
  }
  deletefirst(){
    this.listofLanguages.splice(0,1);
  }
}
