import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})

export class SearchPageComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

  Buscar(){
    if(this.seleccionada=='Estudiante'&&this.seleccionada2=="Nombre"){
      alert("Buscando por Estudiante y nombre de estudiante....")
    }
    if(this.seleccionada=='Estudiante'&&this.seleccionada2=="Programa"){
      alert("Buscando por Estudiante y Programa al que pertenece....")
    }
    if(this.seleccionada=='Programa'){
      alert("Buscando por Programa y Nombre de Programa....")
    }
  }

}
