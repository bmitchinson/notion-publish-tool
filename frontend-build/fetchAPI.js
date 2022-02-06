fetch('/api/hello')
    .then((r) => r.json())
    .then(({ msg }) => (document.getElementById('API_MSG').textContent = msg));
