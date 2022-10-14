import { TableMainAction } from "../../types/TableMain"


export const initialState = [
    {id: 1, name: 'Task', active: 2, archived: 0},
    {id: 2, name: 'Rabdom Thought', active: 2, archived: 0},
]

export default (state = initialState, action : TableMainAction) => {
    switch (action.type) {
        // case "ADD_COLUMN":
        //     return {...state, action}
        // case "CHANGE_CULUMN":
        //     return {...state, action}
        // case "DELETE_CULUMN":
        //         return {...state, action}
        default:
            return state
    }
}