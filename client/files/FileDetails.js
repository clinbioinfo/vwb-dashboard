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

		var currentFile = Files.findOne({uuid:id});

		Session.set('currentFile', currentFile);
		// console.log("basename of current file is " + currentFile.basename);

		return currentFile;
	}
});

Template.FileDetails.events({
	'click #newAnnotationButton'(event){

		event.preventDefault();

		/* Open the New Annotation form */
		Session.set('newAnnotation', true);

		/* Close the other forms */
		Session.set('newDescription', false);
		Session.set('newComment', false);

	},
	'click #newDescriptionButton'(event){

		event.preventDefault();

		/* Open the New Description form */
		Session.set('newDescription', true);	

		/* Close the other forms */
		Session.set('newAnnotation', false);
		Session.set('newComment', false);
	},
	'click #newCommentButton'(event, template){

		event.preventDefault();

		/* Open the New Comment form */
		Session.set('newComment', true);	

		/* Close the other forms */
		Session.set('newDescription', false);
		Session.set('newAnnotation', false);

	}
});