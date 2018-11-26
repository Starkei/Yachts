import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoryDialogComponent } from './accessory-dialog.component';

describe('AccessoryDialogComponent', () => {
  let component: AccessoryDialogComponent;
  let fixture: ComponentFixture<AccessoryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
