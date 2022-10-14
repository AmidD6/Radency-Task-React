import React from "react";
import { TableBodyComponent } from "./TableBodyComponent";

export const TableMainComponent = () => {
    return (
    <div className="container__table">
        <table className="container__table__list">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Created</th>
                    <th>Category</th>
                    <th>Content</th>
                    <th>Dates</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <TableBodyComponent />
        </table>
    </div>  
    )
}