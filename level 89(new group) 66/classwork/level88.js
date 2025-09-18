import React from "react";

function App() {
  const friends = ["ნიკა", "გიო", "ნია", "მარიამი", "ლუკა"];

  return (
    <ul>
      {friends.map((friend, index) => (
        <li key={index}>{friend}</li>
      ))}
    </ul>
  );
}

export default App;
