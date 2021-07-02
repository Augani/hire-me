import styled from 'styled-components';


export const Container  = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: relative;

    .title {
        position: absolute;
        top: 1rem;
        left: 1rem;
        font-size: 3rem;
        font-weight: bold;
        line-height: 1.2rem;

    }


    main { 
        width: 50%;
        @media screen and (max-width:1200px) {
            width:100%
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .table {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            
            .lds-dual-ring {
            display: inline-block;
            width: 4.5rem;
            height: 4.5rem;
            }
        .lds-dual-ring:after {
            content: " ";
            display: block;
            width: 4rem;
            height: 4rem;
            margin: 1rem;
            border-radius: 50%;
            border: 0.4rem solid #000;
            border-color: #000 transparent #000 transparent;
            animation: lds-dual-ring 1.2s linear infinite;
            }
        @keyframes lds-dual-ring {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        }

        
    }

    .controls {
        width: 100%;
        margin-bottom: 1rem;

        form {
            display: flex;
            flex-direction:row;
            width: 100%;
            justify-content: flex-end;
            align-items: center;

            .form-control {
                height: 2.5rem;
                width: 10rem;
                margin-right: 1rem;

                input {
                    height: 100%;
                    width: 100%;
                    outline: none;
                    border-radius: 0.2rem;
                    border: none;
                    font-size: 1.4rem;
                    padding-left:0.4rem;
                    background-color: #eee;
                }
            }

            button {
                background-color: #000;
                color: #fff;
                border: none;
                border-radius: 0.3rem;
                width: 7rem;
                height: 2.5rem;
                transition: all 0.2s ease;
                cursor: pointer;
                margin-right:1rem;

                :nth-of-type(2){
                    background-color: #787877;
                }

                :hover {
                    transform: scale(1.1);
                }
            }
        }
    }
`