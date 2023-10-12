const React = require('react');
module.exports = function NavBar() {
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
            <a href="#">Регистрация</a>
          </li>
          <li>
            <a href="#">Авторизация</a>
          </li>
        </ul>
      </ul>
    </nav>
  );
};
