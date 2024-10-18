import React from 'react'

function Contacts() {
  return (
    <div className="address-container">
      <h1 className='title-page'>Contacts</h1>
      <ul className="contact-list">
        <li>
          <span role="img" aria-label="phone">📞</span> 
          +7 (705) 000 00 00
        </li>
        <li>
          <span role="img" aria-label="email">✉️</span> 
          ahmetiassay@gmail.com
        </li>
        <li>
          <span role="img" aria-label="twitter">🐦</span> 
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </li>
        <li>
          <span role="img" aria-label="facebook">📘</span> 
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </li>
        <li>
          <span role="img" aria-label="skype">💬</span> 
          Skype: ahmetov
        </li>
      </ul>
    </div>
  );
}

export default Contacts;