import { apiKey } from "./apikey.js";

const userInput = document.querySelector('input');
const btn = document.querySelector('button');
const display = document.querySelector('.body');
let artists = '';
let list = [];
let outputHTML = "";

async function suggestedVideos() {
    const url = 'https://youtube-v2.p.rapidapi.com/trending/?lang=en&country=ng&maxResults=10section=Now';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '9f19ba93edmsh3842520d8fda9aep1b2254jsn13509d24fd0d',
            'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'
        }
    };
    
     try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);
        const data = result.videos;
        // console.log(data);

        data.map((video) =>{
            // console.log(video);
         const videoList = video;
        console.log(videoList)
         const linkVideo =`https://www.youtube.com/embed/${videoList.video_id}`;
         const title = videoList.title.length > 30? videoList.title.slice(0, 30) + "...." : videoList.title;
         const image = videoList.thumbnails[0].url;
         const view = videoList.number_of_views;
         const minLength = videoList.video_length;
        //  console.log(playList);
        //  console.log(title);
        //  console.log(image);
         outputHTML += `<div class="container">
    <div class="container-frame">
      <iframe src="${linkVideo}" class="frame-size"></iframe>
    </div>
    <div class="flex">
    <div class="container-image">
      <img src="${image}" class="photo"/>
    </div>
    <div class="title-detail">
      <p class="title">${title}</p>
    </div>
    </div>
    <div class="view-detail flex">
    <p>${minLength}s</p>
    <p class="view">${view}.views</p>
  </div>
  <a href="details.html?title=${title}&image=${image}&video=${linkVideo}" target="_blank">View Details</a>
 </div>`;
      }).join('');
    } catch (error) {
        console.error(error);
    }   
    display.innerHTML = outputHTML;
    
};

 suggestedVideos();
 
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
          console.log(list)
        display.innerHTML = list.map((item, index) => {
          const { title, id, thumbnail, channel } = item;
          const linkVideo = `https://www.youtube.com/embed/${id}`;
          const { thumbnail: urlImage, views } = item;
          const { thumbnail: image, name: channelName } = channel;
          return `
  <div class="container">
    <div class="container-frame">
      <iframe src="${linkVideo}" class="frame-size"></iframe>
    </div>
    <div class="container-image">
      <img src="${image}" class="photo"/>
    </div>
    <div class="title-detail">
      <p class="title">${title}</p>
    </div>
    <div class="view-detail">
    <p class="view">${views}.views</p>
  </div>
 <a href="details.html?title=${title}&name=${channelName}&views=${views}&image=${image}&video=${linkVideo}" target="_blank">View Details</a>
 </div>`;
      });
    } catch (error) {
        console.error(error);
    }
}

btn.addEventListener('click', getData);