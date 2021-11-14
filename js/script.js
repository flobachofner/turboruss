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
    center: { lat: 47.3749725, lng: 8.5343119 },
    zoom: 13,
	streetViewControl: false,
	mapTypeControl: false,
  });
  
  const baseURL = getBaseUrl();	
  const iconBase = "/img/map_icons/";
	
  const icons = {
    production: {
	  name: "Produktion",
      icon: baseURL + iconBase + "production.png",
      legend: baseURL + iconBase + "icon-production.png",
    },
    seller: {
	  name: "Verkauf",
      icon: baseURL + iconBase + "seller.png",
	  legend: baseURL + iconBase + "icon-seller.png",
    },
	distributor: {
	  name: "Ausschank",
      icon: baseURL + iconBase + "distributor.png",
	  legend: baseURL + iconBase + "icon-distributor.png",
    },
	seller_distributor: {
	  name: "Beides",
      icon: baseURL + iconBase + "seller-distributor.png",
	  legend: baseURL + iconBase + "icon-seller-distributor.png",
    },
    
  };
	
  const features = [
    {
      position: new google.maps.LatLng(47.418643451116985, 8.558690905968334),
      type: "production",
	  name: "Brauerei Oerlikon",
	  text: "Die Brauerei Oerlikon ist die Geburtsstätte von Igor TURBORUSS. This is where the magic happens...<br><br>Hier kannst du jederzeit auch Flaschen in grossen Mengen direkt ab Lager kaufen!",
	  link: "https://brauerei-oerlikon.ch"
    },/*
	{
      position: new google.maps.LatLng(47.4116522, 8.5412326),
      type: "seller",
	  name: "Drinks of the World Oerlikon",
	  scaledSize: new google.maps.Size(10, 10),
    },
    {
      position: new google.maps.LatLng(47.369608, 8.5442944),
      type: "seller_distributor",
	  name: "Karl der Grosse",
    },*/
	{
      position: new google.maps.LatLng(47.379170731925306, 8.544534830022993),
      type: "distributor",
	  name: "Kleine Freiheit",
	  text: "Frustriert ab deiner Statistik Vorlesung (15:00 - 17:00, KOH-B-10)? Ab heute kannst du vom Vorlesungssaal direkt in die Kleine Freiheit spazieren, um bei einer heissen Tasse Igor TURBORUSS deine akademischen Sorgen für ein Stündchen auszublenden. <br><br> Mit diesem ersten Zürcher Verkaufsstandort gilt die Igor TURBORUSS Saison als offiziell eröffnet.",
	  link: "https://kleinefreiheit.ch/"
    },
	{
      position: new google.maps.LatLng(47.480003085165364, 8.300914432537645),
      type: "distributor",
	  name: "Werkk Kulturlokal Baden",
	  text: "Du magst Metal und Igor TURBORUSS? <br>Dann bist du jeden Montag im Werkk am Metal Monday genau richtig!",
	  link: "https://www.metalmonday.ch/"
    },
	{
      position: new google.maps.LatLng(47.37609990248077, 8.54672287389409),
      type: "seller_distributor",
	  name: "bQm",
	  text: "Bist du nach einer seeeeehr langen Uni-Woche (Mo-Do, 5 VL, 3 davon besucht) komplett ausgelaugt und brauchst etwas wohlig warmes um das Wochenende einzuläuten? <br><br> Wir verschaffen Abhilfe! Ab heute ist der Igor TURBORUSS im bQm unter der ETH Polyterrasse an der Bar erhältlich! <br><br> Zudem: Im bQm kannst du auch gleich für deinen nächsten WG-Abend [1, 2, ..., n] Flaschen Igor TURBORUSS erwerben :)",
	  link: "https://www.bqm-bar.ch/de/"
    },/*
	{
      position: new google.maps.LatLng(47.37274151062592, 8.543627342936118),
      type: "seller",
	  name: "Berg und Tal",
	  text: "Suchst du lokale Spezialitäten<br>Oder neue kulinarische Raritäten<br>Ist das Lädeli Berg und Tal<br>Logischerweise die erste Wahl<br><br>Und dort kannst du nun ganz neu<br>Kaufen unser Wintergebräu<br>Nein, es ist nicht Kafi mit Schuss<br>Sondern Igor TURBORUSS!",
	  link: "https://www.berg-tal.ch/"
    },/*
	{
      position: new google.maps.LatLng(47.4981776, 8.7292063),
      type: "distributor",
	  name: "Zum hinteren Hecht",
	  scaledSize: new google.maps.Size(10, 10),
    },*/
  ];

  // Create markers
  for (let i = 0; i < features.length; i++) {
	  
	let contentString =
	'<div class="popup-wrapper">' +
    '<h1 class="popup-header">'+ features[i].name +'</h1>' +
    '<div class="popup-content"><p>' + features[i].text +
    '</p><a class="popup-link" target="_blank" href='+ features[i].link +'>Weitere Infos</a> ' +
    "</div>" +
    "</div>";
	  
    let infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
	
    let marker = new google.maps.Marker({
      position: features[i].position,
	  icon: {
   		url: icons[features[i].type].icon,
	    size: new google.maps.Size(128, 128),
	    scaledSize: new google.maps.Size(128, 128),
		origin: new google.maps.Point(0, 0),
	    anchor: new google.maps.Point(64, 95)
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
	
	
  // Add Legend
  const legend = document.getElementById("legend");

  for (const key in icons) {
    const type = icons[key];
    const name = type.name;
    const icon = type.legend;
    const div = document.createElement("div");
	  	  
    div.innerHTML = '<img src="' + icon + '" > ' + name;
    legend.appendChild(div);
  }

  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legend);
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



