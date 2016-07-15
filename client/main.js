Template.body.onRendered(function() {
    document.body.scrollLeft = 1000;
});

Template.body.events({
    'click #open': function() {
        window.plugins.nativepagetransitions.drawer({
                "origin": "left",
                "action": "open",
                "duration": 1000,
                "iosdelay": 50,
                "androiddelay": 500
            },
            function(msg) { console.log("success: " + msg) },
            function(msg) { alert("error: " + msg) }
        );
        document.body.scrollLeft = 0;
    },
    'click #close': function() {
    	window.plugins.nativepagetransitions.drawer({
                "origin": "left",
                "action": "close",
                "duration": 1000,
                "iosdelay": 50,
                "androiddelay": 500
            },
            function(msg) { console.log("success: " + msg) },
            function(msg) { alert("error: " + msg) }
        );
        document.body.scrollLeft = 1000;
    }
})
