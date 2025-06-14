fetch('header.html')
    .then(response => response.text())
    .then(data => {
        const header = document.querySelector('header');
        if (header)
            header.innerHTML = data;
    });
