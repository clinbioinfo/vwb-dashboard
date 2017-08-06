Files = new Mongo.Collection('files');

Files.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function (userId, doc, fieldNames, modified){
		return !!userId;
	}
});

CommentsSchema = new SimpleSchema({
	text : {
		type : String,
		label : 'Comment'
	},
	username : {
		type : String,
		label : 'Username'
	},
	date : {
		type : Date,
		label : 'Date'
	},
	owner : {
		type : String,
		label : 'Owner ID'
	} 
});

AnnotationsSchema = new SimpleSchema({
	key : {
		type : String,
		label : 'Key'
	},
	value : {
		type : String,
		label : 'Value'
	},
	username : {
		type : String,
		label : 'Username',
		optional: true
	},
	email : {
		type : String,
		label : 'Email',
		optional: true
	},
	date : {
		type : Date,
		label : 'Date'
	},
	owner : {
		type : String,
		label : 'Owner ID',
		optional: true
	} 
});

FilesSchema = new SimpleSchema({
	basename: {
		type : String,
		label : 'Basename'
	},
	path: {
		type : String,
		label : 'Path'
	},
	desc: {
		type : String,
		label : 'Description',
		optional: true
	},
	mode:{
		type: String,
		optional: true
	},
	inode:{
		type: String,
		optional: true
	},
	dev:{
		type: String,
		optional: true
	},
	nlink:{
		type: String,
		optional: true
	},
	uid:{
		type: String,
		optional: true
	},
	gid:{
		type: String,
		optional: true
	},
	owner:{
		type: String,
		optional: true
	},
	group:{
		type: String,
		optional: true
	},
	bytes_size:{
		type: String,
		optional: true
	},
	atime:{
		type: String,
		optional: true
	},
	mtime:{
		type: String,
		optional: true
	},
	ctime:{
		type: String,
		optional: true
	},
	date_accessed:{
		type: String,
		optional: true
	},
	date_modified:{
		type: String,
		optional: true
	},
	date_created:{
		type: String,
		optional: true
	},
	publisher: {
		type : String,
		label : 'Publisher'
	},
	createdAt: {
		type : Date,
		label : 'Created At',
		autoValue : function(){
			return new Date();
		}
		// autoform : {
		// 	type : 'hidden'
		// }	
	},
	md5checksum:{
		type: String,
		optional: true
	},
	comments : {
		type : [CommentsSchema]
	},
	annotations : {
		type : [AnnotationsSchema]
	}
});

// Meteor.methods({
// 	toggleMenuItem: function(id, currentState){
// 		Files.update(id, {
// 			$set: {
// 				inMenu: !currentState
// 			}
// 		});
// 	},
// 	deleteRecipe: function (id){
// 		Files.remove(id);
// 	}
// });

Files.attachSchema( FilesSchema );