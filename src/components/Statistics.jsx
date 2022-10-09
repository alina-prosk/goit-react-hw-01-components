import { StatisticsItem } from "./StatisticsItem";
export const Statistics = ({ stats, title}) => {
    return (
        <section>
            <h2>Upload stats</h2>
            <ul>{stats.map(stats => (
          <StatisticsItem key={stats.id} stats={stats} />
            ))}
        </ul>
</section>
    );
};



/* <section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section> */