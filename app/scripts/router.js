window.Website = new (Backbone.Router.extend({
  routes: {
    "": "home",
    "portfolio": "portfolio",
    "resume": "resume",
    "about": "about"
  },

  home: function(){
    $('.container').empty().load('templates/home.html', function(){
      console.log('in the home route')
    });
  },

  portfolio: function(){
    $('.container').empty().load('templates/portfolio.html', function(){
      console.log('in the portfolio route')
    });
  },

  resume: function(){
    $('.container').html(this.resumeView);
  },

  about: function(){
    $('.container').empty().load('templates/about.html', function(){
      console.log('in the about route')
    });
  },

  start: function(){
    Backbone.history.start();
  }

}));
