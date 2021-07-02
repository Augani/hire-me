import React from 'react'
import { IChild } from '../../utils/types';

interface Props{
    data: IChild;
    checkIn: (id: string)=>void;
    checkOut: (id: string)=>void;
}

const Row = (props: Props) => {
    const {data, checkIn, checkOut} = props
    const { name, childId, institutionId, groupId, checkedIn } = data;
    return (
        <tr>
            <td>{childId}</td>
            <td>{institutionId}</td>
            <td>{groupId}</td>
            <td>{name.fullName}</td>
            <td>{checkedIn? 'Yes': 'No'}</td>
            <td>
                {!checkedIn && <button onClick={()=>checkIn(childId)}>Check In</button>}
                {checkedIn && <button onClick={()=>checkOut(childId)}>Check Out</button>}
            </td>
            
        </tr>
    )
}

export default Row;
