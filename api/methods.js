import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';


Meteor.methods({
	'insert.new.comment'(comment_text, currentFile){

		if (! Meteor.userId()){
			throw new Meteor.Error('not-authorized');
		}

		check(comment_text, String)

		const date     = new Date();
		const owner    = Meteor.userId();
		const username = Meteor.userId().username;

		const commentObj ={
			'text' : comment_text,
			'date' : date,
			'owner' : owner,
			'username' : username
		};


		console.log("commentObj: " + commentObj);

		Files.update({"uuid": currentFile.uuid}, {$push: {"comments" : commentObj}});
	}
});