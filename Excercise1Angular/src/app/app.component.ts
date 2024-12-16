import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './DataBindingPractice/data-binding/data-binding.component';
import { DirectivesComponent } from './DirectivesPractices/directives/directives.component';
import { ParentComponent } from './ComponentCommunication/parent/parent.component';
import { FirstcomponentComponent } from './Services/firstcomponent/firstcomponent.component';
import { TemplatevariableComponent } from "./templateVariable/templatevariable/templatevariable.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplatevariableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Excercise1Angular';
}
