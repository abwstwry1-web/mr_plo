module.exports = {
  onLoad() {
    console.log("[MyFirstPlugin] Plugin loaded successfully!");
  },
  onUnload() {
    console.log("[MyFirstPlugin] Plugin unloaded.");
  }
};
