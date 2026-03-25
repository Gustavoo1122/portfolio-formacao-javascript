function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    const name = document.getElementById('profile.name')
    const job = document.getElementById('profile.job')
    const location = document.getElementById('profile.location')
    const phone = document.getElementById('profile.phone')
    const email = document.getElementById('profile.email')


    photo.src = profileData.photo;
    name.innerText = profileData.name;
    job.innerText = profileData.job;
    location.innerText = profileData.location;
    phone.innerText = profileData.phone;
    phone.href = `tel:${profileData.phone}`
    email.innerText = profileData.email;
    email.href = `mailto:${profileData.email}`
}

function updateSoftskillsInfo(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills');
    
    softSkills.innerHTML = profileData.skills.softSkills.map((skill) => `<li>${skill}</li>`).join('')

}

function updateHardskillsInfo(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')

    hardSkills.innerHTML = profileData.skills.hardSkills.map((skill) => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}
function updateLanguagesInfo(profileData) {
    const languages = document.getElementById('profile.languages');

    languages.innerHTML = profileData.languages.map((language) => `<li>${language}</li>`).join('');
}

function updatePortfolioInfo(profileData) {
    const portfolio = document.getElementById('profile.portfolio')

    portfolio.innerHTML = profileData.portfolio.map((project) => { 
        return `
            <li>
                <h3 ${project.github ? `class="github"` : ''}>${project.name}</h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
            `
        }).join('')
}

function updateJobsInfo(profiledata){
    const jobs = document.getElementById('profile.professionalExperience')

    jobs.innerHTML = profiledata.professionalExperience.map((job) => {
    console.log(jobs)
        return `
        <li>
            <span class="title">${job.name}</span>
            <p class="date">${job.period}</p>
            <p>${job.description}</p>
        </li>
        `
    }).join('')
}

(async () => {
    const profileData = await fetch_api();
    updateProfileInfo(profileData);
    updateSoftskillsInfo(profileData);
    updateHardskillsInfo(profileData);
    updateLanguagesInfo(profileData);
    updatePortfolioInfo(profileData);
    updateJobsInfo(profileData);
})()