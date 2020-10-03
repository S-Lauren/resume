import React from 'react';
import {useLocation, useParams} from 'react-router-dom';

const BoxItem = () => {
  const {id} = useParams();
  const location = useLocation()
  console.log(location.state.data.id)
  return (
    <div>
      Hello
      <p>{id}</p>
      <p>{location.state.data.title}</p>
      <img src={require(`../../assets/${location.state.data.img}.png`)}/>
    </div>
  );
};

export default BoxItem;