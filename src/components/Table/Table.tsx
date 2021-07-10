import React, { useMemo } from 'react'
import { TableStyled } from './styles'
import Row from '../Row'
import { IChild, IState, ITableActions,  } from '../../utils/types'
import { useFamlyContext } from '../../utils/store'
import { Fetch } from '../../utils/utils'
const PAGE_LENGTH = 5;

interface Props extends IState {
    tableActions: ITableActions;
    pages: number[];
}
const Table = () => {
    const {state, setRefresh, refresh, goToPage} = useFamlyContext()!;
    const {data, currentPage} = state;

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
    
      const getNumberOfPages = useMemo(() => {
        let pages: number[] = Array(Math.ceil(data.length / PAGE_LENGTH))
          .fill(0)
          .map((_, index) => 1 + index);
        return pages}, [data.length])
      
    
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

      const pageData = getPageData(data, currentPage)

    return (
        <TableStyled>
            <thead>
                <tr>
                    <th>Child Id</th>
                    <th>Institution Id</th>
                    <th>Group Id</th>
                    <th>Name</th>
                    <th>Checked In</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {pageData.length > 0 && pageData.map((child: IChild) => {
                    return <Row key={child.childId} checkOut={checkOut} checkIn={checkIn} data={child} />
                })}

            </tbody>

            <tfoot>
                <tr>
                    <td colSpan={6}>
                        <div>
                            Pages:
                            {getNumberOfPages.length > 0 && getNumberOfPages.map((page: number, index: number) => {
                                return <span key={page} onClick={() => goToPage(page)} className={currentPage === page ? 'active' : ''}>{page}</span>
                            })}
                        </div>
                    </td>
                </tr>
            </tfoot>

        </TableStyled>
    )
}

export default Table
