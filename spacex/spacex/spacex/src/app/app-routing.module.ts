import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapsuleDetailComponent } from './components/capsule-list/capsule-detail/capsule-detail.component';
import { CapsuleListComponent } from './components/capsule-list/capsule-list.component';
import { LaunchDetailComponent } from './components/launch-list/launch-detail/launch-detail.component';
import { LaunchListComponent } from './components/launch-list/launch-list.component';

const routes: Routes = [

  {path: 'capsule-list', component: CapsuleListComponent},
  {path: 'launch-list', component: LaunchListComponent},
  {path: 'capsule-detail/:id', component: CapsuleDetailComponent},
  {path: 'launch-detail/:id', component: LaunchDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
