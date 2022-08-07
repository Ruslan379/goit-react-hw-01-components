import PropTypes from 'prop-types';

import css from './Statistics.module.css'



//! Функция, генерирующая случайный цвет фона
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const RandomHexColor = getRandomHexColor() //!
// console.log(RandomHexColor); //!


export function Statistics({ title, stats = [] }) {
    return (
        <section className={css.statistics}>
        {title && <h2>{title}</h2>}
        {/* <h2 className="title">Upload stats</h2> */}

        <ul className={css.statList}>
            {stats.map(stat => (
                <li className={css.item} key={stat.id} style={{color: getRandomHexColor(), backgroundColor: getRandomHexColor()}}>
                    <span className={css.label}>{stat.label}</span>
                    <span className={css.percentage} style={{color: getRandomHexColor()}}>{stat.percentage}%</span>
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



