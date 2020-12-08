import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Medicamento } from '../medicamento';
import { MedicamentosService } from '../../medicamentos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-medicamentos-form',
  templateUrl: './medicamentos-form.component.html',
  styleUrls: ['./medicamentos-form.component.css']
})
export class MedicamentosFormComponent implements OnInit {

  medicamento: Medicamento;
  success: boolean = false;
  errors: String[];
  id: number;

  constructor(
    private service: MedicamentosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
    this.medicamento = new Medicamento();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id) {
        this.service
        .getMedicamentoById(this.id)
        .subscribe( response => this.medicamento = response,
        errorResponse => this.medicamento = new Medicamento()
      )}
    })
  }

  voltarParaListagem() {
    this.router.navigate(['/medicamentos-lista'])
  }
  onSubmit() {
    if(this.id) {
      this.service.update(this.medicamento)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
      }, errorResponse => {
        this.errors = ['Erro ao atualizar']
      })
    }
    else {
      this.service.save(this.medicamento).subscribe( response => {
        this.success = true;
        this.errors = null;
        this.medicamento = response;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      })
    }
  }
}
