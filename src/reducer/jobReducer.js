export const jobReducer = (state, action) => {
  switch (action.type) {
    case 'TAG_CLICK':
      if (state.filters.includes(action.tag)) {
        return {
          listJob: state.listJob,
          filters: state.filters,
        };
      }
      return {
        listJob: state.listJob,
        filters: [...state.filters, action.tag],
      };
    case 'REMOVE_TAG':
      const tags = state.filters.filter((tag) => tag !== action.tag);
      return {
        listJob: state.listJob,
        filters: tags,
      };
    case 'CLEAR_TAGS':
      return {
        listJob: state.listJob,
        filters: [],
      };
    default:
      return state;
  }
};
