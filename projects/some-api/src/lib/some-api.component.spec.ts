import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeApiComponent } from './some-api.component';

describe('SomeApiComponent', () => {
  let component: SomeApiComponent;
  let fixture: ComponentFixture<SomeApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
