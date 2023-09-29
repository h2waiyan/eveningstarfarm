import { Component } from '@angular/core';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  constructor(private heroService: HeroService) { }

  name = this.heroService.farmName;

  ngOnInit() {
    this.heroService.showAlert();
    console.log(this.heroService.farmName);
  }
}
