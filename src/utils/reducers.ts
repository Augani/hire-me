import { IState, IAction } from './types'

export const TableStateReducer = (state: IState, action: IAction) =>{
    const { type, payload } = action;
    switch(type){
        case 'goToPage':
            return {...state, currentPage: payload };
        case 'fillChildren':
            return {...state, data: payload};
        case 'search':
            return {...state, data: state.data.filter(child => child.name.fullName.toLowerCase().includes(payload.toLowerCase()))}
        default: 
        return state;
    }
}