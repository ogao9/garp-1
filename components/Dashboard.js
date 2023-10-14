import React from 'react';
import ReadingList from './ReadingList';

const Dashboard = ({ toRead }) => {
  return (
    <div>
      <p className='mb-8'></p>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <h2 className='text-2xl font-semibold'>To-Read</h2>
          <ReadingList list={toRead} />
        </div>
        <div>
          <h2 className='text-2xl font-semibold'>Feed</h2>
          {/* <Feed /> */}
        </div>
      </div>
    </div>
  )
}

export default Dashboard;