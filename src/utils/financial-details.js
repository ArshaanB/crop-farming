import { client } from './api-client';

function depositTicket(depositDetails) {
  return client('deposit_ticket', { data: { depositDetails } });
}

function getCustomer(customerDetails) {
  return client('get_customer', { data: { customerDetails } });
}

export { depositTicket, getCustomer };
