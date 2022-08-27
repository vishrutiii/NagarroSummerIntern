const display = (req, res) => {
  const url = req.url;
  if (url === '/profile') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Profile</h1>');
    return res.end();
  }
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Home</h1>');
    return res.end();
  }

  res.setHeader('Content-Type', 'text/plain');
  res.write('Page Not Found');
  res.end();
}

module.exports = display;
