var ga = require('ti.ga');
console.log("module is => " + ga);

ga.setOptOut(false);
ga.setDebug(true);

var tracker = ga.createTracker({
   trackingId:'UA-58005221-1',
   useSecure:true,
   debug:true 
});

console.log('**************');
console.log("tracker is => " + JSON.stringify(tracker));

tracker.startSession();
tracker.addScreenView('my-cool-view');
    
function doClick(e) {
    tracker.addScreenView('my-cool-view2');
    tracker.addEvent({
        category:"School driving",
        label:"Audi Club of North America",
        value:1
    });  
    tracker.addTiming({
        category:"Audi Comunity",
        label:"First Events",
        name:"Audi Club of North America",
        time:1
    });
}

$.index.addEventListener('close', function(){
    tracker.endSession();
    ga.dispatch();
});

$.index.open();