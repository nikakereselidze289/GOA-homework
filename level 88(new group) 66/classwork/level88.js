import React from 'react';

const AgeCheck = () => {
  const age = 16;

  return (
    <h1>{age >= 18 ? 'You are an adult' : 'You are not an adult'}</h1>
  );
};

export default AgeCheck;
