exports.loginPage = (req, res) => {
  const { username } = req.session;
  if (username) {
    res.redirect('/');
  } else {
    res.render('login');
  }
};

exports.login = (req, res) => {
  const { username } = req.body;
  req.session.username = username;
  res.redirect('/');
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/login');
};
