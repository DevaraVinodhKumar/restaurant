
import React from 'react';

const RestaurantDetails = ({ data }) => (
  <div className="restaurant-card">
    <img src={data.image} alt={data.restaurantName} />
    <h2>{data.restaurantName}</h2>
    <p>Categories: {data.categories.join(', ')}</p>
    <p>Cost for two: ₹{data.cost_for_two}</p>
    <p>Rating: {data.rating} ⭐</p>
    <p>Reviews: {data.reviews} | Votes: {data.votes}</p>
    <p>Payment Methods: {Object.keys(data.payment).filter(key => data.payment[key]).join(', ')}</p>
  </div>
);

export default RestaurantDetails;
