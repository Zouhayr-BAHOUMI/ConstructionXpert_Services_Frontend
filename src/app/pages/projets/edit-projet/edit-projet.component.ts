import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Projet } from 'src/app/interfaces/projet';
import { ProjetService } from 'src/app/shared/services/projet.service';

@Component({
  selector: 'app-edit-projet',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './edit-projet.component.html',
  styleUrls: ['./edit-projet.component.scss']
})
export class EditProjetComponent implements OnInit{

  editProjetForm: FormGroup;
  idProjet!: number;
  projet: Projet = {} as Projet;

  constructor(
    private projetService: ProjetService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editProjetForm = this.formBuilder.group({
      nom_projet: ['', Validators.required],
      description: ['', Validators.required],
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      budget: ['', Validators.required]
    });
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idProjet = +params['idProjet'];
      this.projetService.getProjetById(this.idProjet).subscribe(
        response => {
          this.projet = response;
          this.editProjetForm.patchValue({
            nom_projet: response.nom_projet,
            description: response.description,
            date_debut: response.date_debut,
            date_fin: response.date_fin,
            budget: response.budget
          });
        },
        error => console.error(error)
      );
    });
  }


  onSubmit() {
    if (this.editProjetForm.valid) {
      this.projet = this.editProjetForm.value;
      this.projetService.updateProjet(this.idProjet, this.projet).subscribe(
        response => {
          console.log('Projet updated successfully', response);
          this.router.navigate(['']);
        },
        error => console.error(error)
      );
    }
  }

}
