import { TransactionHistoryItem } from "./TransactionHistoryItem";
import { Table, Tbody, Thead, Th, Tr } from "./Transaction.styled";
import { Profiled } from './Profile.styled'

export const TransactionsHistory = ({ items }) => {
    return (
        <Profiled>
        <Table>
            <Thead>
                <Tr>
                    <Th>Type</Th>
                    <Th>Amount</Th>
                    <Th>Currency</Th>
                </Tr>
            </Thead>
            <Tbody>
                {items.map(item => (
                    <TransactionHistoryItem key={item.id} item={item} />
                ))}
            </Tbody>
            </Table>
            </Profiled>
    );
};


/* <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table> */