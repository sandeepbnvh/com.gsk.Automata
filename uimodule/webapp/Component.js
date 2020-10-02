sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/Device",
  "com/gsk/Automata/model/models"
], function(UIComponent, Device, models) {
  "use strict";

  return UIComponent.extend("com.gsk.Automata.Component", {

    metadata: {
      manifest: "json"
    },

    /**
     * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
     * @public
     * @override
     */
    init: function() {
      // call the base component's init function
      UIComponent.prototype.init.apply(this, arguments);

      // enable routing
      this.getRouter().initialize();

      // set the device model
      this.setModel(models.createDeviceModel(), "device");
      this.renderRecastChatbot();
    },
    renderRecastChatbot: function() {
      if (!document.getElementById("cai-webchat")) {
          var s = document.createElement("script");
             s.setAttribute("id", "cai-webchat");
            s.setAttribute("src", "https://cdn.cai.tools.sap/webchat/webchat.js");
                document.body.appendChild(s);
          }
          s.setAttribute("channelId", "2d0245f0-8964-4ad0-9ba9-f1c930f0f6fb");
          s.setAttribute("token", "9d0f703e4f01eb3b6b2921a18d17e0e6");
  },
  });
});
