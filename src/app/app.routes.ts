import { Routes } from '@angular/router';
import { ListProjetComponent } from './pages/projets/list-projet/list-projet.component';
import { CreateProjetComponent } from './pages/projets/create-projet/create-projet.component';
import { EditProjetComponent } from './pages/projets/edit-projet/edit-projet.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './shared/compenants/home/home.component';
import { ListTacheComponent } from './pages/taches/list-tache/list-tache.component';
import { CreateTacheComponent } from './pages/taches/create-tache/create-tache.component';
import { EditTacheComponent } from './pages/taches/edit-tache/edit-tache.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'admin',
    children: [
      { path: '', redirectTo: 'projets', pathMatch: 'full' },
      { path: 'projets', component: ListProjetComponent },
      { path: 'projets/create', component: CreateProjetComponent },
      { path: 'projets/edit/:idProjet', component: EditProjetComponent },
      { path: 'projets/:id/taches', component: ListTacheComponent }, // Route for project tasks
      { path: 'taches', component: ListTacheComponent },
      { path: 'taches/create', component: CreateTacheComponent },
      { path: 'taches/edit/:idTache', component: EditTacheComponent },
    ],
  },
];
