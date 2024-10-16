
import React, { useState } from 'react';
import data from './public/data.json'; 
import RestaurantDetails from './RestaurantDetails';
import './App.css'; 

const App = () => {
  const [restaurants, setRestaurants] = useState(data); 
  const [filteredData, setFilteredData] = useState(data);

  const filterByRating = (rating) => {
    const filtered = data.filter((restaurant) => restaurant.rating >= rating);
    setFilteredData(filtered);
  };

  const filterByPayment = (method) => {
    if (method === 'all') {
      setFilteredData(data);
    } else {
      const filtered = data.filter((restaurant) => restaurant.payment[method]);
      setFilteredData(filtered);
    }
  };

  const sortByCost = (order) => {
    const sorted = [...filteredData].sort((a, b) =>
      order === 'asc' ? a.cost_for_two - b.cost_for_two : b.cost_for_two - a.cost_for_two
    );
    setFilteredData(sorted);
  };

  return (
    <div className="app-container">
      <h1>Restaurant List</h1>

      <div className="filters">
        <div>
          <h3>Filter by Rating:</h3>
          <button onClick={() => filterByRating(1)}>1 Star</button>
          <button onClick={() => filterByRating(2)}>2 Stars</button>
          <button onClick={() => filterByRating(3)}>3 Stars</button>
          <button onClick={() => filterByRating(4)}>4 Stars</button>
        </div>

        <div>
          <h3>Filter by Payment Method:</h3>
          <button onClick={() => filterByPayment('cash')}>Cash</button>
          <button onClick={() => filterByPayment('card')}>Card</button>
          <button onClick={() => filterByPayment('upi')}>UPI</button>
          <button onClick={() => filterByPayment('all')}>All</button>
        </div>

        <div>
          <h3>Sort by Cost for Two:</h3>
          <button onClick={() => sortByCost('asc')}>Low to High</button>
          <button onClick={() => sortByCost('desc')}>High to Low</button>
        </div>
      </div>

      <div className="restaurant-list">
        {filteredData.map((restaurant) => (
          <RestaurantDetails key={restaurant.id} data={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default App;
