import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCorrectionComponent } from './text-correction.component';

describe('TextCorrectionComponent', () => {
  let component: TextCorrectionComponent;
  let fixture: ComponentFixture<TextCorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextCorrectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
