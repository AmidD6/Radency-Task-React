import React from "react";
import { TableCategoryBodyComponent } from "./TableCategoryBodyComponent";
export const TableCategoryComponent = () => {
    return (
        <div className="container__table">
            <table className="container__table__list">
                <thead>
                    <tr>
                        <th>Note Category</th>
                        <th>Active</th>
                        <th>Archived</th>
                    </tr>
                </thead>
                <TableCategoryBodyComponent />
            </table>
        </div>
    )
}