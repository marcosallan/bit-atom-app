import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicamento } from './medicamentos/medicamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

  constructor( private http: HttpClient ) { }

  save(medicamento : Medicamento) : Observable<Medicamento> {
    return this.http.post<Medicamento>('http://localhost:8080/api/medicamentos', medicamento)
  }

  update(medicamento : Medicamento) : Observable<any> {
    return this.http.put<Medicamento>(`http://localhost:8080/api/medicamentos/${medicamento.id}`, medicamento)
  }

  getMedicamentos() : Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>('http://localhost:8080/api/medicamentos');
  }

  getMedicamentoById(id: number) : Observable<Medicamento> {
    return this.http.get<any>(`http://localhost:8080/api/medicamentos/${id}`);
  }

  deletar(medicamento : Medicamento) : Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/medicamentos/${medicamento.id}`)
  }
}
