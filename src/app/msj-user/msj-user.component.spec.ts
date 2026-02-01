import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjUserComponent } from './msj-user.component';

describe('MsjUserComponent', () => {
  let component: MsjUserComponent;
  let fixture: ComponentFixture<MsjUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsjUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsjUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
