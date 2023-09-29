import { Component } from '@angular/core';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private hero: HeroService) { }

  name = this.hero.farmName;

  data = this.hero.farmData;
}
