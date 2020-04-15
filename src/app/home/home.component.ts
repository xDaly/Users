import { Component, OnInit } from '@angular/core';
import {  HttpClient  } from '@angular/common/http';
import { TestService } from '../test.service';


 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
  

  constructor(private usersser:TestService) {
    
 
   }


 

  ngOnInit() {
  }

deleteuser(id){
this.usersser.deleteuser(this.usersser.userslist.id)
}

}
