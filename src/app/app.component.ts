import { Component } from '@angular/core';
import { UtilServiceService } from './services/util-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showLoader:boolean = false;

  title = 'register-app';

constructor(private utilservice:UtilServiceService){
      this.utilservice.getLoaderValue().subscribe((value)=>{
      this.showLoader = value;

      })


}
}
