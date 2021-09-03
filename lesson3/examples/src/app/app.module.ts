import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { ButtonHeadingComponent } from './button-heading/button-heading.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    SkillSetComponent,
    ButtonHeadingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
