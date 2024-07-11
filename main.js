import { apiKey } from "./apikey.js";

// import { videos } from "./object.js";
// import { channels } from "./object.js";
const userInput = document.querySelector('input');
const btn = document.querySelector('button');

let outputHTML = "";
let artises = '';
let linkHTML = '';
let list = "";

 const videoPlaer = [];
// Start Search
 export async function getData() {
// console.log(artises)
	artises  = userInput.value
	const url = `https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${artises}`;
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
	// console.log(result);
	// console.log()
	 list = result.videos;
	 list = list.map((item) => {
    // console.log(item)
    const title = item.title;
     const linkVideo = item.id;
    const urlImage = item.thumbnail;
    const image = item.channel.thumbnail;
    const name = item.channel.name;
    const view = item.views;
  outputHTML += `<div>
  <a href="art/item" target="_blank" class="linkplayer">
  <img width="150" height="200"
   src="${urlImage}"/>
   </a>
 <div>
  <img src="${image}" class="image">
  <h3 class="title">${title}</h3>
  <p class="name">${name}</p>
  <p class="views">${view}.views</p>
  </div>
  </div>`

   })
} catch (error) {
	console.error(error);
}
document.querySelector('.display').innerHTML = outputHTML
//  console.log(linkHTML);
//  document.querySelector('.urlvideo').innerHTML = linkHTML;
}

 

// linkButton = document.querySelector('.linkPlayer');
btn.addEventListener('click',getData)
// linkButton.addEventListener('click', );
console.log(list)

// End Search
// const linkButton = document.querySelector('.linkvideo');
// linkButton.addEventListener('click', myVideo)


//  function myVideo(videosId) {
// 	let  linkVideo ;
// 	videos.forEach((video) => {
// 		linkVideo = video;

// 		if(videosId === video.id)  {

        

// 		}
// 		console.log(linkVideo)
// 	})
// };



//  let videoPlayer = [];

// let productHtml = "";

// videos.forEach((video) => {
// 	// console.log(video)
//  productHtml += `
//   <div class="product-container">
//   <div class="product-image-container">
// 	<a href="artice.html" target="_blank"><iframe class="frame-video"
//     src="https://www.youtube.com/embed/${video.id}">
// 			</iframe></a>
// </div>
//   <div class="product-name limit-text-to-2-lines linkvideo">
// 	<div><button class="js-button" data-video-id="${video.id}">click here</button></div>
   
//   </div>
	
//   <div class="product-name limit-text-to-2-lines linkvideo">
// 	${video.title}
   
//   </div>

//   <div class="product-rating-container">
// 	${video.views}. views
//     </div>

//   <div class="product-price">
// 	${video.duration}s
//   </div>
// 	<div>${video.uploaded}</div>
// 	<div><a href="${channels.link}" target="_blank">click here</a></div>
// 	</div>
	
//  `;
// });

// document.querySelector('.display').innerHTML = productHtml;

// document.querySelectorAll('.js-button')
// .forEach((button) => {
//   button.addEventListener('click', () => {
//  const videoId = button.dataset.videoId;

//   let articeId;

//  videoPlayer.forEach((artice)=>{
//   if (videoId === artice.videoId){
//       articeId = artice;
//   }
//  });
//  if (articeId){
//   articeId.videoId = articeId.videoId;
//  } else {
//   videoPlayer.push({
//     videoId :videoId,
//     player:1
//   })
//  }
//   console.log(videoPlayer)
//   })
// })

