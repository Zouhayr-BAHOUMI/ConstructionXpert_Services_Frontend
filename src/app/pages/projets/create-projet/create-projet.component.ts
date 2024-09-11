import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-projet',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './create-projet.component.html',
  styleUrls: ['./create-projet.component.scss']
})
export class CreateProjetComponent {

  createProjetForm!: FormGroup;

}
