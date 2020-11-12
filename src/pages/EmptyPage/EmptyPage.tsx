import React from 'react';

type Props = {
  title: string;
};

const EmptyPage: React.FC<Props> = ({ title }) => {
  return <div>{title}</div>;
};

export default EmptyPage;
