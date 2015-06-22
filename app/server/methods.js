Meteor.methods({
	addRegistrants: function(registrant,company,email,guests){
		People.insert({
			"name":registrant,
			"email":email,
			"company":company,
			"guests":guests
		},function(){
			console.log(guests);
		});
	}
});