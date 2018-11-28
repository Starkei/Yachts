import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SalesPersonService } from 'src/app/services/sales-person.service';

@Component({
  selector: 'app-sales-person-table',
  templateUrl: './sales-person-table.component.html',
  styleUrls: ['./sales-person-table.component.sass'],
})
export class SalesPersonTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'fullName', 'phoneNumber'];

  constructor(private service: SalesPersonService) {
    this.service.getAll().subscribe(data => this.dataSource = new MatTableDataSource(data));
  }

  ngOnInit() {
    this.service.getAll().subscribe(data => this.dataSource = new MatTableDataSource(data));
  }
}
