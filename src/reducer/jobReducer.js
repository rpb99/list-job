export const jobReducer = (state, action) => {
  let filtered = [];
  let jobsFilter = [];
  switch (action.type) {
    case 'FILTER_JOB_ROLE':
      const role = state.listJob.filter((job) =>
        Object.values(job).includes(action.payload)
      );
      filtered = [...state.filtered, action.payload];
      filtered = [...new Set(filtered)];

      return {
        listJob: role,
        filtered,
      };
    case 'FILTER_JOB_LANGUAGE':
      const language = state.listJob.filter((job) =>
        Object.values(job.languages).includes(action.payload)
      );
      filtered = [...state.filtered, action.payload];
      filtered = [...new Set(filtered)];
      return {
        listJob: language,
        filtered,
      };
    case 'FILTER_JOB_TOOL':
      const tool = state.listJob.filter((job) =>
        Object.values(job.tools).includes(action.payload)
      );
      console.log(tool);
      filtered = [...state.filtered, action.payload];
      filtered = [...new Set(filtered)];
      return {
        listJob: tool,
        filtered,
      };
    case 'REMOVE_FILTER':
      const removeFilter = state.filtered.filter(
        (filter, i) => i !== action.idx
      );
      return {
        listJob: state.listJob,
        filtered: removeFilter,
      };
    default:
      return state;
  }
};
