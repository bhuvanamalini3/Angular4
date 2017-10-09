import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterexampleComponent } from './routerexample.component';

describe('RouterexampleComponent', () => {
  let component: RouterexampleComponent;
  let fixture: ComponentFixture<RouterexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
