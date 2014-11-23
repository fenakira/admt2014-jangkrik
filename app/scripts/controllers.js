app
    .controller('HomeCtrl', ['$scope', function ($scope) {
        $scope.title = 'Home';
    }])
    .controller('AboutCtrl', ['$scope', function ($scope) {
        $scope.title = 'About';
    }])
    .controller('BehaviourCtrl', ['$scope', function ($scope) {
        $scope.title = 'Behaviour';
    }])
    .controller('HeaderCtrl', ['$scope', function ($scope){
        $scope.navigations = ['Home', 'About', 'Behaviour', 'Gallery', 'Contact'];
    }])