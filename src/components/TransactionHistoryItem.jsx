import PropTypes from 'prop-types';
import { Th, Tr } from './Transaction.styled'

export const TransactionHistoryItem = function ({ item: {id, type, amount, currency} }) {
    return (
        <Tr key={id}>
        <Th>{type}</Th>
        <Th>{amount}</Th>
        <Th>{currency}</Th>
        </Tr>
    );
};

TransactionHistoryItem.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        })
    ),
};