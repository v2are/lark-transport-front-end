import React, { useState } from 'react';

const initialData = [
  { id: 1, liked: false },
];

const Heartlike = () => {
  const [data, setData] = useState(initialData);

  const handleLikeClick = (itemId) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, liked: !item.liked } : item
      )
    );
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <div onClick={() => handleLikeClick(item.id)}>
            {item.liked ? '❤️' : '🤍'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Heartlike;
