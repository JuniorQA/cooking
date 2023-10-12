const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.post('/sign-up', async (req, res) => {
    console.log('======');
  let user;
  try {
    const { login, email, password } = req.body;
    if (login.trim() && email.trim() && password.trim()) {
      user = await User.findOne({ where: { email } });
      if (!user) {
        const hash = await bcrypt.hash(password, 10);
        user = await User.create({ login, email, password: hash });
        req.session.user_id = user.id;
      } else {
        res.json({ message: 'Такой емайл уже занЯТ!!' });
        return;
      }
    } else {
      res.json({ message: 'Заполните все опля!!' });
      return;
    }

    res.json({ message: 'success' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/logout', (req, res) => {
  // удаление сессии на сервере
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }

    res
      .clearCookie('user_sid') // серверное удаление куки по имени
      .redirect('/');
  });
});

router.post('/sign-in', async (req, res) => {
  let user;
  try {
    const { email, password } = req.body;
    if (email.trim() && password.trim()) {
      user = await User.findOne({ where: { email } });
      if (user && (await bcrypt.compare(password, user.password))) {
        req.session.user_id = user.id;
        res.json({ message: 'success' });
        return;
      } else {
        res.json({ message: 'Неправильный логин или пароль' });
        return;
      }
    } else {
      res.json({ message: 'Заполните все опля!!' });
      return;
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
