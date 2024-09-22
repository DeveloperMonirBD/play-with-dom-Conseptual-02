document.getElementById('submit-btn').addEventListener('click', function () {
    const inputValue = document.getElementById('text-area').value;
    const container = document.getElementById('review');
    // const li = document.createElement('li');
    const p = document.createElement('p');
    p.innerText = inputValue;
    p.style.fontSize = '40px';
    p.style.color = 'green';
    container.appendChild(p);
    document.getElementById('text-area').value = '';
});
