import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjetService } from 'src/app/shared/services/projet.service';

@Component({
  selector: 'app-create-projet',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './create-projet.component.html',
  styleUrls: ['./create-projet.component.scss']
})
export class CreateProjetComponent implements OnInit{

  createProjetForm!: FormGroup;

  constructor(
    private projetService: ProjetService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createProjetForm = this.formBuilder.group({
      nom_projet: ['', Validators.required],
      description: ['', Validators.required],
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      budget: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('Payload:', JSON.stringify(this.createProjetForm.value));
    if (this.createProjetForm.valid) {
      const projetToAdd = this.createProjetForm.value;

      this.projetService.addProjet(projetToAdd).subscribe(
        response => {
          console.log('Project created successfully', response);
          this.router.navigate(['']);
        },
        error => {
          console.error('Error creating project', error);
        }
      );
    }
  }

}
