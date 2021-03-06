import React  from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import columns, {defaultColumnNames} from './FlowColumns'

import { setSort } from '../../ducks/flows'

FlowTableHead.propTypes = {
    setSort: PropTypes.func.isRequired,
    sortDesc: PropTypes.bool.isRequired,
    sortColumn: PropTypes.string,
    displayColumnNames: PropTypes.array,
}

export function getDisplayColumns(displayColumnNames) {
    let displayColumns = []
    if (typeof displayColumnNames == "undefined") {
        return columns
    }
    for (const column of columns) {
        if (displayColumnNames.includes(column.name.slice(0,-6).toLowerCase())) {
            displayColumns.push(column)
        }
    }
    return displayColumns
}

export function FlowTableHead({ sortColumn, sortDesc, setSort, displayColumnNames}) {
    const sortType = sortDesc ? 'sort-desc' : 'sort-asc'

    const displayColumns = getDisplayColumns(displayColumnNames)

    return (
        <tr>
            {displayColumns.map(Column => (
                <th className={classnames(Column.headerClass, sortColumn === Column.name && sortType)}
                    key={Column.name}
                    onClick={() => setSort(Column.name, Column.name !== sortColumn ? false : !sortDesc)}>
                    {Column.headerName}
                </th>
            ))}
        </tr>
    )
}

export default connect(
    state => ({
        sortDesc: state.flows.sort.desc,
        sortColumn: state.flows.sort.column,
        displayColumnNames: state.options["web_columns"] ? state.options["web_columns"].value : defaultColumnNames,
    }),
    {
        setSort
    }
)(FlowTableHead)
