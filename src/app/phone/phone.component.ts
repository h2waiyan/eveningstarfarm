import { Component } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent {
  products = [
    {
      id: "iphone",
      name: "iPhone",
      price: "599",
    },
    {
      id: "samsung",
      name: "Samsung",
      price: "699",
    },
    {
      name: "Pixel",
      price: "599",
    },
  ]
}
