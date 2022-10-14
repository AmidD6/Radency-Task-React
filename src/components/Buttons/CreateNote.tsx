import React from "react"
import { useDispatch } from "react-redux";
import { isCreatedColumn } from '../../store/reducers/TableMainReducer';
import type {} from 'redux-thunk/extend-redux';

export const CreateNote = () => {
    const dispatch = useDispatch()
    return (
        <div className="create__note">
            <button className="create__note__button" id="buttonId" onClick={() => dispatch(isCreatedColumn())}>Create Note</button>
        </div>
    )
}