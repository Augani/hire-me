import React from "react";
import { Container } from "./styles";
import Table from "./components/Table";
import { Fetch } from "./utils/utils";
import { TableStateReducer } from "./utils/reducers";
import { IChild } from "./utils/types";
const PAGE_LENGTH = 5;
function App() {
  const [state, dispatch] = React.useReducer(TableStateReducer, {
    data: [],
    currentPage: 1,
  });
  const [error, setError] = React.useState("");
  const [refresh, setRefresh] = React.useState<boolean>(false);
  const searchRef = React.createRef<HTMLInputElement>();

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

  const searchChild = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchRef.current) return;
    let search = searchRef.current.value;
    if (search) {
      dispatch({ type: "search", payload: search });
    }
  };

  const clearSearch = () => {
    if (!searchRef.current) return;
    searchRef.current.value = "";
    setRefresh(!refresh);
  };

  const checkIn = async (id: string) => {
    let time = prompt("Please provide pickup time in HH:MM format");
    if (!time || !new Date(time)) return;
    let response = await Fetch("checkInChild", id, time);
    if (response.childCheckinId) setRefresh(!refresh);
  };

  const checkOut = async (id: string) => {
    let response = await Fetch("checkOutChild", id);
    if (response[0].childCheckinId) setRefresh(!refresh);
  };

  const getNumberOfPages = (data: IChild[]) => {
    let pages: number[] = Array(Math.ceil(data.length / PAGE_LENGTH))
      .fill(0)
      .map((_, index) => 1 + index);
    return pages;
  };

  const getPageData = (data: IChild[], currentPage: number) => {
    let pageData: IChild[] = [];
    if (data.length) {
      pageData =
        PAGE_LENGTH * currentPage > data.length
          ? data.slice(PAGE_LENGTH * currentPage - PAGE_LENGTH)
          : data.slice(
            PAGE_LENGTH * currentPage - PAGE_LENGTH,
            PAGE_LENGTH * currentPage
          );
    }
    return pageData;
  };


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
              <Table
                pages={getNumberOfPages(state.data)}
                currentPage={state.currentPage}
                data={getPageData(state.data, state.currentPage)}
                tableActions={{ checkIn, checkOut, dispatch }}
              />
            ) : <div>

              {typeof (searchRef) != undefined ? <div className="error">No child found</div> : <div className="lds-dual-ring"></div>}

            </div>}
          </section>
        )}

        {error && (
          <div className="error">
            Failed to load data
            <button onClick={() => setRefresh(!refresh)}>Try again</button>
          </div>
        )}
      </main>
    </Container>
  );
}

export default App;
