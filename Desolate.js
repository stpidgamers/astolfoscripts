var scriptName = "Desolate"
var scriptDescription = "Astolfo HvH Script"

function Desolate() {
    this.onEnable = function() {
        // on enable
    }
}

var module = new Desolate();

this.onEnable = function() {
    moduleManager.registerModule(module);
}

this.onDisable = function() {
    moduleManager.unregisterModule(module);
}
