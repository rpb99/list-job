import React, { useContext } from 'react';
import Job from './Job';
import { JobContext } from '../contexts/JobContext';

function Jobs() {
  const { jobs } = useContext(JobContext);
  const { filters } = jobs;
  return (
    <div>
      {!filters.length
        ? jobs.listJob.map((job) => <Job job={job} />)
        : jobs.listJob.map((job) => {
            let filterArr = [
              job.role,
              job.level,
              ...job.languages,
              ...job.tools,
            ];
            if (filters.every((filter) => filterArr.includes(filter))) {
              return <Job job={job} />;
            }
            return null;
          })}
    </div>
  );
}

export default Jobs;
