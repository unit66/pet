import React from 'react';

export default function Footer() {
  return (
    <footer>
      <h3>Unit66 Pet-project. { new Date().getFullYear() } (c)</h3>
      <div className="animatedLine">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </footer>
  );
}
