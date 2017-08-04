Template.NewAnnotation.onCreated(function (){

	var self = this;
	self.autorun(function(){
		self.subscribe('files');
	})
});

Template.NewAnnotation.helpers({
});

Template.NewAnnotation.events({
	'click #newAnnotationSubmitButton': function (){
		
		console.log("New Annotation Submit Button clicked on");
		
		Session.set('newAnnotation', false);
	},
	'click #newAnnotationCancelButton': function (){
		
		console.log("New Annotation Cancel Button clicked on");
		
		Session.set('newAnnotation', false);
	}

});