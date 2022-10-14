import React, { useState } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import GetCategoryName from '../methods/GetCategoryName';

export const TableCategoryBodyComponent: React.FC = () => {

    const TableCategoryArray = useTypeSelector(store => store.TableCategoryReducer)
    // console.log(TableCategoryArray);
    
    return (
        <tbody id = "NoteCategoryId">
            {
                TableCategoryArray.map(item => 
                    <tr key={item.id}>
                        
                        <td>{item.name}</td>
                        <td>{item.active}</td>
                        <td>{item.archived}</td>
                    </tr>
                )
            }
        </tbody>
    )
}