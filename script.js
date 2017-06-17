Image = Backbone.Model.extend();
	  
Images = Backbone.Collection.extend({
	model: Image,		
	url: 'https://api.myjson.com/bins/bw805'//'https://api.myjson.com/bins/vjiyt' //'https://api.myjson.com/bins/ld0it'//'https://api.myjson.com/bins/ksq6v'		
});  
	  	  
 		  
	  
Carousel = Backbone.View.extend({
    events: {
          'click .carousel-prev': 'prev',
          'click .carousel-next': 'next'
    },
    initialize: function(options) {
            _.bindAll(this);

			var self = this;
			AllImages = new Images();
			AllImages.fetch({
			success: function() {			

				var templated = _.template($("#carousel-template1").html());

				$(self.el).html(templated(AllImages.models));
				//self.items = _.map($('.carousel-item').hide(), function(i) { return i; });				
				self.current = 0;				
				//$(self.items.slice(self.current, self.current+4)).show();
				$("#con0").show();
				}
			});          
		  
    },
    render: function() {          
          return this;
    },		
    prev: function() {		/*
		  if (this.current <= 3) return;          
		  $(this.items.slice(this.current, this.current + 4)).animate({
			 opacity: 0,
			 left: "-=500"
		  }, 1000, function() {
			  $(this).toggle();
		  });		  
          this.current = this.current - 4;                      
		  $(this.items.slice(this.current, this.current + 4)).show();
		  $(this.items.slice(this.current, this.current + 4)).css({left:-500});
		  $(this.items.slice(this.current, this.current + 4)).animate({
			 opacity: 100,
			 left: "+=500"
		  }, 1000);		  */
			if (this.current==0) return;
		  	var self = this;
			this.current--;
			$("#con" + this.current).show();
			$("#my-carousel").css({"left":"-100%"});
			$("#my-carousel").animate({
				left: "+=100%"
			}, 1000, function() {
				$("#con" + (self.current+1)).hide();
				$("#my-carousel").css({"left":"0px"});
			});

    },
    next: function() {/*
		  if (this.current>=this.items.length-4) return;          
		  $(this.items.slice(this.current, this.current + 4)).animate({
			 opacity:0,
			 left: "-=500"
		  }, 1000, function() {
			  $(this).toggle();
		  });		  
          this.current = this.current + 4;                      
		  $(this.items.slice(this.current, this.current + 4)).css({position:'relative', left:700});
		  $(this.items.slice(this.current, this.current + 4)).show();
		  $(this.items.slice(this.current, this.current + 4)).animate({
			  opacity:100,
			  position: 'absolute', 
			  left:"0"
		  }, 1000);*/		  
			var self = this;
		    this.current++;			
		  	$("#con" + this.current).show();
			$("#my-carousel").animate({
				left: "-=100%"
			}, 1000, function() {				
				//alert("#con" + (this.current-1).toString());
				$("#con" + (self.current-1)).hide(); 
				//alert("2");
				$("#my-carousel").css({"left":"0px"});
				});
      }
    });
    
	var carousel = new Carousel({el: '#my-carousel'}).render();