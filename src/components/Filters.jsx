import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { JobContext } from '../contexts/JobContext';

function Filter() {
  const { jobs, dispatch } = useContext(JobContext);
  const uniqueFilters = [...new Set(jobs.filters)];

  const removeTag = (tag) => {
    dispatch({
      type: 'REMOVE_TAG',
      tag,
    });
  };

  const clearTags = () => {
    dispatch({
      type: 'CLEAR_TAGS',
    });
  };

  return (
    <>
      {uniqueFilters.length ? (
        <div className="-mt-8 mb-20 md:mb-0 relative mx-auto w-full h-20">
          <div className="z-30 bg-white px-6 shadow-xl rounded-lg">
            <div className="flex justify-between items-center text-teal-800 py-5">
              <div className="flex flex-wrap items-center text-sm text-teal-600 font-medium rounded-lg">
                {uniqueFilters.map((tag, tagIdx) => (
                  <div className="flex justify-between items-center bg-teal-100 pl-1 rounded-lg mr-6 m-1">
                    <div>{tag}</div>
                    <div
                      onClick={() => removeTag(tag)}
                      className="bg-teal-600 px-3 py-1 ml-3 rounded-r-md"
                    >
                      <FontAwesomeIcon icon={faTimes} color="white" size="md" />
                    </div>
                  </div>
                ))}
              </div>
              <div onClick={clearTags} className="self-center">
                Clear
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Filter;
