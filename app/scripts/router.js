window.Website = new (Backbone.Router.extend({
  routes: {
    "": "home",
    "portfolio": "portfolio",
    "resume": "resume",
    "about": "about"
  },

  home: function(){
    $('#page-main').empty().load('templates/home.html', function(){
      console.log('in the home route')
    });
  },

  portfolio: function(){
    $('#page-main').empty().load('templates/portfolio.html', function(){
      console.log('in the portfolio route')
    });
  },

  resume: function(){
    $('#page-main').html(this.resumeView);
  },

  about: function(){
    $('#page-main').empty().load('templates/about.html', function(){
      console.log('in the about route')
    });
  },

  start: function(){
    Backbone.history.start();
  }

}));
