if (Meteor.isClient){
	Accounts.onLogin(function(){
		FlowRouter.go('files-dashboard');	
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');	
	});
}


FlowRouter.triggers.enter([function(context, redirect){
	if (! Meteor.userId()){
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name : 'home',
	action(){
		if (Meteor.userId()){
			FlowRouter.go('files-dashboard');
		}
		//GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/files-dashboard', {
	name : 'files-dashboard',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main:"FilesDashboard"});
	}
});

FlowRouter.route('/file-details/:id', {
	name : 'file-details',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main:"FileDetails"});
	}
});