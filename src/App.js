import React from 'react';
import Header from './components/Header';
import Jobs from './components/Jobs';
import Filters from './components/Filters';
import JobContextProvider from './contexts/JobContext';

function App() {
  return (
    <JobContextProvider>
      <Header />
      <div className="App px-6 lg:px-24">
        <Filters />
        <Jobs />
      </div>
    </JobContextProvider>
  );
}

export default App;
