Template.FileDetails.onCreated(function (){

	var self = this;
	self.autorun(function(){
		self.subscribe('files');
	});

	Session.set('newAnnotation', false);
	Session.set('newDescription', false);
	Session.set('newComment', false);
});

Template.FileDetails.helpers({
	file: () => {
		var id = FlowRouter.getParam('id');
		// alert(id);
		return Files.findOne({uuid:id});
	}
});

Template.FileDetails.events({
	'click #newAnnotationButton': function (){

		/* Open the New Annotation form */
		Session.set('newAnnotation', true);

		/* Close the other forms */
		Session.set('newDescription', false);
		Session.set('newComment', false);

	},
	'click #newDescriptionButton': function (){

		/* Open the New Description form */
		Session.set('newDescription', true);	

		/* Close the other forms */
		Session.set('newAnnotation', false);
		Session.set('newComment', false);
	},
	'click #newCommentButton': function (){

		/* Open the New Comment form */
		Session.set('newComment', true);	

		/* Close the other forms */
		Session.set('newDescription', false);
		Session.set('newAnnotation', false);

	}
});