import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Programa } from 'src/app/Models/programa.model';
import { ProgramaService } from 'src/app/Services/programa.service';

@Component({
  selector: 'app-programa-page',
  templateUrl: './programa-page.component.html',
  styleUrls: ['./programa-page.component.css']
})
export class ProgramaPageComponent implements OnInit {
  model?:NgbDateStruct;
  editar = false;
  habilitar =false;
  option = "Crear  programa"
  id=""
  nombre=""
  fecha_creacion=""
  descripcion = ""
  
  constructor(public programaService:ProgramaService) { }

  ngOnInit(): void {
    this.programaService.getRecords();
  }

  
  async guardar(){
    if(this.editar==false){
      await this.programaService.createRecordRequest(new Programa(parseInt(this.id),this.descripcion,
      this.nombre,new Date()));
    
    this.programaService.getRecords();
      
    }else{
      console.log("fecha"+this.fecha_creacion);
      (await this.programaService.putPrograma(new Programa(parseInt(this.id),this.descripcion,
      this.nombre,new Date(this.fecha_creacion))));

      this.id="";
      this.descripcion="";
      this.nombre="";
      this.editar=false
      this.habilitar=false
      this.option = "Crear  Programa";
      (await this.programaService.getRecords())
     
    
    }
  }

  async Eliminar(Id:any){
    (await this.programaService.deleteProgram(Id))
    this.programaService.getRecords();
  }

  async Editar(Id:any,nombre:any,descripcion:any,fecha_creacion:any){
    this.option = "Guardar  Programa"
    this.editar=true
    this.id=Id;
    this.descripcion=descripcion;
    this.nombre=nombre;
    this.fecha_creacion=fecha_creacion;    
    this.habilitar = true;
    console.log(this.editar);
    (await this.programaService.getRecords())
 
  }
}
