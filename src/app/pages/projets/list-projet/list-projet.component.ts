import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projet } from 'src/app/interfaces/projet';
import { ProjetService } from 'src/app/shared/services/projet.service';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-projet',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.scss']
})
export class ListProjetComponent implements OnInit {

  public projets: Projet[] = [];
  projetToDelete : Projet | null = null;
  showModal = false;

  constructor(private projetService : ProjetService){}

  ngOnInit() {
    this.getProjets();
  }
  public getProjets():void{
    this.projetService.getProjets().subscribe(
      (response : Projet[]) =>{
        console.log(response);
        this.projets= response;
      },
      (error : HttpErrorResponse) =>{
        console.log(error.message);
      }
    );
  }

  openDeleteModal(projet : Projet) : void{
    this.projetToDelete = projet;
    this.showModal = true;
  }

  confirmDelete(): void {
    if (this.projetToDelete) {
      this.deleteProjet(this.projetToDelete.idProjet);
    }
  }

  cancelDelete() {
    this.showModal = false;
    this.projetToDelete = null;
  }

  deleteProjet(id: number): void {
    this.projetService.deleteProjet(id).subscribe(() => {
      this.getProjets();
      this.cancelDelete();
    });
  }
}
