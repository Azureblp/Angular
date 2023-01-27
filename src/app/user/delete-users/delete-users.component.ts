import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
 
import { FormControl, FormGroup ,FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.scss']
})
export class DeleteUsersComponent implements OnInit {
form: FormGroup;


  // checkOutForm: FormGroup;
  constructor(private fb :FormBuilder) { 
    // this.checkOutForm = fb.group({
    //   emailaddress:new FormControl(),
    //   quantity:new FormControl(),
    //   terms:new FormControl(),
    // }); 
    // this.checkOutForm = fb.group({
    //   emailaddress:['',[Validators.required,
    //                     Validators.email,
    //                     Validators.minLength(4),
    //                   Validators.maxLength(10)]],
    //   quantity:['',Validators.required],
    //   terms:['',Validators.requiredTrue],
    //   item:this.fb.array([
    //     this.fb.group({
    //       itemId:[''],
    //       itemName:[''],
    //       itemDesc:[''],
    //       itemDone:['',Validators.requiredTrue]
    //     })
       
    // ])
    // }); 
  

  }

  ngOnInit(): void {
   
  }

   


}
