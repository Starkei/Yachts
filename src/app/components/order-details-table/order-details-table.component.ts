import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-order-details-table',
  templateUrl: './order-details-table.component.html',
  styleUrls: ['./order-details-table.component.sass'],
})
export class OrderDetailsTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'num', 'order'];

  constructor(private service: OrderDetailsService) {
    this.service.getAll().subscribe(data => this.dataSource = new MatTableDataSource(data));
  }

  ngOnInit() {
    this.service.getAll().subscribe(data => this.dataSource = new MatTableDataSource(data));
  }

  selectSalesByName() {
    this.service.getByNum("Jaelynn Costa").subscribe(data => this.dataSource = new MatTableDataSource(data));
  }
}
