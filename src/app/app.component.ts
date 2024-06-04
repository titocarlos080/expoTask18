import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './task/components/navigation/navigation.component';
import { TaskPageComponent } from './task/pages/task-page/task-page.component';
  
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,NavigationComponent,TaskPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task18';
}
