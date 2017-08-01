Template.NewFile.events({
	'click .fa-close': function (){
		Session.set('newFile', false);
	}
});