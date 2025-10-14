enum PacoteStatus {
  Pendente = 'Pendente',
  Pago = 'Pago',
  Enviado = 'Enviado'
}

let statusPedido: PacoteStatus = PacoteStatus.Pendente;

console.log(`O status do pedido é: ${statusPedido}`);
