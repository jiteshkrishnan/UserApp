Ext.define('Users.store.Users', { 
    extend: 'Ext.data.Store', 
    alias: 'store.users', 
    requires: [ 'Users.model.User' ],

    config: {
        model: 'Users.model.User',
        proxy: {
            type: 'ajax',
            url: '/api/users',
            reader: {
                type: 'json',
                rootProperty: 'users'
            }
        }
    }
});