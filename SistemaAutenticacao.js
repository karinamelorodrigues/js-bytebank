/*
Ser autenticável significa ter a propriedade senha
*/
export class SistemaAutenticacao{
    static login(funcionario, senha){
       return funcionario.senha == senha;
    }
}