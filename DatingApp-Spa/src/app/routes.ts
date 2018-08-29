import { AuthGuard } from './_guards/auth.guard';
import {Routes} from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';

export const appRoutes: Routes = [
   { path: '', component: HomeComponent},
   {    path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'messages', component: MessagesComponent},
            { path: 'members', component: MemberListComponent},
            { path: 'lists', component: ListsComponent},
        ] },
  
   { path: '**', redirectTo: 'home', pathMatch: 'full'},
];

