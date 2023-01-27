import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private db:AngularFirestore) { }

  getData(){
    return this.db.collection('demo').get()
  }
  deleteData(){
    return this.db.collection('demo').doc('3HwAzp4huxwafcSTYRK1').delete()
  }
  addData(){
    
  } 
}
