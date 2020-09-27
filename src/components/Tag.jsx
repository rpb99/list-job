import React, { useContext } from 'react';
import { JobContext } from '../contexts/JobContext';

function Tag({ tag }) {
  const { jobs, dispatch } = useContext(JobContext);
  let style = 'bg-teal-100 hover:bg-teal-400 py-1 px-2 rounded-lg mr-6 mt-5';
  const handleTag = (e) => {
    e.preventDefault();
    dispatch({
      type: 'TAG_CLICK',
      tags: jobs.filters,
      tag,
    });
  };
  return (
    <>
      <button onClick={handleTag} className={`${style} `}>
        {tag}
      </button>
    </>
  );
}

export default Tag;
