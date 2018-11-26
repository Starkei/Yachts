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

@NgModule({
  declarations: [
    AppComponent,
    AccessoryTableComponent,
    AccessoryDialogComponent,
    NavigationComponent,
    AccessoryToBoatTableComponent
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
    MatInputModule
  ],
  providers: [AccessoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
