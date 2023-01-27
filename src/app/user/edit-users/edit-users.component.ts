import { Component, OnInit } from '@angular/core';
import {  ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {
  closeResult = '';
  imageChangedEvent: any = '';
    croppedImage: any = '';

  employeedetails:any=[
    {
    employeeName:" sanjay",
    employeeId:"BLPCE233",
    Dob:"12-12-2000",
    gender: "male",
    empImage:"../../assets/image/sample.jpg",
    
  },
  {
    employeeName:" Wesly david ",
    employeeId:"BLPCE234",
    Dob:"10-07-2000",
    gender: "male",
    empImage:"../../assets/image/sample.jpg",
    
  },
  {
    employeeName:"Vibushana",
    employeeId:"BLPCE235",
    Dob:"23-05-2001",
    gender: "male",
    empImage:"../../assets/image/sample.jpg",
    
  },
  {
    employeeName:"Vishnuvarthan",
    employeeId:"BLPCE236",
    Dob:"25-10-2000",
    gender: "male",
    empImage:"../../assets/image/sample.jpg",
    
  },
  {
    employeeName:"Shiva Prabu",
    employeeId:"BLPCE238",
    Dob:"04-07-1996",
    gender: "male",
    empImage:"../../assets/image/sample.jpg",
    
  },
  {
    employeeName:"Prasanth",
    employeeId:"BLPCE239",
    Dob:"25-06-2000",
    gender: "male",
    empImage:"../../assets/image/sample.jpg",
    
  },
  {
    employeeName:" Dhivagar",
    employeeId:"BLPCE240",
    Dob:"27-05-1992",
    gender: "male",
    empImage:"../../assets/image/sample.jpg",
  },
  {
    employeeName:" Sam jebaraj",
    employeeId:"BLPCE241",
    Dob:"06-04-1990",
    gender: "male",
    empImage:"../../assets/image/sample.jpg",
  },
  
]



  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }


  open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

  getDismissReason(reason: any): any {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}
imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
}
imageLoaded(image: LoadedImage) {
    // show cropper
    console.log(image)
}
cropperReady() {
    // cropper ready
}
loadImageFailed() {
    // show message
}



}
