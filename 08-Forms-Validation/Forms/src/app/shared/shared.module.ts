import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { MarkdownRendererComponent } from './markdown-renderer/markdown-renderer.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { LoginSplashComponent } from './login-splash/login-splash.component';

const mods = [
  NavbarComponent,
  SidePanelComponent,
  FooterComponent,
  MarkdownRendererComponent,
  LoginSplashComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
  ],
  declarations: mods,
  exports: mods,
})
export class SharedModule {}
