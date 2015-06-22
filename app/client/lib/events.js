Template.appLayout.rendered = function () {
};

Template.home.rendered = function(){
	
};

Template.home.events({
	'click #reservation-btn': function (e) {
		e.preventDefault();
		$('#home-selection').addClass('off');
		setTimeout(function(){
			window.location.href = '/reservations';
		},250);
	}
});

Template.reservations.rendered = function () {
	setTimeout(function(){
		if( ! this.rendered) {
	        $('#container').addClass('black flex-wrap-right');
			$('.crawfish').addClass('on');
			$('#reservation').removeClass('off');
	    }
	},250);

	guestsInfo = [];
};

Template.reservations.events({
	'click #submit .btn': function (e,tmpl) {
		var registrantName = $('#name').val();
		var registrantCompany = $('#company').val();
		var userEmail = $('#email').val(),
			re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			validEmail = re.test(userEmail);
		var guests = $('.guests');

		if ($('#guest').val() != '') {
			guestsInfo.push($('#guest').val());
		};

		if(registrantName == ''){
			$('#name').addClass('required');
		}
		else if(registrantCompany == ''){
			$('#company').addClass('required');
		}
		else if(userEmail == '' || validEmail == false){
			('#email').addClass('required');
		}
		else{
			$('#name,#company,#email').removeClass('required');
			
			console.log(guestsInfo);
			Meteor.call('addRegistrants', registrantName,registrantCompany,userEmail,guestsInfo,function(e,r){
				if(e){
					alert('error');
				}
				else {
					window.location.href = '/thanks';
				}
			});
		}

	},
	'click #add-more': function (e,tmpl) {
		var registrantName = $('#name').val();
		var registrantCompany = $('#company').val();
		var userEmail = $('#email').val(),
			re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			validEmail = re.test(userEmail);

		var guests = $('#guest').val();

		var guestInput = '<label class="margin-bottom"> <span><input type="text" id="guest1" class="guests"> </span>Additional Guest</label>'

		if(registrantName == ''){
			$('#name').addClass('required');
		}

		else if(registrantCompany == ''){
			$('#company').addClass('required');
		}

		else if(userEmail == '' || validEmail == false){
			$('#email').addClass('required');
		}

		else if(guests == ''){
			$('#guest').addClass('required');
		}

		else{
			guestsInfo.push(guests);
			
			$('#name,#company,#email,#guest').removeClass('required');
			
			$('#guest').val('');
			
			if(guestsInfo.length <= 1){
				$('#guest-number').removeClass('off');
			}
			else{
				$('#guest-number').addClass('flash');
				setTimeout(function(){
					$('#guest-number').removeClass('flash');
				},500);
				$('#guest-number span').text(String(guestsInfo.length));
			}
		}
	}

});

Template.thanks.rendered = function () {
	setTimeout(function(){
		if( ! this.rendered) {
	        $('.crawfish').addClass('on');
			// $('#reservation').removeClass('off');
	        this.rendered = true;
	    }
	},250);
	setTimeout(function(){
		$('#thanks').removeClass('off');
	},500);
};

Template.sorry.rendered = function () {
	setTimeout(function(){
		if( ! this.rendered) {
	        $('#container').addClass('black flex-wrap-right');
			$('.crawfish').addClass('on');
			$('#reservation').removeClass('off');
	    }
	},250);
};