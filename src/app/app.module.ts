import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LayoutModule } from './layout/layout.module';
import {MatIconModule} from '@angular/material/icon';
import { UserComponent } from './user/user.component';
import { ListUsersComponent } from './user/list-users/list-users.component';
import { ViewUsersComponent } from './user/view-users/view-users.component';
import { AddUsersComponent } from './user/add-users/add-users.component';
import { EditUsersComponent } from './user/edit-users/edit-users.component';
import { DeleteUsersComponent } from './user/delete-users/delete-users.component';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule, ReactiveFormsModule,FormControlName,FormGroup } from '@angular/forms';
import { ChartModule,HIGHCHARTS_MODULES} from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import stock from "highcharts/modules/stock.src";
import more from "highcharts/highcharts-more.src";
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ProductCardComponent } from './product-card/product-card.component';
import { LoadersComponent } from './loaders/loaders.component';
import { TestingAreaComponent } from './testing-area/testing-area.component';
export function highchartsModules() {
  return [stock, more];
 }


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ListUsersComponent,
    ViewUsersComponent,
    AddUsersComponent,
    EditUsersComponent,
    DeleteUsersComponent,
    EmployeeCardComponent,
    ProductCardComponent,
    LoadersComponent,
    TestingAreaComponent,
   
 
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    MatIconModule,
    UserModule,
    HttpClientModule,
    MatListModule,
    MatButtonModule ,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule ,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    HighchartsChartModule,
    ImageCropperModule, 
  ],
  exports:[
  
  ],
 
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
