Template.FileDetails.onCreated(function (){

	var self = this;
	self.autorun(function(){
		self.subscribe('files');
	})
});

Template.FileDetails.helpers({
	file: () => {
		var id = FlowRouter.getParam('id');
		// alert(id);
		return Files.findOne({uuid:id});
	}
})