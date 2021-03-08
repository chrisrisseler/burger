document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.log('DOM loaded')
    }

    const devourBtns = document.querySelectorAll('.btn-devour')

    if (devourBtns) {
        devourBtns.forEach((button) => {
            button.addEventListener('click', (event) => {
                const id = event.target.getAttribute('data-id');
                //const newDevour = event.target.getAttribute('data-newdevoured');

                const newEatenState = {
                    devoured: true,
                };

                fetch(`/api/burgers/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newEatenState),
                }).then((response) => {
                    console.log(`devoured`);
                    location.reload('/');
                }).catch(err => {
                    console.log(err);
                    alert('something went wrong!');
                });
            });
        });
    }

    const createBurgerBtn = document.getElementById('create-form');

    if (createBurgerBtn) {
        createBurgerBtn.addEventListener('submit', (event) => {
            event.preventDefault();

            const newBurger = {
                burger_name: document.getElementById('ca').value.trim(),
                devoured: false,
            };

            fetch('/api/burgers', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBurger),
            }).then(() => {
                document.getElementById('ca').value = '';
                console.log('Created a new burger!');
                location.reload();
            }).catch(err => {
                console.log(err);
                alert('something went wrong!');
            });
        });
    }
});
