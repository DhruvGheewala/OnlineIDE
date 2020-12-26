import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchiveComponent } from './components/archive/archive.component';
import { EditorComponent } from './components/editor/editor.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { ThemesComponent } from './components/themes/themes.component';

const routes: Routes = [
  {path: '', component: EditorComponent},
  {path: 'index', component: EditorComponent},
  {path: 'editor', component: EditorComponent},

  {path: 'forms', component: LoginRegisterComponent},
  {path: 'forms/:formId', component: LoginRegisterComponent}, 

  {path: 'themes', component: ThemesComponent}, 

  {path: 'archive', component: ArchiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
