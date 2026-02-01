import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjBotComponent } from './msj-bot.component';

describe('MsjBotComponent', () => {
  let component: MsjBotComponent;
  let fixture: ComponentFixture<MsjBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsjBotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsjBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
