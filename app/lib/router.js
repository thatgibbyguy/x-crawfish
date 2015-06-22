Router.configure({
	layoutTemplate: 'appLayout',
	loadingTemplate: 'loading',
	trackPageView: true
});

// Router.route('/',{
// 	name: 'home',
// 	waitOn: function() { 
		
// 	}
// });

// Router.onAfterAction(function(){
// 	console.log('on stop');
// });

Router.route('/',function(){
	this.render('home');
});

Router.route('/reservations',{
	name:'reservations'
});

Router.route('/sorry',function(){
	this.render('sorry');
});

Router.route('/thanks',function(){
	this.render('thanks');
});