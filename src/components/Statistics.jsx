import { StatisticsItem } from "./StatisticsItem";
import {StatSection, StatTitle, StatList} from "./Statistics.styled"
export const Statistics = ({ stats, title}) => {
    return (
        <StatSection>
            <StatTitle>Upload stats</StatTitle>
            <StatList>{stats.map(stats => (
          <StatisticsItem key={stats.id} stats={stats} />
            ))}
        </StatList>
</StatSection>
    );
};
