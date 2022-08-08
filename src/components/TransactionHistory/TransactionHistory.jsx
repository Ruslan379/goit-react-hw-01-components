import PropTypes from 'prop-types';

// import css from './TransactionHistory.module.css' //? OLD, before creating the file jsconfig.json
// import css from 'components/TransactionHistory/TransactionHistory.module.css' //todo = старый вариант импорта стилей
//! НОВЫЙ вариант импорта стилей
import { TransactionsHistory } from 'components/TransactionHistory/TransactionHistory.styled'; 
import { ItemHistory } from 'components/TransactionHistory/TransactionHistory.styled'; 
import { TableTh } from 'components/TransactionHistory/TransactionHistory.styled'; 
import { TableTd } from 'components/TransactionHistory/TransactionHistory.styled'; 



//! +++++++++++++++ НОВЫЙ вариант импорта стилей с TransactionHistory.styled.jsx ++++++++++++++++++
export function TransactionHistory({ title, items = [] }) {
    // console.log(items[0]); //!
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





//todo  ---- старый вариант импорта стилей c TransactionHistory.module.css ----------
// export function TransactionHistory({ title, items = [] }) {
//     // console.log(items[0]); //!
//     return (
//         <section className={css.transactionHistory}>
//         {title && <h2>{title}</h2>}
            
//         <table className={css.itemHistory}>
//             <thead>
//                 <tr>
//                     <th>Type</th>
//                     <th>Amount</th>
//                     <th>Currency</th>
//                 </tr>
//             </thead>

//             <tbody>
//                 {items.map(item => (
//                     <tr key={item.id}>
//                         <td>{item.type}</td>
//                         <td>{item.amount}</td>
//                         <td>{item.currency}</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//         </section>
//     );
// };
