import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js"
import {Conta} from "./Conta.js";

const cliente1 = new Cliente("Ricardo", 12345678978);
const cliente2 = new Cliente("Joana", 12345678977);

const conta1 = new ContaCorrente(0, cliente1, 1001);
conta1.depositar(500);

const conta2 = new ContaCorrente(0, cliente2, 1002)
conta1.transferir(200, conta2)

const contaPoupanca = new ContaPoupanca(0, cliente1, 1001);


console.log(conta);