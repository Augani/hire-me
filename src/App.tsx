import React, { useCallback } from "react";
import { Container } from "./styles";
import Table from "./components/Table";
import { Fetch } from "./utils/utils";
import { IChild } from "./utils/types";
import { useFamlyContext } from "./utils/store";
const PAGE_LENGTH = 5;
function App() {
  const { state, refresh, setRefresh, error, setError, childSearch }  = useFamlyContext()!
  const searchRef = React.createRef<HTMLInputElement>();

 

  const searchChild = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchRef.current) return;
    let search = searchRef.current.value;
    if (search) {
      childSearch(search)
    }
  };

  const clearSearch = () => {
    if (!searchRef.current) return;
    searchRef.current.value = "";
    setRefresh(!refresh);
  };

  const getNewData = useCallback(()=>{
    setRefresh(!refresh)
  }, [refresh])

  


  return (
    <Container>
      <h1 className="title">Famly</h1>
      <main>
        <div className="controls">
          <form onSubmit={searchChild}>
            <div className="form-control">
              <input ref={searchRef} placeholder="Child name" />
            </div>
            <button type="submit">Search</button>
            <button onClick={clearSearch} type="button">
              Clear search
            </button>
          </form>
        </div>

        {!error && (
          <section className="table">
            {state.data.length > 0 ? (
              <Table />
            ) : <div>
              {typeof (searchRef) != undefined ? <div className="error">No child found</div> : <div className="lds-dual-ring"></div>}
            </div>}
          </section>
        )}

        {error && (
          <div className="error">
            Failed to load data
            <button onClick={getNewData}>Try again</button>
          </div>
        )}
      </main>
    </Container>
  );
}

export default App;
