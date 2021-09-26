import {Cliente} from "file:///c:/Users/karina.rodrigues/Desktop/React/javascript-orientacao-objetos/Cliente.js";
import {ContaCorrente} from "file:///c:/Users/karina.rodrigues/Desktop/React/javascript-orientacao-objetos/ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 12345678978);
const cliente2 = new Cliente("Joana", 12345678977);

const conta1 = new ContaCorrente(cliente1, 1001);
conta1.depositar(500);

const conta2 = new ContaCorrente(cliente2, 1002)
conta1.transferir(200, conta2)

console.log(ContaCorrente.numeroDeContas);