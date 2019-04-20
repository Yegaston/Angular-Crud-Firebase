import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Reclamo } from '../models/reclamo'

@Injectable({
  providedIn: 'root'
})

export class ReclamosService {

  reclamoList: AngularFireList<any>;

  selectedReclamo: Reclamo = new Reclamo();

  constructor(private angularFireDatabase: AngularFireDatabase) {

  }

  getReclamos(){
    console.log("Fetching all issues");
    return this.reclamoList = this.angularFireDatabase.list('reclamos');
  }

  getReclamo(id: any){
    console.log("Fetching in specified issue");
    
  }

  addReclamo(req: Reclamo){
    this.reclamoList.push({
      title: req.title,
      text: req.text,
      location: req.location
    })
  }

  updateReclamo(req: Reclamo){
    this.reclamoList.update(req.$key, {
      title: req.title,
      text: req.text,
      location: req.location
    })
  }

  removeReclamo(id:any){
    this.reclamoList.remove(id);
  }




}
