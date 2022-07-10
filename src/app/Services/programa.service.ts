import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Programa } from '../Models/programa.model';
@Injectable({
  providedIn: 'root'
})
export class ProgramaService {
  listPrograma:Programa[]=[]
  listProgramaBusqueda:Programa[]=[]
  constructor(public httpClient:HttpClient) { }

  async getRecordsRequest(){
    const data = await this.httpClient.get("http://localhost:8080/v1/gestionUniversidad/programas/lista"
   
    ).toPromise();
    const json = JSON.parse(JSON.stringify(data))    
    return json
  }

  async getRecords(){
    const response = await this.getRecordsRequest();
    this.listPrograma = response
    console.log(this.listPrograma)
  }

  async createRecordRequest(programa:Programa){
    const data = await  this.httpClient.post("http://localhost:8080/v1/gestionUniversidad/programas/registrar",{
      id:programa.id,  
      
      
      descripcion:programa.descripcion,
      fecha_creacion:programa.fecha_creacion,
      nombre:programa.nombre,
      
    }
     
    ).toPromise();
    console.log(data)
    return data
  }

  async getProgramByNameRequest(nombre:any){
    const data = await this.httpClient.get("http://localhost:8080/v1/gestionUniversidad/programas/buscar/"+nombre
   
    ).toPromise();
    const json = JSON.parse(JSON.stringify(data))    
    return json
  }

  
  async getProgramByName(nombre:any){
    const response = await this.getProgramByNameRequest(nombre);
    this.listProgramaBusqueda = response
    console.log(this.listProgramaBusqueda)
  }
}
