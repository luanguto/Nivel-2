var app = new Vue({
    el: '#usuarios',
    data: {
        users: []
    },
    mounted: function() {
        this.loadUsers();
    },
    methods: {
        loadUsers: function() {
            var self = this;
            $.ajax({
                url: 'https://reqres.in/api/users?per_page=10',
                method: 'GET',
                success: function(response) {
                    self.users = response.data;
                }
            });
        }
    }
});