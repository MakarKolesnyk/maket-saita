document.getElementById('search-button').addEventListener('click', function() {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const people = document.getElementById('people').value;

    if (from && to && date && people) {
        alert(`З ${from} до ${to} на ${date} для ${people} людей є більше 5 варіантів подорожей.`);
    } else {
        alert('Будь ласка, заповніть всі поля.');
    }
});
