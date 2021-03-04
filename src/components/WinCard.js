import React from 'react';

function WinCard() {
  return (
    <div className="winning">
      <h1>
        <i
          class="em em-raised_hands"
          aria-role="presentation"
          aria-label="PERSON RAISING BOTH HANDS IN CELEBRATION"
        ></i>
        You Won!
        <i
          class="em em-tada"
          aria-role="presentation"
          aria-label="PARTY POPPER"
        ></i>
      </h1>
      <a href="/">RESTART</a>
    </div>
  );
}

export default WinCard;
