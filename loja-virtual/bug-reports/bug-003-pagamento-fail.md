# Bug Report - Falha no Pagamento

---

## Informações Gerais

- **ID:** BUG-003  
- **Título:** Pagamento não é processado mesmo com dados válidos  
- **Módulo:** Checkout / Pagamento  
- **Ambiente:** Web - Chrome / Windows 10  
- **Versão:** v1.0  
- **Data:** 30/01/2026  
- **Reportado por:** Rafael  

---

## Descrição

Ao tentar finalizar a compra com cartão válido, o sistema não processa o pagamento e retorna erro genérico.

---

## Passos para Reproduzir

1. Realizar login  
2. Adicionar produto ao carrinho  
3. Acessar checkout  
4. Informar dados válidos do cartão  
5. Confirmar pagamento

---

## Resultado Esperado

O pagamento deve ser aprovado e o pedido finalizado com sucesso.

---

## Resultado Atual

O sistema retorna a mensagem:

> "Erro ao processar pagamento. Tente novamente."

Mesmo com dados corretos.

---

## Evidências

Print da tela anexado.

---

## Severidade e Prioridade

- **Severidade:** Crítica  
- **Prioridade:** Alta

---

## Observações

O erro ocorre apenas em pagamentos parcelados.

