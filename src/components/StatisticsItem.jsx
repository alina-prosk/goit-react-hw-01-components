export const StatisticsItem = ({stats}) => {
    return (
        <li key={stats.id}>
                    <span>{stats.label}</span>
                    <span>{stats.percentage}</span>
                </li>
    )
}