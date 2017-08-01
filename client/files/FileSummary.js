Template.FileSummary.onCreated(function(){
	this.editMode = new ReactiveVar(false);
});

Template.FileSummary.helpers({
	updateFileSummaryId: function(){
		return this._id;
	},
	editMode: function(){
		return Template.instance().editMode.get();
	}
})

Template.FileSummary.events({
	'click .toggle-menu': function(){
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	// 'click .fa-trash': function (){
	// 	Meteor.call('deleteFilesummary', this._id);
	// },
	'click .fa-pencil': function (event, template){
		template.editMode.set(!template.editMode.get());
		// Session.set('editMode', !Session.get('editMode'));
	}
});
