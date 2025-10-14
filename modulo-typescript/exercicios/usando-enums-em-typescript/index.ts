enum PacoteStatus {
  Pendente = 'Pendente',
  Pago = 'Pago',
  Enviado = 'Enviado'
}

let statusPedido: PacoteStatus = PacoteStatus.Pendente;

console.log(`O status do pedido é: ${statusPedido}`);
//npx tsx exercicios/usando-enums-em-typescript/index.ts
