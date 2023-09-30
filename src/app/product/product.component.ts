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

  data = this.hero.farmData;

  productId: number = 0;


  ngOnInit() {
    this.productId = this.activatedRouted.snapshot.params['id'];
    console.log(this.productId);
  }
}
