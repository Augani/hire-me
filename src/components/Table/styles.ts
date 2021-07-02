import styled from 'styled-components';


export const TableStyled = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: left;
  

    td, th{
    border-top: 1px solid #ECF0F1;
    padding: 10px;
    }
  
    td{
    border-left: 1px solid #ECF0F1;
    border-right: 1px solid #ECF0F1;
    }
  
    th{
    background-color: #4ECDC4;
    
    }
  
    tr:nth-of-type(even) td{
    background-color: lighten(#4ECDC4, 35%);
    }

    tfoot {
        width: 100%;

        div {
            display: flex;
            flex-direction: row;
            align-items: center;

            span {
            font-size: 1rem;
            color: #4ECDC4;
            cursor: pointer;
            margin: 0.5rem;
           
                
            }

            span.active {
                    color: #313e54;
                }
        }
        

        
    }

`