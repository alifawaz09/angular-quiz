import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserList } from './components/user-list/user-list';
import { UserDetail} from './components/user-detail/user-detail';

const routes: Routes = [
  { path: '', component: UserList },
  { path: 'user/:id', component: UserDetail },
  { path: '**', redirectTo: '' } // fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }