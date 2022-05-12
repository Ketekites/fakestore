import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Clothing } from '../models/Clothing';
import { ClothingsService } from '../services/clothings.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ClothingsService]
})

export class CreateComponent implements OnInit {

  public createClothing : Clothing;

  constructor(private _clothingsService : ClothingsService) {
    this.createClothing = new Clothing('',0,'','https://i.pravatar.cc','');
  }

  ngOnInit() : void {}

  create(form: NgForm) : void {

    this._clothingsService.create(this.createClothing).subscribe({
      next : data => {
        console.log("Create", data);
        alert("The product " + '"' + data.title + '"' + " has been added succesfully!");
      },
      error : error => {
        console.log("Create error", error);
      }
    });
    //vaciado de campos
    form.resetForm();

  }

}