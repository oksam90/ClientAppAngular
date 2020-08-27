import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustumerComponent } from './list-custumer.component';

describe('ListCustumerComponent', () => {
  let component: ListCustumerComponent;
  let fixture: ComponentFixture<ListCustumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCustumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCustumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
