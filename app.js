Ext.Loader.setConfig({
    enabled:true,          // important
    disableCaching: true // important
  
});

Ext.application({
	name:"Users",
	models:["User"],
	stores:["Users"],
	views:["UsersList","Main","CapturePicture","UserForm"],
	controllers:["Users.controller.Main"],
	launch:function(){
		console.log("Application launched...");
			
			      Ext.Viewport.add(Ext.create('Users.view.Main'));
  
	}
	});