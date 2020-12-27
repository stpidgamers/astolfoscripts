var scriptName = "Desolate";
var scriptDescription = "Astolfo HvH Script";

function Desolate() {
    this.onEnable = function() {
        if (!moduleManager.isModuleActive("flight")) {
            notification.success("Desolate", "FastFly exploit activated!", 4000);
            localPlayer.sendMessage(".flight");
            localPlayer.setSpeed(1.33);
        }else {
            localPlayer.setSpeed(1);
        }
    }
}

var module = new Desolate();

this.onEnable = function() {
    moduleManager.registerModule(module);
}

this.onDisable = function() {
    moduleManager.unregisterModule(module);
}
