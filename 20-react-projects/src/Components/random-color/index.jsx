import React, { useEffect } from 'react';
import { useState } from 'react';

export default function RandomColor() {
  const [tyeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(255);
    const g = randomColorUtility(255);
    const b = randomColorUtility(255);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (tyeOfColor === 'rgb') handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [tyeOfColor]);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
      <button
        onClick={
          tyeOfColor === 'hex'
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontSize: '60px',
          marginTop: '50px',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <h3>{tyeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
