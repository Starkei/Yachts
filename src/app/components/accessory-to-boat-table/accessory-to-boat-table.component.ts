import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AccessoryToBoatService } from 'src/app/services/accessory-to-boat.service';

@Component({
  selector: 'app-accessory-to-boat-table',
  templateUrl: './accessory-to-boat-table.component.html',
  styleUrls: ['./accessory-to-boat-table.component.sass'],
})
export class AccessoryToBoatTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'num', 'name'];

  constructor(private accessoryToBoatService: AccessoryToBoatService) {
    this.accessoryToBoatService.getAll().subscribe(data => this.dataSource = new MatTableDataSource(data));
  }

  ngOnInit() {
    this.accessoryToBoatService.getAll().subscribe(data => this.dataSource = new MatTableDataSource(data));
  }
}
