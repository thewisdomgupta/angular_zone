import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCodeComponent } from './show-code.component';

describe('ShowCodeComponent', () => {
  let component: ShowCodeComponent;
  let fixture: ComponentFixture<ShowCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
