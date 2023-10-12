const React = require('react');
const NavBar = require('./NavBar');

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/style.css" />
        <script defer src="/scripts/auth.js" />
        <script defer src="/scripts/deleteAndFavorite.js" />
      </head>
      <body>{children}</body>
    </html>
  );
};
