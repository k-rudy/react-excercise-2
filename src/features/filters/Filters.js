import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Filters.module.css'
import { sortFilterChanged, queryFilterChanged } from './filtersSlice'

const Filters = () => {
  const { query, sort } = useSelector(state => state.filters)
  const dispatch = useDispatch();

  const handleSortChanged = (e) => {
    const sort = parseInt(e.target.value);
    dispatch(sortFilterChanged(sort));
  };

  const handleQueryChanged = (e) => {
    dispatch(queryFilterChanged(e.target.value));
  };

  return (
    <div className={styles.filters}>
      <div className={styles.queryContainer}>
        <input type="text" value={query} placeholder="Search Posts" onChange={handleQueryChanged} />
      </div>
      <div className={styles.sortContainer}>
        <label htmlFor="sort">Sort</label>
        <select id="sort" value={sort} onChange={handleSortChanged}>
          <option value="1">Ascending</option>
          <option value="-1">Descending</option>
        </select>
      </div>
    </div>
  )
}

export default Filters
