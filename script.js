var app = angular.module('calculator',[]);
app.controller('calController',['$scope',function($scope) {
    $scope.lumen_options = [375,600,900,1125,1600];
    $scope.current_lumen = 600;
    $scope.hourCost = 4;
    $scope.hoursPerDay = 13;
    $scope.total_days = 365;
    $scope.watt = {};
    $scope.price = {};
    $scope.conversion = {
        inc:0.0625,
        hal:0.0450,
        cfl:0.0146,
        led:0.0125
    };
    $scope.calc = function() {
        if ($scope.hoursPerDay > 24){$scope.hoursPerDay = 24;}
        if ($scope.hoursPerDay < 1){$scope.hoursPerDay = 1;}
        for(c in $scope.conversion) {
            $scope.watt[c] = ($scope.current_lumen * $scope.conversion[c]).toFixed(1);
            $scope.price[c] = ($scope.watt[c] * $scope.hoursPerDay * $scope.hourCost / 100).toFixed(2);
        }
    };
    $scope.calc();
}]);