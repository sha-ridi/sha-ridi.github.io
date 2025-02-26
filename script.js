function hideAllSections() {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
}

function hideAllDetails() {
    document.querySelectorAll('.job-details, .skills-details, .languages-details, .media-details').forEach(details => {
        details.style.display = 'none';
    });
}

function scrollToElement(element, offset = -250) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    });
}
function showSection(id) {
    const section = document.getElementById(id);
    if (section.style.display === 'block') {
        section.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        hideAllSections();
        section.style.display = 'block';
        scrollToElement(section); 
    }
    hideAllDetails();
}

function toggleDetails(detailsId) {
    const detailsElement = document.getElementById(detailsId);
    if (detailsElement.style.display === 'block') {
        detailsElement.style.display = 'none';
        window.scrollTo({ top: 100, behavior: 'smooth' });
    } else {
        hideAllDetails();
        detailsElement.style.display = 'block';
        scrollToElement(detailsElement); 
    }
}

function showJobDetails(jobTitle, jobDetails, detailsId) {
    const jobDetailsElement = document.getElementById(detailsId);
    if (jobDetailsElement.style.display === 'block') {
        jobDetailsElement.style.display = 'none';
        window.scrollTo({ top: 100, behavior: 'smooth' });
    } else {
        hideAllDetails();
        jobDetailsElement.innerHTML = `<h2>${jobTitle}</h2><p>${jobDetails}</p>`;
        jobDetailsElement.style.display = 'block';
        scrollToElement(jobDetailsElement); 
    }
}
function hoverAnimation(element) {
    element.classList.add('hover');
    setTimeout(() => {
        element.classList.remove('hover');
        setTimeout(() => {
            element.classList.add('hover');
            setTimeout(() => {
                element.classList.remove('hover');
            }, 200); 
        }, 200); 
    }, 200); 
}

function playHoverAnimation(element) {
    if (element) {
        hoverAnimation(element);
    }
}

function showSection(id) {
    const section = document.getElementById(id);
    if (section.style.display === 'block') {
        section.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        hideAllSections();
        section.style.display = 'block';
        scrollToElement(section); 
        playHoverAnimation(section.querySelector('.item'));
    }
    hideAllDetails();
}

window.addEventListener('load', () => {
    playHoverAnimation(document.querySelector('.icon, .item'));
});