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
  id=""
  nombre=""
  fecha_creacion=""
  descripcion = ""
  habilitar =false
  constructor(public programaService:ProgramaService) { }

  ngOnInit(): void {
    this.programaService.getRecords();
  }

  async guardar(){
    console.log(this.descripcion)
    try {
      (await this.programaService.createRecordRequest(new Programa(parseInt(this.id),this.descripcion,
    this.nombre,new Date())));

    } catch (error) {
      
    }    
    this.programaService.getRecords();
    
  }
}
