var app = {};
app.date = {};

angular.module('app', []).
    config(function($routeProvider) {
        $routeProvider.
            when('/', {controller:app.Main, templateUrl: 'about.html'}).
            when('/events/:name', {controller:app.SessionList, templateUrl:'sessions.html'})./*.
            when('/edit/:projectId', {controller:EditCtrl, templateUrl:'detail.html'}).
            when('/new', {controller:CreateCtrl, templateUrl:'detail.html'}).*/
            otherwise({redirectTo:'/'});
    }).run(function($http) {
        app.loadRoot($http, function(root) {
            console.log("The configured root is " + root)
        });
    });

app.date.parse = function(dateString) {
    return Date.parseExact(dateString, 'yyyy-MM-ddTHH:mm:ssZ');
}

app.date.toString = function(date) {
    return date.toString('yyyy-MM-ddTHH:mm:ssZ');
}

app.loadRoot = function($http, cb) {
    if (!app.root) {
        var root = $('head link[rel="nofollow index"]').attr("href");
        console.log("The configured root is: " + root)

        $http.get(root).success(function(data) {
            app.root = fromObject(data);
            cb(app.root);
        });
    }
    else {
        cb(app.root);
    }
}

app.parseItem = function(item) {
    var i = {};
    i.data = item.toObject();
    i.href = item.href;
    i.links = item.links;
    return i;
}

app.LoadEvents = function($scope, $http) {
    if (!$scope.events) {
        app.loadRoot($http, function(root) {
            var eventHref = root.findLinkByRel("event collection").href;
            console.log(eventHref);
            $http.get(eventHref).success(function(data) {
                var events = _.map(fromObject(data).collection.items, app.mapEvent);
                app.events = events;
                $scope.events = events;
            });
        });
    }
}

app.Main = function($scope, $http) {
    console.log("Main called" + $scope);
}

app.SessionList = function($scope, $routeParams, $http) {
    var event = _.find(app.events, function(e) {
        console.log(e.data.name);
        return e.data.name === $routeParams.name;
    });
    if (!event) {
        app.LoadEvents($scope, $http)
    }
    $http.get(event.sessions).success(function(data) {
        var sessions = _.map(fromObject(data).collection.items, app.mapSession);
        $scope.sessions = sessions;
        $scope.name = event.data.name;
    });
}

app.mapEvent = function(item) {
    var i = app.parseItem(item)
    i.data.start = app.date.parse(item.data.start);
    i.data.end = app.date.parse(item.data.end);
    i.sessions = item.findLinkByRel("session collection").href;
    return i;
}

app.mapSession = function(item) {
    var i = app.parseItem(item)
    console.log("Convert session: " + i.data.title);
    console.log(i);
    return i;
}