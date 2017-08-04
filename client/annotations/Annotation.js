Template.Annotation.onCreated(function (){

	var self = this;
	self.autorun(function(){
		self.subscribe('files');
	})
});

Template.Annotation.helpers({
});

Template.Annotation.events({
});