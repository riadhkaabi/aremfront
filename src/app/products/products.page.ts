import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  zapBatteries:any=[]
  fiammBatteries:any=[]


  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.getZapProducts();
    this.getFiammProducts();
  }

  getZapProducts(){
    this.productService.findAllZap().subscribe(data=>{
      this.zapBatteries = data;
      console.log("zapr : ",this.zapBatteries)
    })
  }
  getFiammProducts(){
    this.productService.findAllFiamm().subscribe(data=>{
      this.fiammBatteries = data;
      console.log("fiamm : ",this.fiammBatteries)
    })
  }
}
