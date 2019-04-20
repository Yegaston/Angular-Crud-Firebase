import { Component, OnInit } from '@angular/core';

import { ReclamosService } from '../services/reclamos.service';

import { Reclamo } from '../models/reclamo'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reclamos',
  templateUrl: './reclamos.component.html',
  styleUrls: ['./reclamos.component.css']
})
export class ReclamosComponent implements OnInit {

  reclamosList: Reclamo[];
  constructor(private reclamoService: ReclamosService) { }

  ngOnInit() {
    this.fetchingReclamos();
  }

  fetchingReclamos(){
    console.log("Fetching Data");
    var content = this.reclamoService.getReclamos();
    content.snapshotChanges().subscribe( (item) => {
      this.reclamosList = [];
      item.forEach( (element) => {
        var registro = element.payload.toJSON();
        registro["$key"] = element.key;
        this.reclamosList.push(registro as Reclamo);
      })
    })
  }

  edit(item: Reclamo){
    console.log("Editing");
    this.reclamoService.selectedReclamo = Object.assign({}, item);
  }
  
  delete(item){
    console.log("Removing");
    if(confirm("You sure??")){
      this.reclamoService.removeReclamo(item);
      console.log("Delete")
    }else {
      console.log("nope")
    }
  }

  add(){
    console.log("Adding");
    
  }

  onSubmit(reclamoForm: NgForm){
    console.log(reclamoForm.value)

    if(this.reclamoService.selectedReclamo.$key == null){
      this.reclamoService.addReclamo(reclamoForm.value);

    } else {
      this.reclamoService.updateReclamo(reclamoForm.value);
    }


  }

  resetForm(reclamoForm: NgForm){
    console.log("Reseting");
    if (reclamoForm != null){
      reclamoForm.reset();
      this.reclamoService.selectedReclamo = {
        $key: null,
        title: '',
        text: '',
        location: '',
        categoria: '',
      }
    }
  }

}
