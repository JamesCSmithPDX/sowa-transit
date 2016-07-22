var appId = '696352A33349534EC937D8CB3'
var locationId = ['13185', '12760']

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

locationId.forEach(arrivalTimes)
