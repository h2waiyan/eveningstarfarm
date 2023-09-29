import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundcompComponent } from './notfoundcomp/notfoundcomp.component';

const routes: Routes = [
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
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: "**", // Wildcard
    component: NotfoundcompComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
