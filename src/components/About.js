import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum blanditiis autem esse, voluptate provident ea architecto reiciendis suscipit hic nihil tenetur aliquid ab nobis neque, ullam vero temporibus perferendis! Commodi.</p>
    </div>
  );
}

export default Rainbow(About);