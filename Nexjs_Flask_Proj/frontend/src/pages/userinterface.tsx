import React from 'react';
import UserInterface from '../components/UserInterface';

const UserInterfacePage: React.FC = () => {
  return (
    <div>
      <UserInterface backendName="flask" />
    </div>
  );
};

export default UserInterfacePage;