import React from 'react';

const Card = ({ children, className }) => (
  <div className={`bg-white shadow-sm rounded-lg ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

export default Card;
