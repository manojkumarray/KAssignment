import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpmviewComponent } from './tpmview.component';

describe('TpmviewComponent', () => {
  let component: TpmviewComponent;
  let fixture: ComponentFixture<TpmviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpmviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpmviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
