// import PropTypes from 'prop-types';
import {Th, Tr} from './Transaction.styled'
export const TransactionHistoryItem = function ({ item: {id, type, amount, currency} }) {
    return (
        <Tr key={id}>
        <Th>{type}</Th>
        <Th>{amount}</Th>
        <Th>{currency}</Th>
        </Tr>
    );
};
