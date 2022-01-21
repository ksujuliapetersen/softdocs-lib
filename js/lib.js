// Dane Miller, 01/21/2022
// Version 1.0.1
// Host this .js file on GitHub.


/*** INPUT FORMATTING ***/

// Format money with commas (text field)
// Run inside the afterLoad() block
function initMoneyCommas() {
    function registerMoneyCommas() {
    	[].forEach.call(document.querySelectorAll('input[data-bind]'), function(element) {
			if (element.getAttribute('data-bind').includes("money") && !element.getAttribute('sd-money-listener')) {
				console.log(element.getAttribute('id') + '==' + element.getAttribute('data-bind'));
    			element.addEventListener('focusout', function() { triggerMoneyCommas(this); }, false);
				element.addEventListener('focus', function() { removeMoneyCommas(this); }, false);
				element.setAttribute('sd-money-listener', 'yes');
    		}
    	});
    }
    function triggerMoneyCommas(elem) {
    	formatMoneyCommas(elem);
    	[].forEach.call(document.querySelectorAll('input[data-bind]'), function(element) {
    		if (element.getAttribute('data-bind').includes("money") && element.getAttribute('data-bind').includes("calculate")) {
    			formatMoneyCommas(element);
    		}
    	});
    }
    function formatMoneyCommas(elem) {
    	var val = elem.value;
    	var parts = val.toString().split(".");
    	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    	elem.value = parts.join(".");
    }
	function removeMoneyCommas(elem) {
    	var val = elem.value;
    	val = val.toString().replace(/,/g, "");
    	elem.value = val;
    }
    [].forEach.call(document.querySelectorAll('button'), function(element) {
    	console.log(element.getAttribute('id') + '==' + element.getAttribute('data-bind') && !element.getAttribute('sd-money-listener'));
    	element.addEventListener('click', function() { registerMoneyCommas(); }, false);
		element.setAttribute('sd-money-listener', 'yes');
    });
    registerMoneyCommas();
}

// Format email address as ___@ksu.edu (text field)
// Run inside the afterLoad() block
function initEmailKSU() {
	function registerEmailKSU() {
		[].forEach.call(document.querySelectorAll('.maskemail'), function(element) {
			if (!element.getAttribute('sd-email-listener')) {
				element.addEventListener('focusout', function() { formatEmailKSU(this); }, false);
			}
		});
	}
	function formatEmailKSU(elem) {
		var val = elem.value;
		if (val == null || val.toString() == "") { return; }
		var parts = val.toString().split('@');
		if (parts.length == 1 || parts[1].toString() == 'k-state.edu') {
			elem.value = parts[0] + "@ksu.edu";
		}
	}
	[].forEach.call(document.querySelectorAll('button'), function(element) {
		if (!element.getAttribute('sd-email-listener')) {
			console.log(element.getAttribute('id') + '==' + element.getAttribute('data-bind'));
			element.addEventListener('click', function() { registerEmailKSU(); }, false);
			element.setAttribute('sd-email-listener', 'yes');
		}
	});
	registerEmailKSU();
}


/*** FORM OPTIONS ***/

// Prevents form suggestion
// Run inside the afterLoad() block
function disableAutocomplete() {
	$( document ).on( 'focus', 'input', function(){ 
		$( this ).attr( 'autocomplete', 'chrome-off' );
	});
}

// Shows a loading message that will disappear when the default values finish loading.
// Run showFormLoadingMessage(true); in vm.viewmodel() to show the message.
// Run showFormLoadingMessage(false); at the end of vm.setDefaults() to hide the message after the page has finished loading.
function showFormLoadingMessage(boolEnable) {
	if (boolEnable == true) {
		if (document.getElementById("softdocsLoadingBar")) {
		   $( '#softdocsLoadingBar' ).css('display', '');
		} else {
			$( 'body' ).prepend('<div id="softdocsLoadingBar" style="display: block; position: fixed; width: 80%; height: 200px; text-align: center; margin: 10%; z-index: 999; font-size: 26px; font-weight: bold; padding: 20px; box-shadow: 0 0 30px grey;"><div style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; background: white; opacity: 0.8;"></div><div style="position: absolute; top: 10px; bottom: 0; left: 0; right: 0;"><div>Loading form, please wait...</div><div style="width: 100px; margin: 10px 0 0 calc(50% - 50px);"><object type="image/svg+xml" data="/dist/resources/images/svg/Loading.svg">...</object></div></div></div>');
		}
	} else {
		$( '#softdocsLoadingBar' ).css('display', 'none');
	}
}


/*** ARRAY FUNCTIONS ***/

// Returns unique values from a text array
function uniqueTxtArray(txtArray) {
	function onlyUnique(value, index, self) {
		return self.indexOf(value) === index;
	}
	var unique = txtArray.filter(onlyUnique);
	return unique;
}

// Returns unique objects from an object array
// Also works for a text array
function uniqueObjArray(arr) {
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
}
