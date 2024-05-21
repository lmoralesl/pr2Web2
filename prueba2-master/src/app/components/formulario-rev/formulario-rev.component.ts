import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RevisionService } from '../../services/revision.service';

@Component({
  selector: 'app-formulario-rev',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-rev.component.html',
  styleUrl: './formulario-rev.component.css'
})
export class FormularioRevComponent {
id:any;
producto:any;
tamanio:any;
servicio=inject(RevisionService)

guardar(datos:any){
  this.servicio.postProductos(datos.value).subscribe()
  window.location.reload()
}
}
