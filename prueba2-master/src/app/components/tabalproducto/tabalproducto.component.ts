import { Component, inject } from '@angular/core';
import { RevisionService } from '../../services/revision.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabalproducto',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './tabalproducto.component.html',
  styleUrl: './tabalproducto.component.css'
})
export class TabalproductoComponent {
  servicio=inject(RevisionService)
  ruta=inject(Router)

  producto:any
  id:any
tamanio='seleccione'

  guardar(datos:any){
    this.servicio.postProductos(datos.value).subscribe()
    window.location.reload()
  }

  ngOnInit(): void {
    this.servicio.getProducto().subscribe(p=>{
     this.producto=p
    })
   }
  
   eliminar(id:any){
    this.servicio.deleteProductoID(id).subscribe()
    window.location.reload()
  }
  

  
  cerrar(){
    localStorage.removeItem('acceso')
    
    window.location.href= 'login'

}
}
