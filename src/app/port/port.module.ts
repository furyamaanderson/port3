import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import {  MatButtonModule  } from '@angular/material/button';
import { SobreComponent } from './sobre/sobre.component';
import {MatMenuModule} from '@angular/material/menu';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducacaoComponent } from './educacao/educacao.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SobreComponent,
    SkillsComponent,
    ProjectsComponent,
    EducacaoComponent,
    FormularioComponent,
    FooterComponent,
    
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
  ],
  exports: [
    NavbarComponent,
    SobreComponent,
    MatMenuModule,
    SkillsComponent,
    ProjectsComponent,
    EducacaoComponent,
    FormularioComponent,
    FooterComponent,
  ],
})
export class PortModule { }
