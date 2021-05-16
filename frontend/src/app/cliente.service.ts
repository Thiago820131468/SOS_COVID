import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'; // RxJS 
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente.model';
import { Clinica } from './clinica.model'
import { Login } from './Login.model';
@Injectable( {providedIn: 'root'} )
export class ClienteService {
    private clientes: Cliente[] = []
    private clinicas: Clinica[] = []
    constructor(private httpClient: HttpClient) { }

    logarCliente(cpf: string, senha: string): void {
        const cliente: Login = {
            cpf: cpf,
            senha: senha,
        };
        this.httpClient.post<{
            clientes: Cliente []
        }>('http://localhost:3000/login', cliente )
    }


    adicionarCliente (nome: string, cpf: string, email: string, telefone: string, cep: string, rua: string, bairro: string, numero: string, complemento: string, senha: string) {

        const cliente: Cliente = {
            nome: nome,
            cpf: cpf,
            email: email,
            telefone: telefone,
            cep: cep,
            rua: rua,
            bairro: bairro,
            numero: numero,
            complemento: complemento,
            senha: senha
        }

        this.httpClient.post<{mensagem: string}>('http://localhost:3000/cadastro-cliente', cliente)

    }

    adicionarClinica (nome: string, cnpj: number, email: string, telefone: number, cep: string, rua: string, bairro: string, numero: string, complemento: string, senha: string) {
        const clinica: Clinica = {
            nome: nome,
            cnpj: cnpj,
            email: email,
            telefone: telefone,
            cep: cep,
            rua: rua,
            bairro: bairro,
            numero: numero,
            complemento: complemento,
            senha: senha
        }

        this.httpClient.post<{mensagem: string}>('http://localhost:3000/cadastro-clinica', clinica)
    
    }
/*
      //Método para que outros componentes possam observar p 'listaClientesAtualizada'
      getListaClientesAtualizadoObservable() {
        return this.listaClientesAtualizada.asObservable()
    }

      //Método para que outros componentes possam observar p 'listaClinicasAtualizada'
      getListaClinicasAtualizadoObservable() {
        return this.listaClinicasAtualizada.asObservable()
    }
*/

}