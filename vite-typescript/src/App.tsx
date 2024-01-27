import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <button
      onClick={async () => {
        console.log(await puppeteer.h1());
      }}
    >
      h1
    </button>
  </React.StrictMode>
);
