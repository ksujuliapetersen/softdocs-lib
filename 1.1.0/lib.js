// Dane Miller, 04/12/2022
// Version 1.1.9
// Host this .js file on GitHub.

(function(ksu) {
// BEGIN NAMESPACE


/*** SIMPLE CONFIG AND RUN ***/

// Run the selected formatting options on the form
// Run inside the vm.afterLoad() block
// i.e.: ksu.format(['noautocomplete', 'moneycommas', 'emailksu', 'hidedisabledbuttons', 'dropdownarrows']);
ksu.format = function(p) {
	if (p === undefined) { p = []; }
	for (var i = 0; i < p.length; i++) { p[i] = p[i].toLowerCase(); }
	if (p.includes("noautocomplete") == true) { ksu.disableAutocomplete(); }
	if (p.includes("moneycommas") == true) { ksu.initMoneyCommas(); }
	if (p.includes("emailksu") == true) { ksu.initEmailKSU(); }
	if (p.includes("hidedisabledbuttons") == true) { ksu.initHideDisabledButtons(); }
	if (p.includes("dropdownarrows") == true) { ksu.initDropdownArrows(); }
};


/*** FORM OPTIONS ***/

// Prevents form suggestion
// Run inside the vm.afterLoad() block
ksu.disableAutocomplete = function() {
	$( document ).on( 'focus', 'input', function() { 
		$( this ).attr( 'autocomplete', 'chrome-off' );
	});
};

// Formats money with commas (text field)
// Run inside the vm.afterLoad() block
ksu.initMoneyCommas = function() {
	ksu.registerMoneyCommas = function() {
		[].forEach.call(document.querySelectorAll('button'), function(element) {
			if (!element.getAttribute('sd-money-listener')) {
				console.log('ksu.registerMoneyCommas (button): ' + element.getAttribute('id'));
				element.addEventListener('click', function() { ksu.registerMoneyCommas(); }, false);
				element.setAttribute('sd-money-listener', 'yes');
			}
		});
		[].forEach.call(document.querySelectorAll('input[data-bind*="money"]'), function(element) {
			if (!element.getAttribute('sd-money-listener')) {
				console.log('ksu.registerMoneyCommas (input): ' + element.getAttribute('id'));
				element.addEventListener('focusout', function() { ksu.triggerMoneyCommas(this); }, false);
				element.addEventListener('focus', function() { ksu.removeMoneyCommas(this); }, false);
				element.setAttribute('sd-money-listener', 'yes');
			}
			ksu.formatMoneyCommas(element);
		});
	};
	ksu.triggerMoneyCommas = function(elem) {
		ksu.formatMoneyCommas(elem);
		[].forEach.call(document.querySelectorAll('input[data-bind*="money"]'), function(element) {
			if (element.getAttribute('data-bind').includes("calculate")) {
				ksu.formatMoneyCommas(element);
			}
		});
	};
	ksu.formatMoneyCommas = function(elem) {
		var val = elem.value;
		var parts = val.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		elem.value = parts.join(".");
	};
	ksu.removeMoneyCommas = function(elem) {
		var val = elem.value;
		val = val.toString().replace(/,/g, "");
		elem.value = val;
	};
    ksu.registerMoneyCommas();
};

// Formats email address fiels with the "maskemail" class as ___@ksu.edu (text field)
// Run inside the vm.afterLoad() block
ksu.initEmailKSU = function() {
	ksu.registerEmailKSU = function() {
		[].forEach.call(document.querySelectorAll('button'), function(element) {
			if (!element.getAttribute('sd-email-listener')) {
				console.log('ksu.registerEmailKSU (button): ' + element.getAttribute('id'));
				element.addEventListener('click', function() { ksu.registerEmailKSU(); }, false);
				element.setAttribute('sd-email-listener', 'yes');
			}
		});
		[].forEach.call(document.querySelectorAll('.maskemail'), function(element) {
			if (!element.getAttribute('sd-email-listener')) {
				console.log('ksu.registerEmailKSU (input): ' + element.getAttribute('id'));
				element.addEventListener('focusout', function() { ksu.formatEmailKSU(this); }, false);
				element.setAttribute('sd-email-listener', 'yes');
			}
			ksu.formatEmailKSU(element);
		});
	};
	ksu.formatEmailKSU = function(elem) {
		var val = elem.value;
		if (val == null || val.toString() == "") { return; }
		var parts = val.toString().split('@');
		if (parts.length == 1 || parts[1].toString() == 'k-state.edu') {
			ksu.setInputValue(elem.id, parts[0] + "@ksu.edu");
		}
	};
	ksu.registerEmailKSU();
};

// Buttons will automatically become hidden when disabled, and then automatically become visible again when they are enabled
// Run inside the vm.afterLoad() block
ksu.initHideDisabledButtons = function() {
	$( 'body' ).prepend('<style>button:disabled { display: none; }</style>');
};

// Add drop-down arrows to input fields with an autocomplete data-bind
ksu.initDropdownArrows = function() {
	ksu.registerDropdownArrows = function() {
		var insertDropdownArrow = function(element, c) {
			if (!element.getAttribute('sd-dropdownarrows-listener')) {
				console.log('ksu.registerDropdownArrows (input): ' + element.getAttribute('id'));
				var ico;
				if (c == true) {
					ico = "calendar.ico";
				} else {
					ico = "dropdown.ico";
				}
				$(element).css({
					"background-image": "url('https://kstateome.github.io/softdocs-lib/1.1.0/ico/" + ico + "')",
					"background-size": "" + ($(element).outerHeight() - 6) + "px",
					"background-position": "calc(100% - 2px) center",
					"background-repeat": "no-repeat"
				});
				element.setAttribute('sd-dropdownarrows-listener', 'yes');
			}
		};
		[].forEach.call(document.querySelectorAll('button'), function(element) {
			if (!element.getAttribute('sd-dropdownarrows-listener')) {
				console.log('ksu.registerDropdownArrows (button): ' + element.getAttribute('id'));
				element.addEventListener('click', function() { ksu.registerDropdownArrows(); }, false);
				element.setAttribute('sd-dropdownarrows-listener', 'yes');
			}
		});
		[].forEach.call(document.querySelectorAll('input.ui-autocomplete-input'), function(element) {
			insertDropdownArrow(element, false);
		});
		[].forEach.call(document.querySelectorAll('select'), function(element) {
			insertDropdownArrow(element, false);
		});
		[].forEach.call(document.querySelectorAll('input[data-bind*="datepicker"]'), function(element) {
			insertDropdownArrow(element, true);
		});
	};
	ksu.registerDropdownArrows();
};


/*** LOADING MESSAGE ***/

// Shows a loading message immediately as the form begins to load
// Run inside the vm.viewmodel() block
ksu.showFormLoadingMessage = function() {
	if ($( '#softdocsFormLoadingMessage' ).length == 0) {
		$( 'body' ).prepend('<div id="softdocsFormLoadingMessage" style="position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: 999;"><div style="position: fixed; top: 0; bottom: 0; left: 0; right: 0; background: white; opacity: 0.8;"></div><div style="display: block; position: fixed; width: 80%; height: 220px; text-align: center; margin: 10%; font-size: 26px; font-weight: bold; padding: 20px; background: white; box-shadow: 0 0 30px grey;"><div>Loading...</div><div style="width: 100px; margin: 10px 0 0 calc(50% - 50px);"><svg width="100" height="100"><image xlink:href="/dist/resources/images/svg/Loading.svg" src="/dist/resources/images/svg/Loading.svg" width="100" height="100"/></div></div></div>');
	}
};

// Hides the loading message after the form has finished loading
// Run inside the vm.afterLoad() block
ksu.hideFormLoadingMessage = function() {
	if ($( '#softdocsFormLoadingMessage' ).length > 0) {
		$( '#softdocsFormLoadingMessage' ).remove();
	}
};


/*** FORM FUNCTIONS ***/

// Changing the value of an input via document.getElementById("id").value = "value" only changes the display and not the actual value that will be submitted by the form
ksu.setInputValue = function(id, value) {
	var element = document.getElementById(id);
	element.value = value;
	ksu.triggerEvent(element, "change");
	if (element.getAttribute('sd-money-listener')) { ksu.initMoneyCommas(); }
	if (element.getAttribute('sd-email-listener')) { ksu.initEmailKSU(); }
};

ksu.triggerEvent = function(element, eventName) {
	var event; // The custom event that will be created
	if(document.createEvent){
		event = document.createEvent("HTMLEvents");
		event.initEvent(eventName, true, true);
		event.eventName = eventName;
		element.dispatchEvent(event);
	} else {
		event = document.createEventObject();
		event.eventName = eventName;
		event.eventType = eventName;
		element.fireEvent("on" + event.eventType, event);
	}
};


/*** ARRAY FUNCTIONS ***/

// Returns unique values from a text array
ksu.uniqueTxtArray = function(txtArray) {
	ksu.onlyUnique(value, index, self) = function() {
		return self.indexOf(value) === index;
	}
	var unique = txtArray.filter(onlyUnique);
	return unique;
};

// Returns unique objects from an object array
// Also works for a text array
ksu.uniqueObjArray = function(arr) {
	var a = [];
	var unique = [];
	for (i = 0; i < arr.length; i++) {
		var v = JSON.stringify(arr[i]);
		if (a.indexOf(v) == -1) {
			a.push(v);
			var o = arr[i];
			unique.push(o);
		}
	}
	return unique;
};

// END NAMESPACE
}( window.ksu = window.ksu || {} ));