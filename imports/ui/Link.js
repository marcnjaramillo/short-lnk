import React from 'react';

import PrivateHeader from './PrivateHeader';
import Filters from './Filters';
import LinksList from './LinksList';
import AddLink from './AddLink';



const Link = () => {

  return (
    <div>
      <PrivateHeader title="Your Links" />
      <Filters />
      <AddLink />
      <LinksList />
    </div>
  )
};

export default Link;