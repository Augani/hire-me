import React from 'react'
import { TableStyled } from './styles'
import Row from '../Row'
import { TableStateReducer } from '../../utils/reducers'
import { IAction, IChild, IState, ITableActions,  } from '../../utils/types'
import { Fetch } from '../../utils/utils'
const PAGE_LENGTH = 5;

interface Props extends IState {
    tableActions: ITableActions;
    pages: number[];
}
const Table = (props: Props) => {
    const { tableActions, data, pages, currentPage } = props;
    const {checkIn, checkOut, dispatch} = tableActions;

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
                {data.length > 0 && data.map((child: IChild) => {
                    return <Row key={child.childId} checkOut={checkOut} checkIn={checkIn} data={child} />
                })}

            </tbody>

            <tfoot>
                <tr>
                    <td colSpan={6}>
                        <div>
                            Pages:
                            {pages.length > 0 && pages.map((page: number, index: number) => {
                                return <span key={page} onClick={() => dispatch({ type: 'goToPage', payload: page })} className={currentPage === page ? 'active' : ''}>{page}</span>
                            })}
                        </div>
                    </td>
                </tr>
            </tfoot>

        </TableStyled>
    )
}

export default Table
