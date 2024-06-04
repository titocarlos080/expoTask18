import { Routes } from '@angular/router';
import { TaskPageComponent } from './task/pages/task-page/task-page.component';
import { ProjectPageComponent } from './task/pages/project-page/project-page.component';
import { HomePageComponent } from './task/pages/home-page/home-page.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [


         {
          path: 'tasks',
          component: TaskPageComponent
        },
        {
          path: 'projects',
          component: ProjectPageComponent
        },
        {
          path: '',
          component: DashboardComponent
           
        }
    
      

];
