import PropTypes from 'prop-types';
import { Profile } from "../Profile";
import { Statistics } from '../Statistics';
import { FriendList } from '../FriendList';
import { TransactionsHistory } from "../TransactionsHistory";
import { Container } from "../App/App.styled";

import user from "json/user.json";
import data from "json/data.json";
import friends from "json/friends.json";
import transactions from "json/transactions.json";

export const App = () => {
  return (
  
      <Container>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
        <TransactionsHistory items={transactions} />
        </Container>
  );
};



Profile.PropTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
}
