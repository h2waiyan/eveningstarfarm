import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private hero: HeroService,
    private activatedRouted: ActivatedRoute
  ) { }

  name = this.hero.farmName;

  data = this.hero.farmData; // [ id 101, id 102, id 103]

  productId: number = 0; // 101, 102
  indexNo: number = 0 // 0, 1

  ngOnInit() {
    this.productId = this.activatedRouted.snapshot.params['id']; // 101

    this.indexNo = this.data.findIndex((item) => {
      return item.id == this.productId;
    });
    // find, filter, map, reduce, forEach
    console.log(this.productId);
  }
}
