import { Routes } from '@angular/router';
import { ListProjetComponent } from './pages/projets/list-projet/list-projet.component';
import { CreateProjetComponent } from './pages/projets/create-projet/create-projet.component';
import { EditProjetComponent } from './pages/projets/edit-projet/edit-projet.component';

export const routes: Routes = [

    { path: '', component: ListProjetComponent },
    { path: 'projets/create', component: CreateProjetComponent },
    { path: 'projets/edit/:idProjet', component: EditProjetComponent }
];
