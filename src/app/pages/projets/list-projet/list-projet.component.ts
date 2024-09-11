import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projet } from 'src/app/interfaces/projet';
import { ProjetService } from 'src/app/shared/services/projet.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-projet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.scss']
})
export class ListProjetComponent implements OnInit {

  public projets: Projet[] = [];

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
}
