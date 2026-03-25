async function fetch_api(){
    const url = 'https://raw.githubusercontent.com/Gustavoo1122/portfolio-formacao-javascript/refs/heads/main/data/profile.json'

    const response = await fetch(url);
    return await response.json();
}