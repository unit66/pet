import React from 'react';

export default function Contacts() {
  return (
    <section className="contacts">
      <p>You can <span className="teal">contact</span> me via:</p>
      <div className="list">
        <a href="https://github.com/unit66" target="_black">
          <img src="https://image.flaticon.com/icons/svg/25/25471.svg" alt="GitHub" title="GitHub"/>
        </a>
        <a href="https://t.me/dirty_senchaz" target="_black">
          <img src="https://image.flaticon.com/icons/svg/906/906377.svg" alt="Telegram" title="Telegram"/>
        </a>
        <a href="mailto:qrt.unit66@gmail.com" target="_black">
          <img src="https://image.flaticon.com/icons/svg/732/732200.svg" alt="Email" title="Email"/>
        </a>
      </div>
    </section>
  );
}
