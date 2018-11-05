import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersignComponent } from './clients/usersign.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
{path: '', redirectTo: '/signin', pathMatch: 'full'},
{path: 'signin', component: SignInComponent},
{path : 'signup' , component: SignUpComponent},
{path: 'forgetpass', component: ForgetpassComponent},
{path: 'sidebar', component: SidebarComponent,
children: [
  {path: 'home', component: HomeComponent},
  {path: 'client', component: UsersignComponent },
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent}
]

},

{path: 'client', component: UsersignComponent},
{path: 'chart', component: HomeComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
