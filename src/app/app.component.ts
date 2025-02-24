import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BooklistPageComponent} from "./pages/booklist-page/booklist-page.component";
import {NavbarComponent} from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BooklistPageComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HarryPotterBook';
}
