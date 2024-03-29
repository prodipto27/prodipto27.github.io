
// var deferredPrompt;

// window.addEventListener('beforeinstallprompt', (e) => {
// 	// Prevent the mini-infobar from appearing on mobile
// 	e.preventDefault();
// 	// Stash the event so it can be triggered later.
// 	deferredPrompt = e;
// 	// Update UI notify the user they can install the PWA
// 	//showInstallPromotion();
// });

function pwaInstall() {
	
	clearAcceptListener();
	var dialog = new mdc.dialog.MDCDialog(document.getElementsByClassName('mdc-dialog')[0]);

	if (window.matchMedia('(display-mode: standalone)').matches) {
		console.log('display-mode is standalone');
		var stat = "";
		openDialog('আপনি অলরেডি অ্যাপটি ইন্সটল করেছেন। ধন্যবাদ! ❤️');
	}
	else {
		// document.getElementsByClassName("mdc-dialog__button")[1].id = 'pwa-install-accept';

		var pwaButtonListener = function (e) {
			console.log("accept pressed!");
			console.log("inside conditon!");
			console.log(e);
			console.log(deferredPrompt);
			
			deferredPrompt = e;
			
			deferredPrompt.prompt();

			deferredPrompt.userChoice.then((choiceResult) => {
				if (choiceResult.outcome === 'accepted') {
					console.log('User accepted the A2HS prompt');
				} else {
					console.log('User dismissed the A2HS prompt');
				}
				deferredPrompt = null;
			});
		}

		//document.getElementById('pwa-install-accept').addEventListener('click', pwaButtonListener, true);

		document.getElementById("my-dialog-content").textContent = "পছন্দ হয়েছে? তাহলে ঝটপট ইন্সটল করে ফেলো তোমার ডিভাইসে! কোনো ডাউনলোডের প্রয়োজন নেই!!! ";
		dialog.open();

		dialog.listen("MDCDialog:closing", (e) => {
			//document.getElementById('pwa-install-accept').removeEventListener('click', pwaButtonListener, true);
			console.log("PWA prompt closed!");
		});
	}

}