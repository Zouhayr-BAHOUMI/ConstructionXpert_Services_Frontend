import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRessourcesComponent } from './create-ressources.component';

describe('CreateRessourcesComponent', () => {
  let component: CreateRessourcesComponent;
  let fixture: ComponentFixture<CreateRessourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreateRessourcesComponent]
    });
    fixture = TestBed.createComponent(CreateRessourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
