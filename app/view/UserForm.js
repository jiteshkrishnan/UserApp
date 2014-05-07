Ext.define('Users.view.UserForm', {
    extend: 'Ext.form.Panel',
    xtype: 'userform',
    requires: [
        'Ext.field.Email'
    ],

    config: {
        cls: 'user-form',
        items: [ {
            xtype: 'textfield',
            name: 'name',
            label: 'Name', 
    margin: '0 20'
        },
		{
            xtype: 'button',
            action: 'Capture',
            text: 'Capture', 
    margin: '0 20'
        },
		{
			xtype: 'panel',
			html: '<img style="height: 100px; width: 100px;" />' 
        },
		{
            xtype: 'emailfield',
            name: 'email',
            label: 'email',
            margin: '0 20'
        }, {
            xtype: 'button',
            action: 'save',
            text: 'Save',
            margin: '10 20'
        }]
    },

    reset: function() {
        this.callParent(arguments);
    }
});