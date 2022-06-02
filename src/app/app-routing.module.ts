import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { QuotationsComponent } from './quotations/quotations.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: HomePageComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'quotations', component: QuotationsComponent },
  { path: 'footer', component: FooterComponent},
  { path: '**', redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
