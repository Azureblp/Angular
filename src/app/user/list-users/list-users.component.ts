import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UtilServiceService } from 'src/app/services/util-service.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  listUser:any=[]
  constructor(private userService :UserService,private util:UtilServiceService) { }

  ngOnInit(): void {
  
    this.getlistData()

  }


  getlistData(){

   
      this.util.setLoaderValue(true)
      this.userService.listUsers().subscribe(data=>{
        this.util.setLoaderValue(false)
        this.listUser=data
       }), ((err:any)=>{this.util.setLoaderValue(false)})
  


  }

}
