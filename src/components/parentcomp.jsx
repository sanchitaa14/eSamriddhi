import React from 'react';
import StateCard from './states';

function ParentComponent() {
  const statesData = [
    { stateName: 'California', imageUrl: 'https://source.unsplash.com/500x300/?delhi' },
    { stateName: 'New York', imageUrl: 'https://source.unsplash.com/500x300/?newyork' },
    { stateName: 'Texas', imageUrl: 'https://source.unsplash.com/500x300/?texas' },
    { stateName: 'Florida', imageUrl: 'https://source.unsplash.com/500x300/?florida' }
  ];

  return (
    <div className="flex justify-between gap-6">
      {statesData.map((state, index) => (
        <StateCard key={index} stateName={state.stateName} imageUrl={state.imageUrl} />
      ))}
    </div>
  );
}

export default ParentComponent;
