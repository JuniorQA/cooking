const React = require('react');
module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <div></div>
        <link rel="stylesheet" href="/styles/style.css" />
        <script defer src="/scripts/auth.js" />
      </head>
      <body>{children}</body>
    </html>
  );
};
