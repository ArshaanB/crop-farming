import { client } from './api-client';

function depositTicket(depositDetails) {
  return client('deposit_ticket', { data: { depositDetails } });
}

export { depositTicket };
