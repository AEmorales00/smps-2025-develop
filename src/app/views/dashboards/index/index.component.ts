import { AsistentesInterface } from './../../../models/asistentes.model';
import { Component } from '@angular/core'
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component'
import { CrmStatComponent } from "./components/crm-stat/crm-stat.component";
import { CommonModule } from '@angular/common';
import { IndexService } from './index.service';


@Component({
    selector: 'app-index',
    imports: [
    BreadcrumbComponent, CommonModule
],
    templateUrl: './index.component.html',
    styles: ``
})
export class IndexComponent {
  todoData:any
  asistentesList: AsistentesInterface[]= []
  esperados:number = 300
  registrados:number = 0
  faltantes:number = 0
  totalIngresos: number = 0

  constructor(private indexservise: IndexService){

  }

  ngOnInit(): void {
    this.getAsistentes()
  }


  getAsistentes(){
    this.indexservise.getAsistentes()
    .then(response=>{
      this.asistentesList= response
      this.registrados = response.length
      this.faltantes= this.esperados-this.registrados
      this.totalIngresos= 350*response.length
    })
  }
}
