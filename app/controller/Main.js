Ext.define('Users.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'main',
            backBtn: 'main > toolbar button[action=back]'
        },
        control: {
            'main > toolbar button[action=newuser]': {
                tap: 'showUserForm'
            },
            'main > toolbar button[action=back]': {
                tap: 'showMainView'
            },
			'main userform button[action=save]': {
                tap: 'saveUser'
            },
			'main userform button[action=Capture]': {
                tap: 'captureImage'
            }
        }
    },

	
	captureImage:function(){
	
	Ext.device.Camera.capture({
    success: function(image) {
		var img = Ext.getCmp('imagedata');
                        img.setSrc('data:image/jpeg;base64,' +imagedata);    },
    quality: 75,
    width: 300,
    height: 300,
    destination: 'data',
    source: 'camera',
    encoding: 'jpg'
});
	
	},
	
    showUserForm: function() {
        this.getMain().animateActiveItem(this.getMain().down('userform'), {
            type: 'slide',
            direction: 'left'
        });
        this.getBackBtn().show();
    },

    showMainView: function() {
        this.getMain().animateActiveItem(this.getMain().down('userslist'), {
            type: 'slide',
            direction: 'right'
        });
        this.getBackBtn().hide();
    },
	saveUser: function() {
        var form = this.getMain().down('userform'),
            capture = form.down('capturepicture'),
            values = form.getValues();

        Ext.Ajax.request({
            url: 'http://l4080:8080/sampleweb/sample.jsp',
            method: 'POST',
            params: {
                'user[name]': values.name,
                'user[email]': values.email,
                'user[image]': capture.getImageDataUrl()
            },
            scope: this,
            success: this.showMessage,
            failure: this.showMessage
        });
    },

    showMessage: function(response, options) {
        if (response.status === 200) {
            var form = this.getMain().down('userform');

            form.reset();
            this.showMainView();
            this.getMain().down('userslist').getStore().load();

        } else {
            Ext.Msg.alert('Error', 'There was an error while saving this user.');
        }
    },
});