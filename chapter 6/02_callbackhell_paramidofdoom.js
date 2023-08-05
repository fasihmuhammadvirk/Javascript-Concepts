// ** Callback Hell and Pyramid of Doom ** //

/*
if we have callback inside of the call back the code get difficult to manage.
if we have alot of callback inside of the callback and our code grows 
horizontally then this is refer as the pyramid of doom and also as callback hell.
*/

// Callbacks
function loadScript(src, callback) {
        var script = document.createElement("script");
	script.src = src;
	script.onload = function () {
		console.log("Loaded script with SRC: " + src);
		callback(null, src);
	};
	script.onerror = function () {
		console.log("Error loading script with SRC: " + src);
		callback(new Error("Src got some error"));
	};
	document.body.appendChild(script);
}

function hello(error, src) {
	if (error) {
		console.log(error);
		return;
	}
	alert("Hello World!" + src);
}

/*
this is the visual example of the callback hell as we are calling the function
and our code is expanding horizontally become difficult to read and manage.
that why we should not use a lot of callback or callback 
promises in javascript which will help us to solve this issue easily.
*/
loadScript(
	"https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
	function goodmorning(error, src) {
		if (error) {
			console.log(error);
			sendEmergencyMessageToCeo();
			return;
		}
		loadScript(
			"https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap2.bundle.min.js",
			function goodmorning(error, src) {
				if (error) {
					console.log(error);
					sendEmergencyMessageToCeo();
					return;
				}
				loadScript(
					"https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap3.bundle.min.js",
					function goodmorning(error, src) {
						if (error) {
							console.log(error);
							sendEmergencyMessageToCeo();
							return;
						}
						loadScript(
							"https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap4.bundle.min.js",
							function goodmorning(error, src) {
								if (error) {
									console.log(error);
									sendEmergencyMessageToCeo();
									return;
								}
								loadScript(
									"https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap5.bundle.min.js",
									function goodmorning(error, src) {
										if (error) {
											console.log(error);
											sendEmergencyMessageToCeo();
											return;
										}
										loadScript(
											"https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap6.bundle.min.js",
											function goodmorning(error, src) {
												if (error) {
													console.log(error);
													sendEmergencyMessageToCeo();
													return;
												}
												loadScript(
													"https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap7.bundle.min.js",
													function goodmorning(error, src) {
														if (error) {
															console.log(error);
															sendEmergencyMessageToCeo();
															return;
														}
														loadScript(
															"https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap8.bundle.min.js",
															function goodmorning(error, src) {
																if (error) {
																	console.log(error);
																	sendEmergencyMessageToCeo();
																	return;
																}
																loadScript(
																	"https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap9.bundle.min.js",
																	function goodmorning(error, src) {}
																);
															}
														);
													}
												);
											}
										);
									}
								);
							}
						);
					}
				);
			}
		);
	}
);
// Chintu
