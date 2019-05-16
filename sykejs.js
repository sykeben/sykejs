// SykeJS module:
// SykeJS module:
export class sykejs {
    constructor() {
        
        // Logger module:
        this.logger = function () {
            // Blank logger:
            this.blank = function (message) {
                console.log("        " + message);
            };
            // Info logger:
            this.info = function (message) {
                console.log("[INFO]  " + message);
            };
            // Warning logger:
            this.warn = function (message) {
                console.log("[WARN]  " + message);
            };
            // Error logger:
            this.error = function (message) {
                console.log("[ERROR] " + message);
            };
            // Data logger:
            this.data = function (message) {
                console.log("[DATA]  " + message);
            };
            // Status logger:
            this.stat = function (message) {
                console.log("[STAT]  " + message);
            };
        };
    }
}

// Define exports.
module.exports = sykejs;