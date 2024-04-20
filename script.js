const poems = [
    { 
        title: 'The tree speaks', 
        description: 'I think this is the first poem I have ever written, in 2016 or something. It also got published in our school magazine!', 
        link: 'poem1.html'
    },
    { 
        title: 'Chaos', 
        description: 'I think I wrote this in 2018, when I realised I could actually write out my feelinggs poetically and they did not need to be perfect! I actually wrote a lot of poems like this one but unfortunately I lost them..', 
        link: 'poem2.html'
    },
    { 
        title: 'Clown', 
        description: 'I wrote this poem in 2019, when I was trying get rid of my people pleasing habits.. Poems like these helped me undertstand myself better!', 
        link: 'poem3.html'
    },
    { 
        title: 'Halloween!', 
        description: 'I wrote this poem in 2022, you guessed it right, October, and this was when I ditched the personal-feelings-filled-poems concept and started writing about fictional scenarios again! It might be all over the place but it definitely boosted my confidence..', 
        link: 'poem4.html'
    },
    { 
        title: 'killer', 
        description: 'TRIGGER WARNING: CONTAINS VIOLENCE. I wrote this poem while I almost dozed off in class to keep me awake, and it is definitely the poem I am most proud of! This was written in 2023, and I experimented a little with this poem by using stronger imagery!'
    , 
        link: 'poem5.html'
    },
];

function displayPoemButtons() {
    const poemList = document.getElementById('poem-list');
    poemList.innerHTML = ''; // Clear existing content

    poems.forEach(poem => {
        const poemItem = document.createElement('li');
        const poemButton = document.createElement('button');
        poemButton.textContent = poem.title;
        poemButton.classList.add('poem-button');
        poemButton.addEventListener('click', () => {
            window.location.href = poem.link;
        });

        const poemDescription = document.createElement('p');
        poemDescription.textContent = poem.description;

        poemItem.appendChild(poemButton);
        poemItem.appendChild(poemDescription);
        poemList.appendChild(poemItem);
    });
}

// Call displayPoemButtons function when the page loads
window.onload = () => {
    displayPoemButtons();

    // Button styles
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.classList.add('button-style'); // Apply button style class
    });
};