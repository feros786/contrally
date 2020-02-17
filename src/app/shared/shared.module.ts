import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OuterNavbarComponent } from './components/outer-navbar/outer-navbar.component';
import { RouterModule } from '@angular/router';
import { InnerNavbarComponent } from './components/inner-navbar/inner-navbar.component';
import { NewOrganizationComponent } from './components/new-organization/new-organization.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { ProjectsTableComponent } from './components/projects-table/projects-table.component';



@NgModule({
  declarations: [OuterNavbarComponent, InnerNavbarComponent, NewOrganizationComponent, NewProjectComponent, ProjectsTableComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HttpClientModule,
    OuterNavbarComponent,
    InnerNavbarComponent,
    NewOrganizationComponent,
    NewProjectComponent,
    ProjectsTableComponent
  ]
})
export class SharedModule { }
