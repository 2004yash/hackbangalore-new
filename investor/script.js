function addCard(topic, oneLineDesc) {
    const main = document.querySelector('.cards');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');

    const heading = document.createElement('h2');
    heading.textContent = topic;

    const description = document.createElement('p');
    description.textContent = oneLineDesc;

    cardBodyDiv.appendChild(heading);
    cardBodyDiv.appendChild(description);

    cardDiv.appendChild(cardBodyDiv);

    main.appendChild(cardDiv);
}
