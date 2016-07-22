var appId = '696352A33349534EC937D8CB3'
var sowaLocationId = ['13185', '12760', '12880', '12883', '12845']
var tilikumLocationIDs = ['13732', '13711', '13728', '13733', '13601', '13602'];


var arrivalTimes = function(locationId){
    console.log(locationId);
    $.ajax({
      method: 'GET',
      url: 'https://developer.trimet.org/ws/V1/arrivals/locIDs/' + locationId + '/appID/' + appId,
      success: function(data, message, xhr) {
        console.log(data);
      }
    });
  };

sowaLocationId.forEach(arrivalTimes);
tilikumLocationIDs.forEach(arrivalTimes);
