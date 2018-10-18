import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const routes: Routes = [
{path: '', redirectTo: '/signin', pathMatch: 'full'},
{path: 'signin', component: SignInComponent},
{path : 'signup' , component: SignUpComponent},
{path: 'forgetpass', component: ForgetpassComponent},
{path: 'sidebar', component: SidebarComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
