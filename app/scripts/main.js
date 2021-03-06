require.config({
    paths: {
        App: 'app',
        jquery: '../components/jquery/jquery',
        underscore: '../components/underscore-amd/underscore',
        backbone: '../components/backbone-amd/backbone',
        // Had issue getting correct one w/bower so suffix'ed dir with .custom (so bower doesn't overwrite it!)
        // and git clone https://github.com/jeromegn/Backbone.localStorage.git
        backboneLocalStorage: '../components/backbone.localStorage.custom/backbone.localStorage',
        bootstrap: 'vendor/bootstrap',
        text: '../components/requirejs-text/text',
        templates: '../templates'
    },
    shim: {
        bootstrap: {
            deps: ['jquery', 'underscore'],
            exports: 'jquery'
        }
    }
});

require([
    'backbone',
    'bootstrap',
    'App',
    'collections/tasks',
    'collections/categories',
    'models/task',
    'models/category',
    'views/app',
    'views/nav',
    'views/sidebar',
    'views/content',
    'routers/router'
],
function(
    Backbone,
    Bootsrap,
    App,
    Tasks,
    Categories,
    Task,
    Category,
    AppView,
    NavBarView,
    SidebarView,
    ContentView,
    AppRouter
) {

    window._app = new App(
        Tasks,
        Categories,
        Task,
        Category,
        AppView,
        NavBarView,
        SidebarView,
        ContentView,
        AppRouter
    );
    // Do localStorage.clear() in console and pass in true to seed demo data
    window._app.seed(false);
    window._app.start();
});
