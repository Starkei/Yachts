import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AccessoryService } from 'src/app/services/accessory.service';

@Component({
  selector: 'app-accessory-table',
  templateUrl: './accessory-table.component.html',
  styleUrls: ['./accessory-table.component.sass'],
})
export class AccessoryTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;

  inputPrice: number = 100;

  displayedColumns = ['id', 'name', 'orderDetail', 'price'];

  constructor(private accessoryService: AccessoryService) {
    this.accessoryService.getAll().subscribe(data => this.dataSource = new MatTableDataSource(data));
  }

  ngOnInit() {
    this.accessoryService.getAll().subscribe(data => this.dataSource = new MatTableDataSource(data));
  }

  getWhereMoreThan() {
    this.accessoryService.getByPrice(this.inputPrice).subscribe(data => this.dataSource = new MatTableDataSource(data));
  }

  getTotalCost() {
    return this.dataSource.data.map(item => item.price).reduce((acc, value) => acc + value, 0);
  }
}
