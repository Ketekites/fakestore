import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Clothing } from '../models/Clothing';
import { ClothingsService } from '../services/clothings.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ClothingsService]
})

export class EditComponent implements OnInit {

  private _route : ActivatedRoute;
  public data : any;
  public count : number = 0;
  public next : number = 0;
  public previous : number = 0;
  public createClothing : Clothing;

  constructor(private _clothingsService : ClothingsService, _route : ActivatedRoute) { 
    this._route = _route;
    this.createClothing = new Clothing('',0,'','https://i.pravatar.cc','');
  }

  ngOnInit() : void {

    // llamo al método que solicitará el producto con el id que consta como parametro en la url
    this._route.params.subscribe((params : Params)=>{
      this.readSingleProduct(params["id"]);
    });
    
    this.read();

  }
  
  // solicito todos los productos para saber cuantos hay y después poder paginar
  read():void{

    this._clothingsService.readAllProducts().subscribe({
      next : data => {
        console.log("Read", data);
        this.count = data.length;
      },
      error : error => {
        console.log("Read error", error);
      }
    });

  }

  // solicito el producto por el id pasado como parametro en la url
  readSingleProduct(id : any) : void {

    this._clothingsService.readSingleProduct(id).subscribe({
      next : data => {
        console.log("Read", data);
        this.data = data;
        // instancio el producto para poder mostrar sus datos en los inputs/textarea
        this.createClothing = new Clothing (data.title,data.price,data.description,'https://i.pravatar.cc',data.category);
        this.next = data.id + 1;
        this.previous = data.id - 1;
      },
      error : error => {
        console.log("Read error", error);
      }
    });

  }

  // actualizamos el producto
  update(form: NgForm) : void {

    this._clothingsService.update(this.data.id,this.createClothing).subscribe({
      next : data => {
        console.log("Update", data);
        alert("The product with ID "+ '"' + data.id + '"' + " has been updated succesfully! The new price is " + data.price);
      },
      error : error => {
        console.log("Update error", error);
      }
    });
    //vaciado de campos
    form.resetForm();

  }

}