$(document).ready(function () {
	$.when(
		$.getScript("/w/load.php?lang=de&modules=startup&only=scripts&raw=1&skin=vector"),
		$.Deferred(function (deferred) {
			$(deferred.resolve);
		})
	).done(function () {
		console.log("SlidyInit1");
		$.when(
			$.getScript("/w/index.php?title=Mediawiki:Common.js&action=raw&ctype=text/javascript"),
			$.Deferred(function (deferred) {
				$(deferred.resolve);
			})
		).done(function () {
			console.log("SlidyInit2");
		});
	});
});
