import PropTypes from 'prop-types';

// import css from './Statistics.module.css' //? OLD, before creating the file jsconfig.json
// import css from 'components/Statistics/Statistics.module.css' //todo = старый вариант импорта стилей
//! НОВЫЙ вариант импорта стилей
import { Statistic, StatList, Item, Label, Percentage } from 'components/Statistics/Statistics.styled'; 

// import { Statistic } from 'components/Statistics/Statistics.styled'; 
// import { StatList } from 'components/Statistics/Statistics.styled'; 
// import { Item } from 'components/Statistics/Statistics.styled'; 
// import { Label } from 'components/Statistics/Statistics.styled'; 
// import { Percentage } from 'components/Statistics/Statistics.styled'; 





//! Функция, генерирующая случайный цвет фона
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const RandomHexColor = getRandomHexColor() //!
// console.log(RandomHexColor); //!


//! +++++++++++++++ НОВЫЙ вариант импорта стилей с Statistics.styled.jsx ++++++++++++++++++
export function Statistics({ title, stats = [] }) {
    return (
        <Statistic>
            {title && <h2>{title}</h2>}
            {/* <h2 className="title">Upload stats</h2> */}

            <StatList>
                {stats.map(stat => (
                    <Item
                        randomColor={getRandomHexColor()}
                        key={stat.id}
                        // style={{ color: getRandomHexColor(), backgroundColor: getRandomHexColor() }}
                    >
                        <Label>
                            {stat.label}
                        </Label>
                        <Percentage>
                            {stat.percentage}
                            %
                        </Percentage>

                        {/* <Percentage} 
                        style={{color: getRandomHexColor()}}>
                        {stat.percentage}
                        %
                        </Percentage> */}

                    </Item>
                ))}
            </StatList>
        </Statistic>
    );
};


Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
    title: PropTypes.string
};



//todo  ---- старый вариант импорта стилей c Statistics.module.css ----------
// export function Statistics({ title, stats = [] }) {
//     return (
//         <section className={css.statistics}>
//         {title && <h2>{title}</h2>}
//         {/* <h2 className="title">Upload stats</h2> */}

//         <ul className={css.statList}>
//             {stats.map(stat => (
//                 <li className={css.item}
//                     key={stat.id}
//                     style={{ color: getRandomHexColor(), backgroundColor: getRandomHexColor() }}>
//                     <span className={css.label}>{stat.label}</span>
//                     <span className={css.percentage}>{stat.percentage}%</span>
//                     {/* <span className={css.percentage} style={{color: getRandomHexColor()}}>{stat.percentage}%</span> */}
//                 </li>
//             ))}
//         </ul>
//         </section>
//     );
// };

