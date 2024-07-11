import { apiKey } from "./apikey.js";

const userInput = document.querySelector('input');
const btn = document.querySelector('button');
const display = document.querySelector('.display');
let artists = '';
let list = [];

// Start Search
export async function getData() {
    artists = userInput.value;
    const url = `https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${artists}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': `${apiKey}`,
            'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        list = result.videos;

        display.innerHTML = list.map((item, index) => {
          const { title, id, thumbnail, channel } = item;
          const linkVideo = `https://www.youtube.com/embed/${id}`;
          const { thumbnail: urlImage, views } = item;
          const { thumbnail: image, name: channelName } = channel;
          return `
              <div>
                  <iframe src="${linkVideo}" width="300" heigth="200"></iframe>
                  <h3>${title}</h3>
                  <img src="${urlImage}" alt="${title}">
                  <p>${channelName}</p>
                  <p>${views} views</p>
                  <a href="details.html?title=${title}&name=${channelName}&views=${views}&urlImage=${urlImage}&video=${linkVideo}" target="_blank">View Details</a>
              </div>`;
      }).join('');
    } catch (error) {
        console.error(error);
    }
}

btn.addEventListener('click', getData);