import { Component, OnInit } from '@angular/core';
import { ClothingsService } from '../services/clothings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ClothingsService]
})

export class HomeComponent implements OnInit {

  public dataw : any;
  public datam : any;
  public loged : boolean = false;

  constructor(private _clothingsService : ClothingsService) {}

  ngOnInit(): void {

    this.read();

  }

  // solicito los productos por categoria
  read() : void{

    this._clothingsService.read("women's%20clothing").subscribe({
      next : dataw => {
        console.log("Read women", dataw);
        this.dataw = dataw;
      },
      error : error => {
        console.log("Read error", error);
      }
    });

    this._clothingsService.read("men's%20clothing").subscribe({
      next : datam => {
        console.log("Read men", datam);
        this.datam = datam;
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