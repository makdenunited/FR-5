
const programs = {

    apps: {
    photoshop: "adobe",
    chrome: "google",
    steam: "valve",
    },

    log () {
        console.log (this.apps)
    }
    
};

delete programs.apps["steam"];
programs.apps["vscode"] = "microsoft";

programs.log();