import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnComponentComponent } from './own-component.component';

describe('OwnComponentComponent', () => {
  let component: OwnComponentComponent;
  let fixture: ComponentFixture<OwnComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
