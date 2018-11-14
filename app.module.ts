import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

import { AppRoutingModule } from './routs';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { CusdirectvDirective } from './cusdirectv.directive';
import { UsersignComponent } from './clients/usersign.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ChartsModule } from 'ng2-charts';
import { AgmCoreModule } from '@agm/core';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GallaryComponent } from './gallary/gallary.component';
import {MatIconModule} from '@angular/material/icon';
import { LeftnavComponent } from './leftnav/leftnav.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CarouselModule } from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    SidebarComponent,
    ForgetpassComponent,
    CusdirectvDirective,
    UsersignComponent,
    ContactComponent,
    AboutComponent,
    GallaryComponent,
    LeftnavComponent
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
    }),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
