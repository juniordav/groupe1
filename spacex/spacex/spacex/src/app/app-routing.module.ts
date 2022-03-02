import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapsuleListComponent } from './components/capsule-list/capsule-list.component';

const routes: Routes = [
  { path: 'capsules', component: CapsuleListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
