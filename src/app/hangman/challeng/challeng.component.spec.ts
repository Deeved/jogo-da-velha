import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengComponent } from './challeng.component';

describe('ChallengComponent', () => {
  let component: ChallengComponent;
  let fixture: ComponentFixture<ChallengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChallengComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChallengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
