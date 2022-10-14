export interface TableMainState {
    id: number;
    name: string;
    created: string;
    category: number;
    content: string;
    dates: any[] | null;
    isCreated: boolean;
    isChange: boolean
}


export enum TableMainActionTypes {
    ADD_COLUMN = 'ADD_COLUMN',
    IS_CREATED_COLUMN = 'IS_CREATED_COLUMN',
    CHANGE_CULUMN = 'CHANGE_CULUMN',
    DELETE_CULUMN = 'DELETE_CULUMN'
}
interface AddColumnType {
    type: TableMainActionTypes.ADD_COLUMN;
    payload: object | null;
}
interface ChangeColumnType {
    type: TableMainActionTypes.CHANGE_CULUMN;
    payload: any[];
}
interface isCreatedColumnType {
    type: TableMainActionTypes.IS_CREATED_COLUMN;
    payload: boolean;
}
interface DeleteColumnType {
    type: TableMainActionTypes.DELETE_CULUMN;
    payload: number;
}

export type TableMainAction =
AddColumnType | ChangeColumnType | DeleteColumnType | isCreatedColumnType