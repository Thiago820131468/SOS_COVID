import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../../../cliente.service';

@Component({  
  selector: 'app-cadastro-clinica',
  templateUrl: './cadastro-clinica.component.html',
  styleUrls: ['./cadastro-clinica.component.css']
})
export class CadastroClinicaComponent implements OnInit {

  constructor(public clienteService: ClienteService) { 

  }

  ngOnInit(): void {
  }

  AdicionarClinica(form: NgForm) {
    this.clienteService.adicionarClinica (
      form.value.nome,
      form.value.cnpj,
      form.value.email,
      form.value.telefone,
      form.value.cep,
      form.value.rua,
      form.value.bairro,
      form.value.numero,
      form.value.complemento,
      form.value.senha
    )
  }



}
