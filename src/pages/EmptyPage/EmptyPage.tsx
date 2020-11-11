import React from 'react';
import AppHeader from '../../components/AppHeader';

type Props = {
  title: string;
};

const EmptyPage: React.FC<Props> = ({ title }) => {
  return (
    <>
      <AppHeader />
      <div>{title}</div>
    </>
  );
};

export default EmptyPage;
