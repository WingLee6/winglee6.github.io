var app = angular.module('mainApp', ['ngRoute'])

// 路由设置
// #region 
app.config(function ($routeProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: 'embedded.home.html',
        }).
        when('/htmlBlogTemplate', {
            templateUrl: './pages/htmlBlog/htmlBlogTemplate.html',
        }).
        when('/demoTest', {
            templateUrl: './pages/htmlBlog/demoinblog.html',
        }).
        when('/cssAnswer', {
            // css答案模板
            templateUrl: './pages/htmlAnswerPage.html',
        }).
        when('/jsAnswer', {
            // js答案模板
            templateUrl: './pages/jsAnswerPage.html',
        }).
        otherwise({
            redirectTo: '/home'
        });
});
// #endregion
