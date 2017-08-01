Template.FilesDashboard.onCreated(function (){

	var self = this;
	self.autorun(function(){
		self.subscribe('files');
	})
});

Template.FilesDashboard.helpers({
	files: () => {
		return Files.find({}, {sort : {createdAt: -1}});
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
