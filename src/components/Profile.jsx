import { Profiled, Avatar, Name, Taglocation, Stats, Label, Quantity, Statsitem } from "./Profile.styled";

export const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
    return (
        <Profiled>
            <Avatar src={avatar} alt="User avatar" width="100" />
            <Name>{username}</Name>
            <Taglocation>{tag}</Taglocation>
            <Taglocation>{location}</Taglocation>
            <Stats>
                <Statsitem>
                    <Label>Followers </Label>
                    <Quantity>{stats.followers}</Quantity>
                </Statsitem>
                <Statsitem>
                    <Label>Views </Label>
                    <Quantity>{stats.views}</Quantity>
                </Statsitem>
                <Statsitem>
                    <Label>Likes </Label>
                    <Quantity>{ stats.likes}</Quantity>
                </Statsitem>
            </Stats>
</Profiled>
    );

};






/* <div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div> */