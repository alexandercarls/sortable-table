import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const SortButton = ({
  sortKey,
  activeSortKey,
  onSort,
  isReversed,
  children,
}) => {
  const buttonClass = classNames(
    'ui basic button',
    { positive: sortKey === activeSortKey && !isReversed },
    { negative: sortKey === activeSortKey && isReversed },
  )

  const handleClick = () => {
    onSort(sortKey)
  }

  return (
    <button
      onClick={handleClick}
      className={buttonClass}
    >
      {children}
    </button>
  )
}

SortButton.propTypes = {
  sortKey: PropTypes.string.isRequired,
  activeSortKey: PropTypes.string.isRequired,
  isReversed: PropTypes.bool.isRequired,
  onSort: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default SortButton
