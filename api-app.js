var map;
var marker;
var markers = [];
var tempArr = [
  [-122.426445, 37.776521, 'Suppenkuche', '525 Laguna St, San Francisco, CA 94102'],
  [-122.423855, 37.798635, 'The Matterhorn Swiss', '2323 Van Ness Ave, San Francisco, CA 94109'],
  [-122.392274, 37.779518, 'Saison', '178 Townsend St, San Francisco, CA 94107'],
  [-122.483262, 37.782233, 'Red Tavern', '2229 Clement St, San Francisco, CA 94121'],
  [-122.403741, 37.797579, 'Cafe Marika', '2011 J St, Sacramento, CA 95811'],
  [-122.422194, 37.799182, "Leopold's", '2400 Polk St, San Francisco, CA 94109'],
  [-122.406053, 37.796286, 'Z & Y Restaurant','655 Jackson St, San Francisco, CA 94133'],
  [-122.419193, 37.756871, 'Lolinda', '2518 Mission St, San Francisco, CA 94110'],
  [-122.402860, 37.796273,'Kusakabe', '584 Washington St, San Francisco, CA 94111']
];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: new google.maps.LatLng(37.775560, -122.418667),
  });
  generateMarkers(tempArr);
}
function generateMarkers(locations) {
  showInfo(locations);
  console.log('generateMarkers');
  var infowindow = new google.maps.InfoWindow();
  for (var j = 0; j < locations.length; j++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[j][1], locations[j][0]),
      map: map
    });
    google.maps.event.addListener(marker, 'click', (function(marker, j) {
      return function() {
        infowindow.close();
        infowindow.setContent('<p><strong>' +locations[j][2]+ '</strong></p><div>' +locations[j][3]+'</div>');
        infowindow.open(map, marker);
      }
    })(marker, j));
    markers.push(marker);
  }
}

$(document).ready(function() {
  $('#inputSearch').keyup(function(e){
    if(e.keyCode==13){
      e.preventDefault();
      console.log('enter key');
    }
  });
  $('#inputSearch').keyup(function() {
      showPlaceList();
  });

  $('#inputSearch').keyup(function() {
    showPlace();
  });
  $('.item').dblclick(function(){
    console.log($(this).html());
    $('#inputSearch').val($(this).html());
  });
  function showPlaceList() {
      $('li').each(function() {
        if ($(this).html().toLowerCase().indexOf($('#inputSearch').val()) > -1) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
  }
  function showPlace() {
    var subArr = [];
    if($("#inputSearch").val()==""){
      subArr.length = 0;
      deleteMarkers();
      generateMarkers(tempArr);
    }else{
      subArr.length = 0;
      for (var i = 0; i < tempArr.length; i++) {
        if (tempArr[i][2].toLowerCase().indexOf($("#inputSearch").val()) > -1) {
          subArr.push(tempArr[i]);
        }
      }
      deleteMarkers();
      generateMarkers(subArr);
    }
  }
});
function showInfo(loc) {
  var ul = document.getElementById("itemList");
  var li = ul.getElementsByTagName("li");
  var arrLi = [];

  for (var m = 0; m < li.length; m++) {
    if (li[m].style.display != 'none') {
      arrLi.push(li[m]);
    }
  }
  for (var n = 0; n < loc.length; n++) {
    arrLi[n].onclick = (function(nn) {
      return function() {
        google.maps.event.trigger(markers[nn], 'click');
      }
    })(n);
  }
  arrLi.length = 0;
}
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function clearMarkers() {
  setMapOnAll(null);
}

function deleteMarkers() {
  clearMarkers();
  markers = [];
}
