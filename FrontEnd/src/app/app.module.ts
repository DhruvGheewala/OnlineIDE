// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Component
import { AppComponent } from './app.component';
import { EditorComponent } from './components/editor/editor.component';
import { ThemesComponent } from './components/themes/themes.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { SocialComponent } from './components/login-register/social/social.component';

// Services
import { UserService } from './Shared/user.service';
import { AdminService } from './Shared/admin.service';
import { NavComponent } from './components/nav/nav.component';
import { ArchiveComponent } from './components/archive/archive.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ThemesComponent,
    LoginRegisterComponent,
    SocialComponent,
    NavComponent,
    ArchiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [
    UserService,
    AdminService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }