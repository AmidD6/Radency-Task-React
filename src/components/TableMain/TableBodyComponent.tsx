import React, { useRef, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { addColumn, deleteColumn } from '../../store/reducers/TableMainReducer';
import GetCategoryName from '../methods/GetCategoryName';
import RegexpDate from '../methods/RegexpDate';
import SetDataColumn from '../methods/SetDataColumn';

// import type {} from 'redux-thunk/extend-redux';

export const TableBodyComponent : React.FC = () => {
    const TableMainArray = useTypeSelector<any[]>(store => store.TableMainReducer);
    const dispatch = useDispatch();
    const date = new Date();
    let dateFull = date.getFullYear() + '-' + Number(date.getMonth()+ 1) + '-' + date.getDate();

    // const [AddDatas, SetAddDatas] = useState({
    //     name: '',
    //     created: RegexpDate(dateFull),
    //     category: 1,
    //     content: '',
    //     dates: '',
    // })
 
    
    return (
        <tbody id = "NoteModelId">
            {
                TableMainArray.map(item => 
                    item.isCreated === false
                    ?
                    <tr key={item.id} id={item.id}>
                        <td>{item.name}</td>
                        <td>{RegexpDate(item.created)}</td>
                        <td>
                            {
                                item.category
                                // GetCategoryName(item.category)
                            }
                        </td>
                        <td>{item.content}</td>
                        <td>
                            {
                                item.dates === null
                                ? 'Not date'
                                : RegexpDate(item.dates[0]) + ', ' + RegexpDate(item.dates[item.dates.length - 1])
                            }
                        </td>
                        <td><i className='fa-sharp fa-solid fa-pen'></i></td>
                        <td><i className='fa-solid fa-circle-down'></i></td>
                        <td><i className='fa-solid fa-trash' onClick={() => dispatch(deleteColumn(item.id))}></i></td>
                    </tr>
                :
                <tr key={item.id} id={item.id}>
                        <td>
                            <input type="text"/>
                        </td>
                        <td>
                            <p>{RegexpDate(dateFull)}</p>
                        </td>
                        <td>
                            <select>
                                <option value="1">Task</option>
                                <option value="2">Rabdom Thought</option>
                            </select>
                        </td>
                        <td>
                            <textarea rows={4} cols={20} style={{resize: 'none'}}></textarea>
                        </td>
                        <td>
                            <input type="date" />
                        </td>
                        <td>
                            <i className="fa-solid fa-circle-check" onClick={() => SetDataColumn(item.id)}></i>
                        </td>
                        <td>
                            <i className="fa-solid fa-arrows-rotate"></i>
                        </td>
                        <td>
                            <i className="fa-sharp fa-solid fa-circle-xmark"></i>
                        </td>
                    </tr>
                )
            }
        </tbody>
    )
}