var appId = '696352A33349534EC937D8CB3'
var sowaLocationId = ['13185', '12760', '12880', '12883', '13601', ]
var tilikumLocationIDs = ['13732', '13711', '13728', '13733', '13602'];
var sowaArrivals = [];
var tilikumArrivals = [];

var arrivalTimes = function(locationId, index, arr) {

    $.ajax({
        method: 'GET',
        url: 'https://developer.trimet.org/ws/V1/arrivals/json/true/streetcar/true/locIDs/' + locationId + '/appID/' + appId,
        success: function(data, message, xhr) {
            if (arr == sowaLocationId) {
                var myClass = 'sowa'
                getArrivals(data, myClass);
                //getSowaTemplate();
            } else {
                var myClass = 'tilikum'
                getArrivals(data, myClass);
            };
        }
    });
};

sowaLocationId.forEach(arrivalTimes);
tilikumLocationIDs.forEach(arrivalTimes);

function logArrayElements(element, index, array) {
      var myClass = '#sowa-template';
      postSchedule(element, index, array, myClass);
};

function logTilikumElements(element, index, array) {
      var myClass = '#tilikum-template';
      postSchedule(element, index, array, myClass);
};

function postSchedule(element, index, array, myClass) {
    var htmlId = element.locid;
    var appTemplate = $(myClass).html()
    var compiledTemplate = Handlebars.compile(appTemplate);
    var html = compiledTemplate(element);
    $('.' + htmlId).append(html);
};

function fixTime(a) {
  time = a.estimated;
  var fixTime = moment(time).format('h:mm:ss a');
  a.estimated = fixTime;
  };

getArrivals = function(data, myClass) {
  var arrivalArray = data.resultSet.arrival;

  if (myClass = "sowa") {
    arrivalArray.forEach(fixTime);
    arrivalArray.forEach(sowaArrivals.push());
  } else {
    arrivalArray.forEach(logTilikumElements);
  }
};
