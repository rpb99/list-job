import React, { useContext } from 'react';
import { JobContext } from '../contexts/JobContext';
function Job() {
  const { jobs, dispatch } = useContext(JobContext);

  const jobStyle =
    'relative bg-white my-10 px-6 pt-10 pb-6 shadow-xl rounded-lg';
  return (
    <>
      {jobs.listJob.map((job) => (
        <div
          key={job.id}
          className={
            job.featured ? `border-l-4 border-teal-500 ${jobStyle}` : jobStyle
          }
        >
          <div className="lg:flex lg:justify-between">
            <div className="flex">
              <div className="absolute top-0 -mt-5 lg:static lg:mt-0 lg:self-center lg:mr-4">
                <img
                  width="55"
                  src={require(`../assets/img/${job.logo}`)}
                  alt=""
                />
              </div>
              <div>
                <div className="flex">
                  <div className="text-teal-500 text-sm font-medium mr-6">
                    {job.company}
                  </div>
                  {job.new && (
                    <div className="bg-teal-500 text-xs font-medium text-white px-3 py-1 mr-3 rounded-full">
                      NEW!
                    </div>
                  )}
                  {job.featured && (
                    <div className="bg-gray-800 text-xs font-medium text-white px-2 py-1 rounded-full">
                      FEATURED
                    </div>
                  )}
                </div>
                <div className="text-teal-800 font-medium mt-2">
                  {job.position}
                </div>
                <div className="flex text-gray-600 text-xs mt-2">
                  <div>{job.postedAt}</div>
                  <span className="mx-3">.</span>
                  <div>{job.contract}</div>
                  <span className="mx-3">.</span>
                  <div>{job.location}</div>
                </div>
              </div>
            </div>
            <div className="border-b-2 mt-4 lg:hidden"></div>

            <div>
              <div className="flex flex-wrap text-sm text-teal-600 font-medium">
                <div
                  onClick={() =>
                    dispatch({
                      type: 'FILTER_JOB_ROLE',
                      payload: job.role,
                    })
                  }
                  className="bg-teal-100 py-1 px-2 rounded-lg mr-6 mt-5"
                >
                  {job.role}
                </div>
                <div
                  className="bg-teal-100 py-1 px-2 rounded-lg mr-6 mt-5"
                  onClick={() =>
                    dispatch({
                      type: 'FILTER_JOB_ROLE',
                      payload: job.level,
                    })
                  }
                >
                  {job.level}
                </div>
                {job.languages.map((language) => (
                  <div
                    className="bg-teal-100 py-1 px-2 rounded-lg mr-6 mt-5"
                    onClick={() =>
                      dispatch({
                        type: 'FILTER_JOB_LANGUAGE',
                        payload: language,
                      })
                    }
                  >
                    {language}
                  </div>
                ))}
                {job.tools.map((tool) => (
                  <div
                    className="bg-teal-100 py-1 px-2 rounded-lg mr-6 mt-5"
                    onClick={() =>
                      dispatch({
                        type: 'FILTER_JOB_TOOL',
                        payload: tool,
                      })
                    }
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Job;
