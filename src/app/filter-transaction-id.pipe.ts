import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTransactionId'
})
export class FilterTransactionIdPipe implements PipeTransform {
  transform(transactions: any[], searchText: string): any[] {
    if (!transactions) return [];
    if (!searchText) return transactions;
    searchText = searchText.toLowerCase();
    return transactions.filter(transaction =>
      transaction.transactionId.toLowerCase().includes(searchText)
    );
  }
}
