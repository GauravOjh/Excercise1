import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondcomponentComponent } from './secondcomponent.component';

describe('SecondcomponentComponent', () => {
  let component: SecondcomponentComponent;
  let fixture: ComponentFixture<SecondcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
