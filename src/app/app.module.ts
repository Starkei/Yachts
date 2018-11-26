import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccessoryTableComponent } from './components/accessory-table/accessory-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { AccessoryDialogComponent } from './components/accessory-dialog/accessory-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { AccessoryService } from './services/accessory.service';

@NgModule({
  declarations: [
    AppComponent,
    AccessoryTableComponent,
    AccessoryDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [AccessoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
