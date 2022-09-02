import PropTypes from 'prop-types';

import {
    TransactionsHistory,
    ItemHistory,
    TableTh,
    TableTd
} from 'components/TransactionHistory/TransactionHistory.styled'; 



export function TransactionHistory({ title, items = [] }) {
    return (
        <TransactionsHistory>
            {title && <h2>{title}</h2>}

            <ItemHistory>
                <thead>
                    <tr>
                        <TableTh>Type</TableTh>
                        <TableTh>Amount</TableTh>
                        <TableTh>Currency</TableTh>
                    </tr>
                </thead>

                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <TableTd>{item.type}</TableTd>
                            <TableTd>{item.amount}</TableTd>
                            <TableTd>{item.currency}</TableTd>
                        </tr>
                    ))}
                </tbody>
            </ItemHistory>
        </TransactionsHistory>
    );
};


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
    title: PropTypes.string
};

