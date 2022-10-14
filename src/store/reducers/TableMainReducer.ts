import { Dispatch } from "redux"
import { TableMainAction, TableMainActionTypes, TableMainState } from "../../types/TableMain"

export const initialState : TableMainState[] = [
        {id: 1, name: 'Shoping list', created: '2022-09-23', category: 1, content: 'Tomatoes, bread', dates: null, isCreated: false, isChange: false},
        {id: 2, name: 'New Feature', created: '2022-08-12', category: 2, content: 'Implement new value', dates: null, isCreated: false, isChange: false},
        {id: 3, name: 'Books', created: '2022-06-07', category: 1, content: 'The Lean Startup', dates: null, isCreated: false, isChange: false},
        {id: 4, name: 'Tools', created: '2022-10-09', category: 1, content: 'The Lean Startup', dates: ['2022-10-09', '2022-10-20'], isCreated: false, isChange: false}
    ]



export default (state = initialState, action : TableMainAction) => {
    switch (action.type) {
        case TableMainActionTypes.ADD_COLUMN:
            return [
                ...state,
                {
                    id: action.payload,
                    name: action.payload,
                    created: action.payload,
                    category: action.payload,
                    content: action.payload,
                    dates: action.payload,
                    isCreated: false,
                    isChange: false
                }
                
            ]
        case TableMainActionTypes.IS_CREATED_COLUMN :
            return [
                ...state,
                {
                    id: state.length ? state[state.length - 1].id + 1 : 1,
                    name: '', 
                    created: '', 
                    category: 1, 
                    content: '', 
                    dates: null,
                    isCreated: action.payload,
                    isChange: false
                }
                
            ]
        // case TableMainActionTypes.CHANGE_CULUMN:
        //     return {...state, action}
        case TableMainActionTypes.DELETE_CULUMN:
                return state.filter(item => item.id !== action.payload)
        default:
            return state
    }
}

export const addColumn = (obj: TableMainState) => {
    return (dispatch: Dispatch<TableMainAction>) => {
        return dispatch({type: TableMainActionTypes.ADD_COLUMN, payload: obj})
    }
}


export const deleteColumn = (id: number) => {
    return (dispatch: Dispatch<TableMainAction>) => {
        return dispatch({type: TableMainActionTypes.DELETE_CULUMN, payload: id})
    }
}

export const isCreatedColumn = () => {
    return (dispatch: Dispatch<TableMainAction>) => {
        return dispatch({type: TableMainActionTypes.IS_CREATED_COLUMN, payload: true})
    }
}