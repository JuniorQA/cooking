const React = require('react');

module.exports = function NavBar({ user }) {
  return (
    <nav>
      <ul className="main-menu flex">
        <li>
          <a href="#">Меню</a>
        </li>
        <ul className="dropdown-menu">
          <li>
            <a href="#">Избранное</a>
          </li>
          <li>
            <a href="#">Рецепты</a>
          </li>
        </ul>
        <li>
          <a href="#">Аккаунт</a>
        </li>
        <ul className="dropdown-menu">
          <li>
            <a href="/auth/sign-up">Регистрация</a>
          </li>
          <li>
            <a href="/auth/sign-in">Авторизация</a>
          </li>
        </ul>
      </ul>
    </nav>
  );
};
