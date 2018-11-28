import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessoryTableComponent } from './components/accessory-table/accessory-table.component';
import { AccessoryToBoatTableComponent } from './components/accessory-to-boat-table/accessory-to-boat-table.component';
import { PartnerTableComponent } from './components/partner-table/partner-table.component';
import { OrderDetailsTableComponent } from './components/order-details-table/order-details-table.component';
import { BoatTableComponent } from './components/boat-table/boat-table.component';
import { OrderTableComponent } from './components/order-table/order-table.component';
import { SalesPersonTableComponent } from './components/sales-person-table/sales-person-table.component';
import { CustomerTableComponent } from './components/customer-table/customer-table.component';

const routes: Routes = [
  {path: '', component: AccessoryTableComponent},
  {path: 'accessories', component: AccessoryTableComponent},
  {path: 'accessoriesToBoat', component: AccessoryToBoatTableComponent},
  {path: 'partner', component: PartnerTableComponent},
  {path: 'orderDetails', component: OrderDetailsTableComponent},
  {path: 'boat', component: BoatTableComponent},
  {path: 'order', component: OrderTableComponent},
  {path: 'salesPerson', component: SalesPersonTableComponent},
  {path: 'customer', component: CustomerTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
