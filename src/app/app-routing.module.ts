import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { ChooseTypeComponent } from './choose-type/choose-type.component';
import { addlocationComponent } from './Addlocation/addlocation.component';
import { dellocationComponent } from './Dellocation/dellocation.component';
import { editlocationComponent } from './Editlocation/editlocation.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'map',
    component: MapComponent,
    canActivate: [AuthGuard],

  },
  {
    path: 'choose-type',
    component: ChooseTypeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-location',
    component: addlocationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'del-location',
    component: dellocationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-location',
    component: editlocationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
