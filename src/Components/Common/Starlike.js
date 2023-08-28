import React, { useState } from "react";

const initialData = [
  { id: 1, title: "Item 1", liked: false, likeCount: 0 },
  // Add more items as needed
];

const StarCounterArray = () => {
  const [data, setData] = useState(initialData);

  const handleStarClick = (itemId) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === itemId
          ? {
              ...item,
              liked: !item.liked,
              likeCount: item.liked ? item.likeCount - 1 : item.likeCount + 1,
            }
          : item
      )
    );
  };

  return (
    <div>
      {data.map((item) => (
        <button
          className="d-flex align-items-center"
          style={{
            height: "30px",
            padding: "7px",
            borderRadius: "2px",
            background: "#F5F5F5",
            border: "none",
          }}
          key={item.id}
        >
          <div onClick={() => handleStarClick(item.id)}>
            {item.liked ? (
              <i className="fa-solid fa-star" style={{ color: "#f5c721" }}></i>
            ) : (
              <i className="fa-regular fa-star" style={{ color: "#000" }}></i>
            )}
          </div>
          &nbsp;&nbsp;&nbsp;
          <span> {item.likeCount}</span>
        </button>
      ))}
    </div>
  );
};

export default StarCounterArray;
