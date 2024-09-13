import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TacheService } from 'src/app/shared/services/tache.service';

@Component({
  selector: 'app-create-tache',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './create-tache.component.html',
  styleUrls: ['./create-tache.component.scss']
})
export class CreateTacheComponent implements OnInit {

  createTacheForm!: FormGroup;

  constructor(
    private tacheService: TacheService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createTacheForm = this.formBuilder.group({
      description: ['', Validators.required],
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      status: ['', Validators.required],
      idProjet: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.createTacheForm.valid) {
      const tacheToAdd = this.createTacheForm.value;
      const idProjet = tacheToAdd.idProjet;

      this.tacheService.addTache(tacheToAdd, idProjet).subscribe(
        response => {
          console.log('Task created successfully', response);
          this.router.navigate(['/tasks']); // Adjust this route as needed
        },
        error => {
          console.error('Error creating task', error);
        }
      );
    }
  }
}
