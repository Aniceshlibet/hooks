import React from 'react';

function Filter(props) {
  return (
    <div className="filter">
      <h2>Filter</h2>
      <form>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={props.filterTitle} onChange={props.handleFilter} />
        <label htmlFor="rating">Rating:</label>
        <input type="number" id="rating" value={props.filterRating} onChange={props.handleFilter} />
        <button type="submit">Filter</button>
      </form>
    </div>
  );
}

export default Filter;
