import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NkComponent } from './nk.component';

describe('NkComponent', () => {
  let component: NkComponent;
  let fixture: ComponentFixture<NkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
