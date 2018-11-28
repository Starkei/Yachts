import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccessoryTableComponent } from './components/accessory-table/accessory-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule } from '@angular/material';
import { AccessoryDialogComponent } from './components/accessory-dialog/accessory-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { AccessoryService } from './services/accessory.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AccessoryToBoatTableComponent } from './components/accessory-to-boat-table/accessory-to-boat-table.component';
import { PartnerTableComponent } from './components/partner-table/partner-table.component';
import { BoatTableComponent } from './components/boat-table/boat-table.component';
import { OrderDetailsTableComponent } from './components/order-details-table/order-details-table.component';
import { OrderTableComponent } from './components/order-table/order-table.component';
import { SalesPersonTableComponent } from './components/sales-person-table/sales-person-table.component';
import { CustomerTableComponent } from './components/customer-table/customer-table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccessoryTableComponent,
    AccessoryDialogComponent,
    NavigationComponent,
    AccessoryToBoatTableComponent,
    PartnerTableComponent,
    BoatTableComponent,
    OrderDetailsTableComponent,
    OrderTableComponent,
    SalesPersonTableComponent,
    CustomerTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    FormsModule
  ],
  providers: [AccessoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
