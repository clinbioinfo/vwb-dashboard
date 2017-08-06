Template.FilesDashboard.onCreated(function (){

	var self = this;
	self.autorun(function(){
		self.subscribe('files');
	});

	Session.set('currentFile', null);
});

Template.FilesDashboard.helpers({
	files: () => {
		return Files.find({}, {'basename': 1, 'path': 1, 'bytes_size': 1, 'owner': 1, 'uuid': 1}, {sort : {createdAt: -1}});
	},
  	fileCount() {
    	return Files.find().count();
  	},
});


Template.FilesDashboard.events({
	'click .new-file': function (){
		Session.set('newFile', true);
	}
});
