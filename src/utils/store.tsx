import React from 'react'
import { TableStateReducer } from './reducers';
import { IChild} from './types'
import { Fetch } from './utils';


export const useFamly = () => {
    const [state, dispatch] = React.useReducer(TableStateReducer, {
        data: [],
        currentPage: 1,
      });
   const [error, setError] = React.useState<string>("");
   const [refresh, setRefresh] = React.useState<boolean>(false);

   
   React.useEffect(() => {
    const getRequest = async () => {
      setError("");
      try {
        let response = await Fetch("getChildren");
        dispatch({ type: "fillChildren", payload: response.children });
      } catch (e) {
        setError(e);
      }
    };
    getRequest();
  }, [refresh]);
   return {
      state,
      refresh,
      setRefresh,
      setError,
      error,
      childSearch(search:string){
        dispatch({ type: "search", payload: search });
      },
      goToPage(page: number){
        dispatch({ type: 'goToPage', payload: page })
      }
   }
}

type useFamlyType = ReturnType<typeof useFamly>;
const AppContext = React.createContext<useFamlyType | null>(null)
export const useFamlyContext = ()=>React.useContext(AppContext)
const ContextProvider = ({children}:{children: React.ReactNode}) => <AppContext.Provider value={useFamly()}>{children}</AppContext.Provider>;


export default ContextProvider;