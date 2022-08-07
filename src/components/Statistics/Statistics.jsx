import PropTypes from 'prop-types';

import css from './Statistics.module.css'


export function Statistics({ title, stats = [] }) {
    return (
        <section className={css.statistics}>
        {title && <h2>{title}</h2>}
        {/* <h2 className="title">Upload stats</h2> */}

        <ul className={css.statList}>
            {stats.map(stat => (
                <li className={css.item} key={stat.id}>
                    <span className={css.label}>{stat.label}</span>
                    <span className={css.percentage}>{stat.percentage}%</span>
                </li>
            ))}
        </ul>
        </section>
    );
};


Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
    title: PropTypes.string
};



