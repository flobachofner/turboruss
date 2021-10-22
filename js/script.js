// JavaScript Document


// Add Map
function initMap() {
  new google.maps.Map(document.getElementById("map"), {
    mapId: "923884f072e6e724",
    center: { lat: 47.3849725, lng: 8.5353119 },
    zoom: 12,
	streetViewControl: false,
	mapTypeControl: false,
  });
	
  new google.maps.Marker({
	  position: { lat: 47.3849725, lng: 8.5353119 },
	  map,
	  title: "Coming soon!",
	  icon: {
		  url: "img/favicon.svg",
		  scaledSize: new google.maps.Size(40, 40)
	  },
	  animation: google.maps.Animation.DROP
  });
	
}


// Scroll smoothly
$(function() {
	$('a[href*=\\#]:not([href=\\#])').on('click', function() {
		var target = $(this.hash);
		target = target.length ? target : $('[name=]' + this.hash.substr(1) + ']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		}
	});
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var close = document.getElementById("closeModal");

// When the user clicks on the button, open the modal 
window.onload = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



