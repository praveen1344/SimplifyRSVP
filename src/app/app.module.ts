import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


// Material UI Components

import { MatInputModule } from '@angular/material';

// Customer Components

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { EventCardComponent } from './common/eventcard/eventcard.component';
import { SlideMenuComponent } from './common/slide-menu/slide-menu.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { BuilderComponent } from './builder/builder/builder.component';
import { DragContainerComponent } from './builder/drag-container/drag-container.component';
import { DragObjectDirective } from './directives/drag-object.directive';
import { FormObjectListComponent } from './builder/form-object-list/form-object-list.component';
import { formListObjs } from './mock/mock-formList';
import { InputComponent } from './builder/builderform-objects/input/input.component';
import { FormRowComponent } from './builder/form-row/form-row.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'builder',      
    component: BuilderComponent 
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Dashboard' }
  },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
  // ,{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventCardComponent,
    SlideMenuComponent,
    DashboardComponent,
    BuilderComponent,
    DragContainerComponent,
    DragObjectDirective,
    FormObjectListComponent,
    InputComponent,
    FormRowComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ),
     BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
