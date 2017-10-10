import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDialogRegisterComponent } from './my-dialog-register.component';

describe('MyDialogRegisterComponent', () => {
  let component: MyDialogRegisterComponent;
  let fixture: ComponentFixture<MyDialogRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDialogRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDialogRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
