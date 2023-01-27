import { Component, OnInit } from '@angular/core';
import { fstat } from 'fs';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private fs:FirestoreService) { }

  ngOnInit(): void {
   this. getData()
   this.deleteData()
  }


 getData() {
  this.fs.getData().subscribe(data=>{
    data.forEach(result=>{
      console.log(result.data())
    })
  })
 
 }
 deleteData(){
    this.fs.deleteData().then((res)=>{
      console.log(res)
    })
}
}
