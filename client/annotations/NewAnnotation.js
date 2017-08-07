import {Meteor} from 'meteor/meteor';

Template.NewAnnotation.onCreated(function (){

	var self = this;
	self.autorun(function(){
		self.subscribe('files');
	})
});

Template.NewAnnotation.helpers({
});

Template.NewAnnotation.events({
	'submit #new_annotation_form'(event){
		
		event.preventDefault();

		console.log("New Annotation Submit Button clicked on");
	

		const target = event.target;

		const annotation_key_text = target.new_annotation_key_text.value;

		const annotation_value_text = target.new_annotation_value_text.value;
	
		if ((annotation_key_text !== undefined) && (annotation_value_text !== undefined)){

			if ((annotation_key_text === '') || (annotation_value_text === '')){
				console.log("Need to provide values for both annotation key and value");
			}
			else {
				var currentFile = Session.get('currentFile');

				Meteor.call('insert.new.annotation', annotation_key_text, annotation_value_text, currentFile);
			}
		}
		else {
			console.log("Both annotation key and value should be defined");
		}


		target.new_annotation_key_text.value = '';

		target.new_annotation_value_text.value = '';


		Session.set('newAnnotation', false);
	},
	'click #newAnnotationCancelButton'(){
		
		console.log("New Annotation Cancel Button clicked on");
		
		Session.set('newAnnotation', false);
	}
});