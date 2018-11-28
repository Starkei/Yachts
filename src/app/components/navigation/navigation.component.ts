import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  links = [
    {path: '/accessories', title: 'Accessories'},
    {path: '/accessoriesToBoat', title: 'Accessories to boat'},
    {path: '/partner', title: 'Partner'},
    {path: '/orderDetails', title: 'Order details'},
    {path: '/boat', title: 'Boat'},
    {path: '/order', title: 'Order'},
    {path: '/salesPerson', title: 'Sales person'},
    {path: '/customer', title: 'Customer'}
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}

}
