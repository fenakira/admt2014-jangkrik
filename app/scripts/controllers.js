app
    .controller('GlobalCtrl', ['$rootScope', '$scope', function ($rootScope, $scope){
        $scope.navigations = ['Home', 'About', 'Behaviour', 'Culture', 'Gallery', 'Contact'];
        $scope.changeTitle = function(index) {
            $rootScope.title = $scope.navigations[index];
        }
    }])