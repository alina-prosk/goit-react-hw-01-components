import PropTypes from 'prop-types';
import { Profile } from "./Profile";
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import {TransactionsHistory} from "./TransactionsHistory";

import user from "../user";
import data from "../data";
import friends from "../friends";
import transactions from "../transactions";

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionsHistory items={transactions} />;
    </div>
  );
};



Profile.PropTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
}
