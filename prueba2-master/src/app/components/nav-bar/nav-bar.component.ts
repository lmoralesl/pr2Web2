import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
ocultar:any
admin:any
//ocultar = localStorage.getItem('acceso')
ngOnInit(): void {
  if (typeof localStorage !== 'undefined') {
    this.ocultar = localStorage.getItem('acceso');
    this.admin = localStorage.getItem('admin');
    

  }

}
}
