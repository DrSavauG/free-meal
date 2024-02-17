import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigBodyComponent } from './big-body.component';

describe('BigBodyComponent', () => {
  let component: BigBodyComponent;
  let fixture: ComponentFixture<BigBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigBodyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BigBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
