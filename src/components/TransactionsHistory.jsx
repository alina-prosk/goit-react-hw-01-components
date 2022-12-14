import { TransactionHistoryItem } from "./TransactionHistoryItem";
import { Table, Tbody, Thead, Th, Tr } from "./Transaction.styled";
import { Profiled } from './Profile.styled'
import PropTypes from 'prop-types';

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

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

