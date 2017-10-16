import '../api/methods.js';

Meteor.publish('files', function (){
	return Files.find({});
})