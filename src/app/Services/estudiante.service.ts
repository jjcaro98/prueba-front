import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudiante } from '../Models/estudiante.model';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  listEstudiante:Estudiante[]=[]
  constructor(public httpClient:HttpClient) { 

    
  }

  async createRegisterRequest(email:string,name: string,cedula:string,password:string):Promise<String>{
    const data = await this.httpClient.post("localhost:8080/v1/gestionUniversidad/estudiantes/registrar",{email,name,cedula,password}).toPromise();
    const json = JSON.parse(JSON.stringify(data))
    return json

  }
  async getRecordsRequest(){
    const data = await this.httpClient.get("http://localhost:8080/v1/gestionUniversidad/estudiantes/lista"
   
    ).toPromise();
    const json = JSON.parse(JSON.stringify(data))    
    return json
  }

  async getRecords(){
    const response = await this.getRecordsRequest();
    this.listEstudiante = response
    console.log(this.listEstudiante)
  }
  
  

  async createRecordRequest(estudiante:Estudiante){
    const data = await  this.httpClient.post("http://localhost:8080/v1/gestionUniversidad/estudiantes/registrar",{
      id:estudiante.id,
      cedula:estudiante.cedula,
      email:estudiante.email,
      id_usuario_creacion:estudiante.id_usuario_creacion,
      telefono:estudiante.telefono,
      registDate:estudiante.registDate,
      nombre:estudiante.nombre,
      
    }
     
    ).toPromise();
    console.log(data)
    return data
  }
  async deleteestudiante(id:any){

    const data = await this.httpClient.delete("http://localhost:8080/v1/gestionUniversidad/estudiantes/eliminar/"+id).toPromise()
    console.log(data)
    
  }
  async putEstudiante(estudiante:Estudiante){

    const data = await this.httpClient.put("http://localhost:8080/v1/gestionUniversidad/estudiantes/actualizar"
    
    
    ,{id:estudiante.id,
      cedula:estudiante.cedula,
      email:estudiante.email,
      id_usuario_creacion:estudiante.id_usuario_creacion,
      telefono:estudiante.telefono,
      registDate:estudiante.registDate,
      nombre:estudiante.nombre,}).toPromise()
    
    console.log(data)
    
  }
}
