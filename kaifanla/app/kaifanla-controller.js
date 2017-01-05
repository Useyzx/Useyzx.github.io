angular.module('kaifanlaControllerModule', ['ng', 'ngRoute'])
    .controller('startCtrl', function($scope, $location) {
        console.log('starting......');
        $scope.jump = function() {
            console.log('jump......');
            //使用JS实现路由模板页间的跳转
            //window.location.href="http://localhost:63342/kaifanla2/index.html#/main";
            $location.path('/main'); //跳转到指定的路由名称所规定的“锚点”
        }
    })
    .controller('mainCtrl', function($scope, $http, $window, $document) {
        //为window对象绑定了“滚动事件”监听函数
        $($window).scroll(function() {
            var windowHeight = $($window).height();
            var scrollHeight = $($window).scrollTop();
            var documentHeight = $($document).height();
            if (windowHeight + scrollHeight == documentHeight) {
                console.log('已经滚动到文档底部，可以自动加载新的菜品了....');
            }
        });

        /*$scope.isLoading = false;
        $scope.hasMore = true;*/

        $scope.loadMore = function() { //当单击“加载更多”按钮才调用此函数
            var url = 'data/getdish-bypage.php?start=' + $scope.dishList.length;
            $http.get(url).success(function(data) {
                $scope.dishList = $scope.dishList.concat(data);
            });
        }

        $scope.dishList = []; //用于保存所有菜品数据的Model变量
        //向服务器申请，读取菜品列表
        var url = 'data/getdish-bypage.php?start=0';
        $http.get(url)
            .success(function(data) {
                //console.log( data );
                $scope.dishList = $scope.dishList.concat(data)
            });
    })
    .controller('detailCtrl', function($scope, $routeParams, $http) {
        //console.log($routeParams)  //dno
        var url = 'data/getdish-byid.php?dno=' + $routeParams.dno;
        $http.get(url).success(function(data) {
            //服务器应该返回一道菜的全部信息
            $scope.dish = data; //把得到的菜品数据绑定到model
            console.log($scope.dish);
        });
    })
