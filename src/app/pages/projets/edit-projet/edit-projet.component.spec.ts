import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjetComponent } from './edit-projet.component';

describe('EditProjetComponent', () => {
  let component: EditProjetComponent;
  let fixture: ComponentFixture<EditProjetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EditProjetComponent]
    });
    fixture = TestBed.createComponent(EditProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
