import PropTypes from 'prop-types';
import { StatisticsItem } from "./StatisticsItem";
import { StatSection, StatTitle, StatList } from "./Statistics.styled"

export const Statistics = ({ stats, title}) => {
  return (
    <StatSection>
      {title && <StatTitle>{title}</StatTitle>}
            <StatList>{stats.map(stats => (
          <StatisticsItem key={stats.id} stats={stats} />
            ))}
        </StatList>
</StatSection>
    );
};

Statistics.propTypes = {
  title: PropTypes.string,
};
