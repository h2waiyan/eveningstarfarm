import { Component } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  name = this.heroService.farmName;

  data = this.heroService.farmData;

  ngOnInit() {
    // this.heroService.showAlert();
    console.log(this.heroService.farmName);
  }

  goTo(name: number) {
    console.log("GO TO FUN >>>>>");
    // this.router.navigateByUrl(`product/${name}`); 
    this.router.navigate(['product', name]);
    // router > 'product'
  }

  addition(fN: number, sN: number) {
    return fN + sN
  }
}
