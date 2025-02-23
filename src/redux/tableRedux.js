import { API_URL } from "../config";

const createActionName=actionName =>`app/tables/${actionName}`;

//actions
const FETCH_TABLES=createActionName('FETCH-TABLES');
const FETCH_TABLE_BY_ID=createActionName('FETCH_TABLE_BY_ID');
const UPDATE_TABLES=createActionName('UPDATE_TABLES');


export const getTableById=(state,id)=> state.tables.find(table=>table.id===id);

export const fetchTables=(tables)=>({type:FETCH_TABLES,payload:tables});
export const fetchTableById=(table)=>({type:FETCH_TABLE_BY_ID, payload:table})
export const updateTables=(payload) => ({type: UPDATE_TABLES, payload});


export const loadTablesFromApi =()=> {
  return dispatch=>{
    fetch(`${API_URL}/tables`)
      .then(res=>res.json())
      .then(data=>dispatch(fetchTables(data)))
  };
};

export const loadTableByIdFromApi = (id) => {
  return (dispatch) => {
    fetch(`${API_URL}/tables/${id}`)
      .then(res => {
        if (!res.ok) throw new Error(`Błąd: ${res.status} - ${res.statusText}`);
        return res.json();
      })
      .then(data => {
        dispatch(fetchTableById(data));
      })
  };
};

//action creators
const tablesReducer = (statePart = [], action) => {
    switch (action.type) {
      case FETCH_TABLES:
        return action.payload
      case FETCH_TABLE_BY_ID:
        return statePart.some(table=>table.id===action.payload.id) ? statePart.map(table=>(table.id===action.payload.id ? action.payload : table)) : [...statePart, action.payload]
      case UPDATE_TABLES:
        console.log(action.payload);
        return statePart.map(table =>
          table.id ===action.payload.id ?
          {...table,
          ...action.payload
          }: table
        )
      default:
        return statePart;
    };
  };

  export default tablesReducer;