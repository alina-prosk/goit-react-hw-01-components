import PropTypes from 'prop-types';
import { Statitem } from "./Statistics.styled"
import { Label, Quantity } from "./Profile.styled";
export const StatisticsItem = ({ stats: {id, label, percentage} }) => {
    return (
        <Statitem key={id} style={{ backgroundColor: getRandomHexColor() }}>
                    <Label>{label}</Label>
                    <Quantity>{percentage}%</Quantity>
                </Statitem>
    )
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

StatisticsItem.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        })
    ),
};
