var appId = '696352A33349534EC937D8CB3'
var sowaLocationId = ['13185', '12760', '12880', '12883', '12845']
var tilikumLocationIDs = ['13732', '13711', '13728', '13733', '13601', '13602'];


var arrivalTimes = function(locationId, index, arr) {

    $.ajax({
        method: 'GET',
        url: 'https://developer.trimet.org/ws/V1/arrivals/json/true/streetcar/true/locIDs/' + locationId + '/appID/' + appId,
        success: function(data, message, xhr) {
            if (arr == sowaLocationId) {
                getArrivals(data);
                //getSowaTemplate();
            } else {
                console.log("Tilikum");
            };
        }
    });
};

sowaLocationId.forEach(arrivalTimes);
tilikumLocationIDs.forEach(arrivalTimes);

function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
};

getArrivals = function(data){
  var arrivalArray = data.resultSet.arrival;
  arrivalArray.forEach(logArrayElements);
};
