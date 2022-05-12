import { Component, OnInit } from '@angular/core';
import { ClothingsService } from '../services/clothings.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css'],
  providers: [ClothingsService]
})

export class WomenComponent implements OnInit {

  public data : any;
  public loged : boolean = false;

  constructor(private _clothingsService : ClothingsService) { }

  ngOnInit() : void {

    this.read();

  };

  // solicito los productos por categoria de mujer
  read() : void{

    this._clothingsService.read("women's%20clothing").subscribe({
      next : data => {
        console.log("Read", data);
        this.data = data;
      },
      error : error => {
        console.log("Read error", error);
      }
    });

  }

  // solicito el borrado de un producto
  delete(id : number) : void {

    this._clothingsService.delete(id).subscribe({
      next : data => {
        console.log("Delete", data);
        alert("The product " + '"' + data.title + '"' + " has been deleted");        
      },
      error : error => {
        console.log("Delete error", error);
      }
    });

  }

  // muestro las opciones de edit y delete
  edit() : void {
    this.loged = !this.loged;
  }

}