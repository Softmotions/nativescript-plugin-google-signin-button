function pageLoaded(args) {
    var page = args.object;
    var gsb = page.getViewById("gsbButton");

}

exports.pageLoaded = pageLoaded;
exports.gsbTap = function(args) {
    console.log('Tap on google sign-in button');
};