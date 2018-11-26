import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessoryTableComponent } from './components/accessory-table/accessory-table.component';
import { AccessoryToBoatTableComponent } from './components/accessory-to-boat-table/accessory-to-boat-table.component';

const routes: Routes = [
  {path: '', component: AccessoryTableComponent},
  {path: 'accessories', component: AccessoryTableComponent},
  {path: 'accessoriesToBoat', component: AccessoryToBoatTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
