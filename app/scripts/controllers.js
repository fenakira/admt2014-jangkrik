app
    .controller('HomeCtrl', ['$rootScope', function ($rootScope) {
        $rootScope.title = 'Home';
    }])
    .controller('AboutCtrl', ['$rootScope', function ($rootScope) {
        $rootScope.title = 'About';
    }])
    .controller('BehaviourCtrl', ['$rootScope', function ($rootScope) {
        $rootScope.title = 'Behaviour';
    }])
    .controller('CultureCtrl', ['$rootScope', function ($rootScope) {
        $rootScope.title = 'Culture';
    }])
    .controller('GalleryCtrl', ['$rootScope', function ($rootScope) {
        $rootScope.title = 'Gallery';
    }])
    .controller('ContactCtrl', ['$rootScope', function ($rootScope) {
        $rootScope.title = 'Contact';
    }])
    .controller('HeaderCtrl', ['$rootScope', function ($rootScope){
        $rootScope.navigations = ['Home', 'About', 'Behaviour', 'Culture', 'Gallery', 'Contact'];
    }])