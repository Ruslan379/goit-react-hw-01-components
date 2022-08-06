import PropTypes from 'prop-types';


export function Statistics({ title, itemsStatistics = [] }) {
    return (
        <section className="statistics">
        {title && <h2>{title}</h2>}
        {/* <h2 className="title">Upload stats</h2> */}

        <ul className="stat-list">
            {itemsStatistics.map(item => (
                <li key={item.id}>
                    <span className="label">{item.label}</span>
                    <span className="percentage">{item.percentage}</span>
                </li>
            ))}
        </ul>
        </section>
    );
};



Statistics.propTypes = {
    itemsStatistics: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
};



