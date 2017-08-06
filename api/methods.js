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

		var commentObj ={
			'text' : comment_text,
			'date' : date,
			'owner' : owner,
			'username' : username
		};


		console.log("Will attempt to update file: " + currentFile.basename + " with the following comment: " + comment_text);

		try {
			Files.update({"uuid": currentFile.uuid}, {$push: {"comments" : commentObj}});
		}
		catch (ex){
			throw new Error("Caught some exception while attempting to update file: " + currentFile.basename + " with the following comment: " + comment_text);
		}
	},
	'insert.new.annotation'(key, value, currentFile){


		if (! Meteor.userId()){
			throw new Meteor.Error('not-authorized');
		}

		check(key, String)
		check(value, String)

		const date     = new Date();
		const owner    = Meteor.userId();
		const username = Meteor.user().username;
		const email = Meteor.user().emails[0].address;

		var annotationObj ={
			'key'      : key,
			'value'    : value,
			'date'     : date,
			'owner'    : owner,
			'email'    : email
		};


		console.log("Will attempt to update file " + currentFile.basename + " by adding annotation key: " + key + " with value: " + value);

		Files.update({"uuid": currentFile.uuid}, {$push: {"annotations" : annotationObj}});
	}
});