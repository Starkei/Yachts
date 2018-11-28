import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-partner-table',
  templateUrl: './partner-table.component.html',
  styleUrls: ['./partner-table.component.sass'],
})
export class PartnerTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(private service: PartnerService) {
    this.service.getAll().subscribe(data => this.dataSource = new MatTableDataSource(data));
  }

  ngOnInit() {
    this.service.getAll().subscribe(data => this.dataSource = new MatTableDataSource(data));
  }

  selectByMask(){
    this.service.getByNum("Kirill").subscribe(data => this.dataSource = new MatTableDataSource(data));
  }
}
