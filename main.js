

let productHtml = "";

videos.forEach((video) => {
	// console.log(video)
 productHtml += `
  <div class="product-container">
  <div class="product-image-container">
	<a href="artice.html" target="_blank"><iframe class="frame-video"
    src="https://www.youtube.com/embed/${video.id}">
			</iframe></a>
</div>
  <div class="product-name limit-text-to-2-lines linkvideo">
	<div><a href="artice.html" target="_blank"></a></div>
   
  </div>
	
  <div class="product-name limit-text-to-2-lines linkvideo">
	${video.title}
   
  </div>

  <div class="product-rating-container">
	${video.views}. views
    </div>

  <div class="product-price">
	${video.duration}s
  </div>
	<div>${video.uploaded}</div>
	<div><a href="${channels.link}" target="_blank">click here</a></div>
	</div>
	
 `;
});

document.querySelector('.display').innerHTML = productHtml;

