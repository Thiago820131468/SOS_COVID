import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../../../cliente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(public clienteService: ClienteService) { 

  }

  ngOnInit(): void {

  }

  AdicionarCliente(form: NgForm) {

    this.clienteService.adicionarCliente(
      form.value.nome,
      form.value.cpf,
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
