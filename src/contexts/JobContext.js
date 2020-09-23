import React, { createContext, useReducer } from 'react';
import listJob from '../data.json';
import { jobReducer } from '../reducer/jobReducer';

const initialState = {
  listJob,
  filtered: [],
};

export const JobContext = createContext();

function JobContextProvider(props) {
  const [jobs, dispatch] = useReducer(jobReducer, initialState);

  return (
    <JobContext.Provider value={{ jobs, dispatch }}>
      {props.children}
    </JobContext.Provider>
  );
}

export default JobContextProvider;
