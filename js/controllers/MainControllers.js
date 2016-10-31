app.controller('MainController', function($scope, $http) { 
$scope.fetchArticles = function() {
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    $http.jsonp(url).success(function(data){
        $scope.results = data.results;
    });
    
}
$scope.fetchArticles();

}]);