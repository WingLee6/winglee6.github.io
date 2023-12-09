var app = angular.module('mainApp', ['ngRoute'])

// #region 
app.config(function ($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'embedded.home.html',
    }).
    when('/htmlBlogTemplate', {
        templateUrl: './pages/htmlBlog/htmlBlogTemplate.html',
    }).
    when('/cssAnswer', {
        // css答案模板
        template: '<css-answer-component current-question-obj="currentQuestionObj"></css-answer-component>',
    }).
    when('/jsAnswer', {
        // js答案模板
        template: '<js-answer-component current-question-obj="currentQuestionObj"></js-answer-component>',
    }).
    otherwise({
        redirectTo: '/home'
    });
});
// #endregion
        