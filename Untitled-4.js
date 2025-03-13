// Son pour le bouton
const clickSound = new Howl({
    src: ['sounds/click.mp3']
});

document.getElementById('explore').addEventListener('click', () => {
    clickSound.play();
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

// Charger les projets depuis data.json
fetch('data.json')
    .then(response => response.json())
    .then(projects => {
        const projectList = document.getElementById('project-list');
        projects.forEach(project => {
            const div = document.createElement('div');
            div.innerHTML = `<a href="${project.link}" target="_blank">${project.title}</a>`;
            const projectSound = new Howl({ src: [project.sound] });
            div.addEventListener('mouseover', () => projectSound.play());
            projectList.appendChild(div);
        });
    })
    .catch(error => console.error('Erreur:', error));