import userData from '../data/user.json';
import  statData from '../data/data.json';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';

export const App = () => {
  return (
    <div
      style={{
        width: 600,
        padding: '16px',
        backgroundColor: '#E7ECF2',
      }}
    >
      <Profile usr={userData} />
      <br/>
      <Statistics data={statData}/>
    </div>
  );
};
