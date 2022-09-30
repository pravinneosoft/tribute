var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "STOP A TRIBUTE";
  
  } else {
    video.pause();
    btn.innerHTML = "START A TRIBUTE";
  }
}

function bigImg(x) {
  x.style.display = "block";

}

function normalImg(x) {
  x.style.display = "none";
}

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".scroll").css("background" , "#23354f");
	  }

	  else{
		  $(".scroll").css("background" , "transparent");  	
	  }
  })
})
var divs = ["Section1", "Section2", "Section3", "Section4","Section5","Section6"];
var visibleId = null;
function show(id) {
  if(visibleId !== id) {
    visibleId = id;
  } 
  hide();
}
function hide() {
  var div, i, id;
  for(i = 0; i < divs.length; i++) {
    id = divs[i];
    div = document.getElementById(id);
    if(visibleId === id) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
} 

$('.owl-carousel').owlCarousel({
  loop: true,
  items: 1,
  dot: true,
  margin: 10,
  nav: true,
  responsiveClass: true,
  autoplay:true,
  autoplayTimeout:1000,
    autoplayHoverPause:true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    576: {
      items: 3,
      nav: false
    },
    1000: {
      items: 6,
      nav: true,
      loop: false
    }
  }
});
function toggleVideo({ currentTarget: wrapper }) {
  let video = wrapper.querySelector('.humans-video');
  let playpause = wrapper.querySelector('.humans-playvideo');
  if (video.paused) {
    video.play();
    playpause.setAttribute('hidden', '');
  } else {
    video.pause();
    playpause.removeAttribute('hidden');
  }
}

document.querySelectorAll('.humans-videowrapper')
  .forEach(wrapper => wrapper.addEventListener('click', toggleVideo));