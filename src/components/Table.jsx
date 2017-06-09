import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { sortBy } from 'lodash'

import SortButton from './SortButton'

class Table extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
  }

  state = {
    sortKey: 'NONE',
    isSortReversed: false,
  }

  handleSort = sortKey => {
    const isSortReversed = this.state.sortKey === sortKey && !this.state.isSortReversed
    this.setState({ sortKey, isSortReversed })
  }

  SORTS = {
    NONE: list => list,
    ID: list => sortBy(list, 'id'),
    NAME: list => sortBy(list, 'name'),
    STATUS: list => sortBy(list, 'status'),
    NOTE: list => sortBy(list, 'note'),
    ACTIVEPROJECTS: list => sortBy(list, 'activeProjects').reverse(),
  }

  render() {
    const { list } = this.props
    const { sortKey, isSortReversed } = this.state
    let sortedList = this.SORTS[sortKey](list)
    sortedList = isSortReversed ? sortedList.reverse() : sortedList
    return (
      <table className='ui very basic table'>
        <thead>
          <tr>
            <th>
              <SortButton
                sortKey={'ID'}
                activeSortKey={sortKey}
                onSort={this.handleSort}
                isReversed={isSortReversed}
              >
                Id
              </SortButton>
            </th>
            <th>
              <SortButton
                sortKey={'NAME'}
                activeSortKey={sortKey}
                onSort={this.handleSort}
                isReversed={isSortReversed}
              >
                Name
              </SortButton>
            </th>
            <th>
              <SortButton
                sortKey={'STATUS'}
                activeSortKey={sortKey}
                onSort={this.handleSort}
                isReversed={isSortReversed}
              >
                Status
              </SortButton>
            </th>
            <th>
              <SortButton
                sortKey={'NOTE'}
                activeSortKey={sortKey}
                onSort={this.handleSort}
                isReversed={isSortReversed}
              >
                Note
              </SortButton>
            </th>
            <th>
              <SortButton
                sortKey={'ACTIVEPROJECTS'}
                activeSortKey={sortKey}
                onSort={this.handleSort}
                isReversed={isSortReversed}
              >
                Active Projects
              </SortButton>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedList.map(item =>
            (<tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.status}</td>
              <td>{item.note}</td>
              <td>{item.activeProjects}</td>
            </tr>),
          )}
        </tbody>
      </table>
    )
  }
}

export default Table
