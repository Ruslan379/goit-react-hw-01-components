import PropTypes from 'prop-types';

import { FcStatistics } from "react-icons/fc";

import { iconSize } from 'configs';



import {
    Statistic,
    StatList,
    Item,
    Label,
    Percentage,
    IconStatistic
} from 'components/Statistics/Statistics.styled'; 




//! Функция, генерирующая случайный цвет фона
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



export function Statistics({ title, stats = [] }) {
    return (
        <Statistic>
            {title && <h2>{title}</h2>}

        <IconStatistic>
                <FcStatistics size={iconSize.elg}/> 
        </IconStatistic> 

            <StatList>
                {stats.map(stat => (
                    <Item
                        randomColor={getRandomHexColor()}
                        key={stat.id}
                    >
                        <Label>
                            {stat.label}
                        </Label>
                        <Percentage>
                            {stat.percentage}
                            %
                        </Percentage>

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
