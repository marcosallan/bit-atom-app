import { Component, OnInit } from '@angular/core';
import { MedicamentosService } from 'src/app/medicamentos.service';
import { Medicamento } from '../medicamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicamentos-lista',
  templateUrl: './medicamentos-lista.component.html',
  styleUrls: ['./medicamentos-lista.component.css']
})
export class MedicamentosListaComponent implements OnInit {

  medicamentos: Medicamento[] = [];
  medicamentoSelecionado: Medicamento;
  mensagemSucesso: String;
  mensagemErro: String;

  constructor(private service: MedicamentosService, private router: Router) { }

  ngOnInit(): void {
    this.service.getMedicamentos().subscribe( response =>
      this.medicamentos = response
    );
  }

  novoCadastro() {
    this.router.navigate(['/medicamentos-form'])
  }

  preparaDelecao( medicamento : Medicamento) {
    this.medicamentoSelecionado = medicamento;
  }

  deletarMedicamento(){
    this.service
    .deletar(this.medicamentoSelecionado)
    .subscribe( response => {
      this.mensagemSucesso = 'Medicamento excluído com sucesso!'
      this.ngOnInit();
    },
    erro => this.mensagemErro = 'Erro ao excluir o medicamento!'
    )
  }
}
