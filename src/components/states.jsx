import React from 'react';

function StateCard({ stateName, imageUrl }) {
  return (
    <div className="max-w-xs w-full rounded overflow-hidden shadow-lg border border-gray-300">
      <div className="relative">
        <img className="w-full h-64 object-cover" src={imageUrl} alt={stateName} />
        <div className="absolute top-0 left-0 p-2">
          <h3 className="text-lg font-semibold text-white">{stateName}</h3>
        </div>
      </div>
    </div>
  );
}

export default StateCard;
