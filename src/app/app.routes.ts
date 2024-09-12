import { Routes } from '@angular/router';
import { ListProjetComponent } from './pages/projets/list-projet/list-projet.component';
import { CreateProjetComponent } from './pages/projets/create-projet/create-projet.component';
import { EditProjetComponent } from './pages/projets/edit-projet/edit-projet.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [

    // { path: 'login', component: LoginComponent, pathMatch: 'full' },
    // { path: '', component: LoginComponent },
    // { path: 'projets', component: ListProjetComponent },
    // { path: 'projets/create', component: CreateProjetComponent },
    // { path: 'projets/edit/:idProjet', component: EditProjetComponent },

    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'admin/', component: ListProjetComponent, children : [
        { path: '', component: ListProjetComponent },
        { path: 'projets', component: ListProjetComponent },
        { path: 'projets/create', component: CreateProjetComponent },
        { path: 'projets/edit/:idProjet', component: EditProjetComponent },
    ] },
];
