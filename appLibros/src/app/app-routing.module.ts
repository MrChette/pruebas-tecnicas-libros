import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './books/pages/main-page/main-page.component';

const routes: Routes = [
  {
    path:'books',
    component: MainPageComponent
  },
  {
    path:'**',
    redirectTo: 'books'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
