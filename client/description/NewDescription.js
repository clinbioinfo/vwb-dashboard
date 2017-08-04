Template.NewDescription.onCreated(function (){

	var self = this;
	self.autorun(function(){
		self.subscribe('files');
	})
});

Template.NewDescription.helpers({
});

Template.NewDescription.events({
	'submit #newDescriptionSubmitButton': function (event){
		
		console.log("New Description Submit Button clicked on");

		event.preventDefault();

		const desc_text = event.target.desc_text.value;
		
		event.target.desc_text.value = '';

		console.log("Need to add this description " + desc_text + " to the file");


		Session.set('newDescription', false);
	},
	'click #newDescriptionCancelButton': function (){
		
		console.log("New Description Cancel Button clicked on");	

		Session.set('newDescription', false);
	}
});