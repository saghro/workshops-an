import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomListeComponent } from './nom-liste.component';

describe('NomListeComponent', () => {
  let component: NomListeComponent;
  let fixture: ComponentFixture<NomListeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NomListeComponent]
    });
    fixture = TestBed.createComponent(NomListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
