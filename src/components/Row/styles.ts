import styled from 'styled-components';


export const RowStyled = styled.tr`
   
   :nth-of-type(even) {
    background-color: #f3f3f3;
    }

    :last-of-type {
    border-bottom: 2px solid #009879;
    }

    :hover {
    font-weight: bold;
    color: #009879;
    }

    td {
    padding: 12px 15px;
    }
`