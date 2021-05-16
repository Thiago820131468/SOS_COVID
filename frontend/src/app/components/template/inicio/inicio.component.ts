import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { ClienteService } from '../../../cliente.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router: Router, public clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  navigateToLoginPage(form: NgForm): void {
    this.router.navigate(['/home'])

    this.clienteService.logarCliente(
      form.value.cpf,
      form.value.senha
    )

  }

  navigateToCadastroPage(): void {
    this.router.navigate(['/componentes/template/cadastro'])
  }

}
