import { Component } from '@angular/core';
import { FormularioRevComponent } from '../../components/formulario-rev/formulario-rev.component';
import { TabalproductoComponent } from '../../components/tabalproducto/tabalproducto.component';

@Component({
  selector: 'app-revison',
  standalone: true,
  imports: [TabalproductoComponent],
  templateUrl: './revison.component.html',
  styleUrl: './revison.component.css'
})
export class RevisonComponent {

}
