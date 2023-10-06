import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundcompComponent } from './notfoundcomp/notfoundcomp.component';
import { PhoneComponent } from './phone/phone.component';

const routes: Routes = [
  {
    path: '',
    // component: OverviewComponent
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  {
    path: 'overview',
    component: OverviewComponent,
    children: [
      {
        path: "contact",
        component: ContactComponent
      },
      {
        path: 'footer',
        component: FooterComponent
      }
    ]
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'phone',
    component: PhoneComponent
  },
  {
    path: "**", // Wildcard
    redirectTo: 'overview'
    // component: NotfoundcompComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
