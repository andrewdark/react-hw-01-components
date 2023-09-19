import userData from '../data/user.json';
import { Profile } from './profile/Profile';

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
    </div>
  );
};
