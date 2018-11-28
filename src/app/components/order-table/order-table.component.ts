import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.sass'],
})
export class OrderTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'num', 'customer', 'salesPerson'];

  constructor(private service: OrderService) {
    this.service.getAll().subscribe(data => this.dataSource = new MatTableDataSource(data));
  }

  ngOnInit() {
    this.service.getAll().subscribe(data => this.dataSource = new MatTableDataSource(data));
  }

  selectSalesByName(){
    this.service.getByNum("Jaelynn Costa").subscribe(data => this.dataSource = new MatTableDataSource(data));
  }
}
