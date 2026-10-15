module.exports = {
    onLoad() {
        console.log("[MyFirstPlugin] تم تحميل البلوجن بنجاح!");
    },
    onUnload() {
        console.log("[MyFirstPlugin] تم إلغاء تحميل البلوجن!");
    }
};
