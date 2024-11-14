// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { database } from './firebase'; // Import the database from firebase.js
import { ref, set, onValue } from 'firebase/database';

function App() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  useEffect(() => {
    const countsRef = ref(database, 'counts');
    onValue(countsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setCounts(data); 
      }
    });
  }, []);


  const handleClick = (index) => {
    const updatedCounts = [...counts];
    updatedCounts[index] += 1;
    set(ref(database, 'counts'), updatedCounts);
    setCounts(updatedCounts);
  };

  const groups = [
    { name: '天鹰', animal: 'tianying.png', color: 'skyblue', spirit: '天高地广，无畏飞翔。' },
    { name: '凌鹰', animal: 'lingying.png', color: 'lightgreen', spirit: '凌空飞翔，勇攀高峰。' },
    { name: '群鹰', animal: 'qunying.jpeg', color: 'Gold', spirit: '群策群力，飞向未来。' },
    { name: '锐鹰', animal: 'ruiying.png', color: 'purple', spirit: '锐不可当，势不可挡。' }
  ];

  return (
    <div className="app">
      <header className="header">
        <img src="logo.png" alt="Logo" className="logo" />
      </header>

      <div className="grid">
        {groups.map((group, index) => (
          <div key={index} className="box" style={{ borderColor: group.color }}>
            <img src={group.animal} alt={group.name} className="animal-image" />
            <p>{group.name}</p>
            <p>助力: {counts[index]}</p>
            <p className="spirit">{group.spirit}</p>
            <button onClick={() => handleClick(index)}>Click Me</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
