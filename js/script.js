// JavaScript Document


function getBaseUrl() {
    var re = new RegExp(/^.*\//);
    return re.exec(window.location.href);
}

///////////////////
// TURBORUSS Map //
///////////////////
function initMap() {

  const map = new google.maps.Map(document.getElementById("map"), {
    mapId: "923884f072e6e724",
    center: { lat: 47.3849725, lng: 8.5353119 },
    zoom: 12,
	streetViewControl: false,
	mapTypeControl: false,
  });
  
  const baseURL = getBaseUrl();	
  const iconBase = "/img/map_icons/";
	
  const icons = {
    production: {
      icon: baseURL + iconBase + "production.png",
    },
    seller: {
      icon: baseURL + iconBase + "seller.png",
    },
	seller_distributor: {
      icon: baseURL + iconBase + "seller-distributor.png",
    },
    distributor: {
      icon: baseURL + iconBase + "distributor.png",
    },
  };
	
  const features = [/*
    {
      position: new google.maps.LatLng(47.417494, 8.5573861),
      type: "production",
	  name: "Brauerei Oerlikon",
	  scaledSize: new google.maps.Size(10, 10),
    },
	{
      position: new google.maps.LatLng(47.4116522, 8.5412326),
      type: "seller",
	  name: "Drinks of the World Oerlikon",
	  scaledSize: new google.maps.Size(10, 10),
    },*/
    {
      position: new google.maps.LatLng(47.3697419, 8.5423319),
      type: "distributor",
	  name: "Karl der Grosse",
    },
	{
      position: new google.maps.LatLng(47.3791612, 8.5423464),
      type: "distributor",
	  name: "Kleine Freiheit",
    },/*
	{
      position: new google.maps.LatLng(47.3762496, 8.5447811),
      type: "distributor",
	  name: "bQm",
	  scaledSize: new google.maps.Size(10, 10),
    },
	{
      position: new google.maps.LatLng(47.4981776, 8.7292063),
      type: "distributor",
	  name: "Zum hinteren Hecht",
	  scaledSize: new google.maps.Size(10, 10),
    },*/
  ];

  // Create markers
  for (let i = 0; i < features.length; i++) {
	  
    let infowindow = new google.maps.InfoWindow({
      content: features[i].name,
    });
	
    let marker = new google.maps.Marker({
      position: features[i].position,
	  icon: {
   		url: icons[features[i].type].icon,
	    size: new google.maps.Size(50, 50),
	    scaledSize: new google.maps.Size(50, 50),
	    anchor: new google.maps.Point(0, 0)
	  },
      map: map,
    });
	
	marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: true,
      });
    });
  }
}


/////////////////////
// Scroll smoothly //
/////////////////////
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



//////////////////
// Modal Window //
//////////////////

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



