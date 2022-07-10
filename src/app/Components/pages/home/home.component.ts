import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { Estudiante } from 'src/app/Models/estudiante.model';
import { EstudianteService } from 'src/app/Services/estudiante.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  model?:NgbDateStruct;
  editar = false
  habilitar =false
  option = "Crear  Estudiante"
   cedula=""
   email=""
   id=""
   id_usuario_creacion=""
   nombre=""
   registDate=""
   telefono=""
  
  constructor(public estudianteService:EstudianteService) {
  }

  ngOnInit(): void {
    this.estudianteService.getRecords();

    
  }

  async guardar(){
    if(this.editar==false){
      await this.estudianteService.createRecordRequest(new Estudiante(parseInt(this.cedula),this.email,parseInt(this.id),parseInt(this.id_usuario_creacion)
    ,this.nombre,new Date(),this.telefono));
    console.log(this.registDate)
    this.estudianteService.getRecords();
      
    }else{
      
      (await this.estudianteService.putEstudiante(new Estudiante(parseInt(this.cedula),this.email,parseInt(this.id),parseInt(this.id_usuario_creacion)
      ,this.nombre,new Date(),this.telefono)));
      this.id="";
      this.cedula="";
      this.nombre="";
      this.telefono="";
      this.email="";
      this.editar=false
      this.habilitar=false
      this.option = "Crear  Estudiante";
      (await this.estudianteService.getRecords())
     
    
    }
  }
  async Editar(Id:any,nombre:any,telefono:any,cedula:any,email:any,_usuario_creacion:any,registDate:any){
    this.option = "Guardar  Estudiante"
    this.editar=true
    this.id=Id;
    this.cedula=cedula;
    this.nombre=nombre;
    this.telefono=telefono;
    this.email=email;
    this.registDate = registDate
    this.habilitar = true;
    console.log(this.editar);
    this.id_usuario_creacion=_usuario_creacion;
 
  }

  async Eliminar(Id:any){
    (await this.estudianteService.deleteestudiante(Id))
    this.estudianteService.getRecords();
  }

}
