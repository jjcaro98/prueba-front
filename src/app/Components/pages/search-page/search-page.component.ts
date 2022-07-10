import { Component, OnInit } from '@angular/core';
import { EstudianteService } from 'src/app/Services/estudiante.service';
import { ProgramaService } from 'src/app/Services/programa.service';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})

export class SearchPageComponent implements OnInit {
  busqueda = "";
  options = [
    {value: 'Estudiante', viewValue: 'Estudiante'},
    {value: 'Programa', viewValue: 'Programa'},
  ];
  options2 = [
    {value: 'Nombre', viewValue: 'Nombre'},
    {value: 'Programa', viewValue: 'Programa'},
  ];
  seleccionada: string = this.options[0].value;
  seleccionada2: string = this.options[0].value;
  constructor(public programaService:ProgramaService, public estudianteService:EstudianteService) { }

  ngOnInit(): void {
  }

  async Buscar(){
    if(this.seleccionada=='Estudiante'&&this.seleccionada2=="Nombre"){
      (await this.estudianteService.getEstudentByName(this.busqueda))
      
    }
    if(this.seleccionada=='Estudiante'&&this.seleccionada2=="Programa"){
      alert("Buscando por Estudiante y Programa al que pertenece....")
    }
    if(this.seleccionada=='Programa'){
      (await this.programaService.getProgramByName(this.busqueda))
    }
  }

}
