const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

//fetch returns a promise
fetch(endpoint)
    .then(rawData => rawData.json())
    .then(data => cities.push(...data));
// ... is the spread operator

findMatches = (wordToMatch, cities) => {
    return cities.filter(place => {
        //figure out if the city or state matches what was searched
        const regex = new RegExp(wordToMatch, "gi"); //g means global and i means insensitive
        //check if the city or state matches
        return place.city.match(regex) || place.state.match(regex);
    });
}

numberWithCommas = (x) => {
    //add commas to the population
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

displayMatches = (e) => {
    const matchArray = findMatches(e.target.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(e.target.value, "gi");
        const cityName = place.city.replace(regex, `<span class="hl">${e.target.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${e.target.value}</span>`);

        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
        </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);