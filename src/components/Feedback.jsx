import React from 'react';

const Feedback = () => {
  return (
    <div className='h-[calc(100vh-48px)] flex items-center justify-center'>
      {/* Container for the feedback message */}
      <div className='flex items-center justify-center text-center h-[150px] w-[250px] rounded-xl shadow-sm p-2 drop-shadow-md shadow-black bg-[#444444] text-white'>
        Enter your City name to view weather details
      </div>
    </div>
  );
};

export default Feedback;
