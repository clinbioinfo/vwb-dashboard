import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Template.NewComment.onCreated(function (){

	var self = this;
	self.autorun(function(){
		self.subscribe('files');
	})
});

Template.NewComment.helpers({
});

Template.FileDetails.events({
	
	'submit #newCommentSubmitButton': function (event){

		console.log("New Comment Submit Button clicked on");

		const comment_text = event.target.comment.value;
		const date = new Date();
		const author = this.userId

		check(comment_text, String)

		if (! Meteor.userId()){
			throw new Meteor.Error('not-authorized');
		}
		
		event.target.comment.value = '';

		/*
			Add logic for submitting this new comment
			Need to include the following attributes:
			1. user first name
			2. user last name
			3. date comment made
			4. comment text
		*/

		/* Make sure to change the state so that the new comment form will be closed. */
		Session.set('newComment', false);
	},
	'click #newCommentCancelButton': function (){

		console.log("New Comment Cancel Button clicked on");
		/* Make sure to change the state so that the new comment form will be closed. */
		Session.set('newComment', false);
	}
});