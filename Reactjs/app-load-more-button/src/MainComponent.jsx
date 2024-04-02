import React, { useState } from 'react';


const MyComponent = () => {
  // State to track the number of items loaded
  const [itemsLoaded, setItemsLoaded] = useState(5);

  // Dummy data
  const allItems = [
    // Your array of items here
    // Example: { id: 1, name: 'Item 1' }
  ];

  // Function to handle loading more items
  const loadMoreItems = () => {
    setItemsLoaded(prev => prev + 5); // Increase by 5 or any other desired number
  };

  return (
    <div className="my-component">
      {/* Display the items */}
      {allItems.slice(0, itemsLoaded).map(item => (
        <div key={item.id} className="item">{item.name}</div>
      ))}

      {/* Render the Load More button */}
      {itemsLoaded < allItems.length && (
        <button onClick={loadMoreItems} className="load-more-btn">Load More</button>
      )}
    </div>
  );
};

export default MyComponent;
