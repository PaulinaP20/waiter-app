//selectors

//actions

const createActionname=actionName =>`app/tables/${actionName}`;

const UPDATE_TABLES = createActionname('UPDATE_TABLES')

export const updateTables=payload => ({type: UPDATE_TABLES, payload});

//action creators
const tablesReducer = (statePart = [], action) => {
    switch (action.type) {
      case UPDATE_TABLES:
        return [...statePart, {...action.payload}]
      default:
        return statePart;
    };
  };

  export default tablesReducer;