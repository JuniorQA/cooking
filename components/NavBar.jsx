const React = require('react');

module.exports = function NavBar({ user }) {
  return (
    <nav>
      <ul className="main-menu flex">
        <li className="menu-container">
          {user ? (
            <>
              <a href="#" className="menu-item">
                Меню
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Избранное</a>
                </li>
                <li>
                  <a href="#">Рецепты</a>
                </li>
              </ul>
            </>
          ) : (
            <a href="#" className="menu-item">
              Добро пожаловать
            </a>
          )}
        </li>
        <ul className="main-menu flex">
          <li className="menu-container">
            {user ? (
              <a href="/api/auth/logout">Выход</a>
            ) : (
              <>
                <a href="#">Аккаунт</a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/auth/sign-up">Регистрация</a>
                  </li>
                  <li>
                    <a href="/auth/sign-in">Авторизация</a>
                  </li>
                </ul>
              </>
            )}
          </li>
        </ul>
      </ul>
    </nav>
  );
};
