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

  farmername: string = "jennie";

  imageUrl = 'https://akns-images.eonline.com/eol_images/Entire_Site/202293/rs_1200x1200-221003113937-1200-Blackpinks_Jennie_Kim_2019-gj.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top';

  ngOnInit() {
    // this.heroService.showAlert();
    console.log(this.heroService.farmName);
  }

  showName(): void {
    alert(this.farmername);
  }

  goTo(name: number) {
    console.log("GO TO FUN >>>>>");
    // this.router.navigateByUrl(`product/${name}`); 
    this.router.navigate(['product', name]);
    // router > 'product'
  }

  onFocus() {
    console.log("focus on")
  }

  onBlur() {
    console.log("Blurrrrrrr")
  }
  addition(fN: number, sN: number) {
    return fN + sN
  }

  isActiveNow: boolean = false;

  logout() {
    this.isActiveNow = false;
    console.log(">>>>>>");
    console.log(this.isActiveNow);
    document.getElementsByTagName("body")[0].classList.remove('dark');  

  }

  login() {
    this.isActiveNow = true;
    console.log(">>>>>>");
    console.log(this.isActiveNow);

    document.getElementsByTagName("body")[0].classList.add('dark');  
  }
}
