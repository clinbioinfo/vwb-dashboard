import {Meteor} from 'meteor/meteor';

Template.NewComment.onCreated(function (){

	var self = this;
	self.autorun(function(){
		self.subscribe('files');
	})
});

Template.NewComment.helpers({});

Template.NewComment.events({
	
	'submit #new_comment_form'(event){
            
		event.preventDefault();

		console.log("New Comment Submit Button clicked on");

		const target = event.target;

		const comment_text = target.new_comment_textarea.value;

		/*
			Add logic for submitting this new comment
			Need to include the following attributes:
			1. user first name
			2. user last name
			3. date comment made
			4. comment text
		*/

		if ((comment_text !== undefined) && (comment_text !== '')){

			console.log(comment_text);

			var currentFile = Session.get('currentFile');


			Meteor.call('insert.new.comment', comment_text, currentFile);
		}
		else {
			console.log("The comment text was not defined");
		}

		target.new_comment_textarea.value = '';

		/* Make sure to change the state so that the new comment form will be closed. */
		Session.set('newComment', false);
	},
	'click #newCommentCancelButton'(){

		console.log("New Comment Cancel Button clicked on");
		/* Make sure to change the state so that the new comment form will be closed. */
		Session.set('newComment', false);
	}
});