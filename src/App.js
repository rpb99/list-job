import React from 'react';
import Header from './components/Header';
import Job from './components/Job';
import Filter from './components/Filter';
import JobContextProvider from './contexts/JobContext';

function App() {
  return (
    <JobContextProvider>
      <Header />
      <div className="App px-6 lg:px-24">
        <Filter />
        <Job />
      </div>
    </JobContextProvider>
  );
}

export default App;
