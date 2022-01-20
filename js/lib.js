// Dane Miller, 01/20/2022
// Version 1.0.0
// Host this .js file on GitHub.


/*** INPUT FORMATTING ***/

// Format money with commas (text field)
// Run inside the afterLoad() block
function initMoneyCommas() {
    function registerMoneyCommas() {
    	[].forEach.call(document.querySelectorAll('input[data-bind]'), function(element) {
			if (element.getAttribute('data-bind').includes("money") && !element.getAttribute('sd-money-listener')) {
				console.log(element.getAttribute('id') + '==' + element.getAttribute('data-bind'));
    			element.addEventListener('change', function() { triggerMoneyCommas(this); }, false);
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
				element.addEventListener('change', function() { formatEmailKSU(this); }, false);
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
			$( 'body' ).prepend('<div id="softdocsLoadingBar" style="display: block; position: fixed; width: 50%; text-align: center; margin: 25% 25% 25% 25%; background: white; z-index: 999; font-size: 26px; font-weight: bold; padding: 20px; border: 4px solid black;">Loading form, please wait...</div>');
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


/*** DATA TABLES ***/

function getCollegeDepartmentPairs() {
	return [
		{ college: 'College of Agriculture', department: '4-H Youth Development' },
		{ college: 'College of Agriculture', department: 'Agricultural Economics' },
		{ college: 'College of Agriculture', department: 'Agronomy' },
		{ college: 'College of Agriculture', department: 'Animal Sciences and Industry' },
		{ college: 'College of Agriculture', department: 'Biological and Agricultural Engineering' },
		{ college: 'College of Agriculture', department: 'Communications and Agricultural Education' },
		{ college: 'College of Agriculture', department: "Dean's Office" },
		{ college: 'College of Agriculture', department: 'Entomology' },
		{ college: 'College of Agriculture', department: 'Food Science Institute' },
		{ college: 'College of Agriculture', department: 'Grain Sciences and Industry' },
		{ college: 'College of Agriculture', department: 'Horticulture, Forestry, and Recreation Resources' },
		{ college: 'College of Agriculture', department: 'Kansas Forest Service' },
		{ college: 'College of Agriculture', department: 'Other' },
		{ college: 'College of Agriculture', department: 'Plant Pathology' },
		{ college: 'College of Agriculture', department: 'Research and Extension' },
		{ college: 'College of Arts and Sciences', department: 'Aerospace Studies' },
		{ college: 'College of Arts and Sciences', department: 'American Ethnic Studies' },
		{ college: 'College of Arts and Sciences', department: 'Art' },
		{ college: 'College of Arts and Sciences', department: 'Biochemistry and Molecular Biophysics' },
		{ college: 'College of Arts and Sciences', department: 'Biology' },
		{ college: 'College of Arts and Sciences', department: 'Chemistry' },
		{ college: 'College of Arts and Sciences', department: 'Communication Studies' },
		{ college: 'College of Arts and Sciences', department: "Dean's Office" },
		{ college: 'College of Arts and Sciences', department: 'Economics' },
		{ college: 'College of Arts and Sciences', department: 'English' },
		{ college: 'College of Arts and Sciences', department: 'Gender, Women, and Sexuality Studies' },
		{ college: 'College of Arts and Sciences', department: 'Geography and Geospatial Sciences' },
		{ college: 'College of Arts and Sciences', department: 'Geology' },
		{ college: 'College of Arts and Sciences', department: 'History' },
		{ college: 'College of Arts and Sciences', department: 'Humanities' },
		{ college: 'College of Arts and Sciences', department: 'Integrated Computer Science' },
		{ college: 'College of Arts and Sciences', department: 'International and Area Studies' },
		{ college: 'College of Arts and Sciences', department: 'Journalism and Mass Communications' },
		{ college: 'College of Arts and Sciences', department: 'Life Science' },
		{ college: 'College of Arts and Sciences', department: 'Mathematics' },
		{ college: 'College of Arts and Sciences', department: 'Military Science' },
		{ college: 'College of Arts and Sciences', department: 'Modern Languages' },
		{ college: 'College of Arts and Sciences', department: 'Music, Theatre, and Dance' },
		{ college: 'College of Arts and Sciences', department: 'Natural Resources and Environmental Sciences' },
		{ college: 'College of Arts and Sciences', department: 'Other' },
		{ college: 'College of Arts and Sciences', department: 'Physics' },
		{ college: 'College of Arts and Sciences', department: 'Political Sciences' },
		{ college: 'College of Arts and Sciences', department: 'Research Centers and Facilities' },
		{ college: 'College of Arts and Sciences', department: 'Social Science' },
		{ college: 'College of Arts and Sciences', department: 'Sociology, Anthropology, and Social Work' },
		{ college: 'College of Arts and Sciences', department: 'Statistics' },
		{ college: 'College of Business Administration', department: 'Accounting' },
		{ college: 'College of Business Administration', department: "Dean's Office" },
		{ college: 'College of Business Administration', department: 'Finance' },
		{ college: 'College of Business Administration', department: 'Management' },
		{ college: 'College of Business Administration', department: 'Marketing' },
		{ college: 'College of Business Administration', department: 'Other' },
		{ college: 'College of Education', department: 'Curriculum and Instruction' },
		{ college: 'College of Education', department: "Dean's Office" },
		{ college: 'College of Education', department: 'Educational Leadership' },
		{ college: 'College of Education', department: 'Other' },
		{ college: 'College of Education', department: 'Special Education, Counseling, and Student Affairs' },
		{ college: 'College of Engineering', department: 'Architectural Engineering and Construction Science' },
		{ college: 'College of Engineering', department: 'Biological and Agricultural Engineering' },
		{ college: 'College of Engineering', department: 'Chemical Engineering' },
		{ college: 'College of Engineering', department: 'Computer Science' },
		{ college: 'College of Engineering', department: "Dean's Office" },
		{ college: 'College of Engineering', department: 'Electrical and Computer Engineering' },
		{ college: 'College of Engineering', department: 'Industrial and Manufacturing Systems Engineering' },
		{ college: 'College of Engineering', department: 'Mechanical and Nuclear Engineering' },
		{ college: 'College of Engineering', department: 'Other' },
		{ college: 'College of Health and Human Sciences', department: 'Applied Human Sciences' },
		{ college: 'College of Health and Human Sciences', department: "Dean's Office" },
		{ college: 'College of Health and Human Sciences', department: 'Food, Nutrition, Dietetics, and Health' },
		{ college: 'College of Health and Human Sciences', department: 'Hospitality Management' },
		{ college: 'College of Health and Human Sciences', department: 'Interior Design and Fashion Studies' },
		{ college: 'College of Health and Human Sciences', department: 'Kinesiology' },
		{ college: 'College of Health and Human Sciences', department: 'Other' },
		{ college: 'College of Health and Human Sciences', department: 'Personal Financial Planning' },
		{ college: 'College of Veterinary Medicine', department: 'Anatomy and Physiology' },
		{ college: 'College of Veterinary Medicine', department: 'Clinical Sciences' },
		{ college: 'College of Veterinary Medicine', department: "Dean's Office" },
		{ college: 'College of Veterinary Medicine', department: 'Diagnostic Medicine/Pathobiology' },
		{ college: 'College of Veterinary Medicine', department: 'Other' },
		{ college: 'Diversity and Multicultural Student Affairs', department: 'Intercultural Learning and Academic Success' },
		{ college: 'Diversity and Multicultural Student Affairs', department: 'Multicultural Center' },
		{ college: 'Diversity and Multicultural Student Affairs', department: 'Multicultural Programs and Services' },
		{ college: 'Diversity and Multicultural Student Affairs', department: 'Other' },
		{ college: 'Division of Communications and Marketing', department: 'Design Services' },
		{ college: 'Division of Communications and Marketing', department: 'Kansas Open Records Act' },
		{ college: 'Division of Communications and Marketing', department: 'K-State Today' },
		{ college: 'Division of Communications and Marketing', department: 'News and Communications Services' },
		{ college: 'Division of Communications and Marketing', department: 'Other' },
		{ college: 'Division of Communications and Marketing', department: 'Photo Services' },
		{ college: 'Division of Communications and Marketing', department: 'University Marketing' },
		{ college: 'Division of Communications and Marketing', department: 'Video Production Services' },
		{ college: 'Division of Communications and Marketing', department: 'Web Services' },
		{ college: 'Division of Financial Services', department: 'Cashiers and Student Accounting' },
		{ college: 'Division of Financial Services', department: 'Financial Reporting' },
		{ college: 'Division of Financial Services', department: 'General Accounting' },
		{ college: 'Division of Financial Services', department: 'Other' },
		{ college: 'Division of Financial Services', department: 'Purchasing' },
		{ college: 'Division of Financial Services', department: 'Sponsored Programs Accounting' },
		{ college: 'Division of Financial Services', department: 'Systems' },
		{ college: 'Global Campus', department: 'Conference Management Services' },
		{ college: 'Global Campus', department: "Dean's Office" },
		{ college: 'Global Campus', department: 'Financial and Administrative Operations' },
		{ college: 'Global Campus', department: 'Marketing' },
		{ college: 'Global Campus', department: 'Other' },
		{ college: 'Global Campus', department: 'Program Development and Management' },
		{ college: 'Global Campus', department: 'Recruitment' },
		{ college: 'Global Campus', department: 'Student Success and Advising' },
		{ college: 'Global Campus', department: 'UFM Community Learning Center' },
		{ college: 'Graduate School', department: 'Administration' },
		{ college: 'Graduate School', department: 'Admissions' },
		{ college: 'Graduate School', department: "Dean's Office" },
		{ college: 'Graduate School', department: 'Degree Analysis' },
		{ college: 'Graduate School', department: 'Other' },
		{ college: 'Human Capital Services', department: 'Administration' },
		{ college: 'Human Capital Services', department: 'Benefits' },
		{ college: 'Human Capital Services', department: 'Compensation and Organizational Effectiveness' },
		{ college: 'Human Capital Services', department: 'Employee Relations and Engagement' },
		{ college: 'Human Capital Services', department: 'Learning and Development' },
		{ college: 'Human Capital Services', department: 'Other' },
		{ college: 'Human Capital Services', department: 'Resources Center and Operations' },
		{ college: 'Human Capital Services', department: 'Talent Acquisition' },
		{ college: 'Information Technology Services', department: 'Operations' },
		{ college: 'Information Technology Services', department: 'Other' },
		{ college: 'K-State Athletics, Inc.', department: 'Academics and Student-Athlete Services' },
		{ college: 'K-State Athletics, Inc.', department: 'Administration' },
		{ college: 'K-State Athletics, Inc.', department: 'Athletic Operations, Facilities, and Events' },
		{ college: 'K-State Athletics, Inc.', department: 'Athletics Communication' },
		{ college: 'K-State Athletics, Inc.', department: 'Broadcasting and HD.TV' },
		{ college: 'K-State Athletics, Inc.', department: 'Business Office' },
		{ college: 'K-State Athletics, Inc.', department: 'Compliance' },
		{ college: 'K-State Athletics, Inc.', department: 'Development' },
		{ college: 'K-State Athletics, Inc.', department: 'Equipment' },
		{ college: 'K-State Athletics, Inc.', department: 'Other' },
		{ college: 'K-State Athletics, Inc.', department: 'Spirit Squad' },
		{ college: 'K-State Athletics, Inc.', department: 'Sports Medicine' },
		{ college: 'K-State Athletics, Inc.', department: 'Sports Properties' },
		{ college: 'K-State Athletics, Inc.', department: 'Strength and Conditioning' },
		{ college: 'K-State Athletics, Inc.', department: 'Ticketing, Fan Experience, and Sales' },
		{ college: 'K-State Olathe', department: "Dean's Office" },
		{ college: 'K-State Olathe', department: 'Other' },
		{ college: 'K-State Salina', department: "Dean's Office" },
		{ college: 'K-State Salina', department: 'Other' },
		{ college: 'K-State Student Union', department: 'General' },
		{ college: 'Libraries', department: 'Administration' },
		{ college: 'Libraries', department: 'Collections, Discovery, and IT Services' },
		{ college: 'Libraries', department: 'Other' },
		{ college: 'Libraries', department: 'Research, Education, and Engagement Division' },
		{ college: 'Libraries', department: 'University Archives and Special Collections' },
		{ college: 'Office of International Programs', department: 'Education Abroad' },
		{ college: 'Office of International Programs', department: 'English Language Program' },
		{ college: 'Office of International Programs', department: 'International Admissions and Recruiting' },
		{ college: 'Office of International Programs', department: 'International Faculty Collaborations' },
		{ college: 'Office of International Programs', department: 'International Student and Scholar Services' },
		{ college: 'Office of International Programs', department: 'Other' },
		{ college: 'Office of International Programs', department: 'Special Programs and Sponsored Students' },
		{ college: 'Office of PreAward Services', department: 'Other' },
		{ college: 'Office of Student Life', department: 'Cats Cupboard' },
		{ college: 'Office of Student Life', department: 'Center for Advocacy, Response, and Education' },
		{ college: 'Office of Student Life', department: 'Center for Child Development, CDC' },
		{ college: 'Office of Student Life', department: 'Counseling Services' },
		{ college: 'Office of Student Life', department: 'Housing and Dining Services' },
		{ college: 'Office of Student Life', department: 'Lafene Student Health Center' },
		{ college: 'Office of Student Life', department: 'LGBT Resource Center' },
		{ college: 'Office of Student Life', department: 'Multicultural Programs' },
		{ college: 'Office of Student Life', department: 'Multicultural Student Life' },
		{ college: 'Office of Student Life', department: 'Other' },
		{ college: 'Office of Student Life', department: 'Recreational Services' },
		{ college: 'Office of Student Life', department: 'Student Access Center' },
		{ college: 'Office of Student Life', department: 'Veterans Center' },
		{ college: 'Office of the President', department: 'Beach Museum of Art' },
		{ college: 'Office of the President', department: 'Chief of Staff' },
		{ college: 'Office of the President', department: 'Diversity and Inclusion' },
		{ college: 'Office of the President', department: 'Government Relations' },
		{ college: 'Office of the President', department: 'Internal Audit' },
		{ college: 'Office of the President', department: 'McCain Auditorium' },
		{ college: 'Office of the President', department: 'NBAF' },
		{ college: 'Office of the President', department: 'Office of General Counsel' },
		{ college: 'Office of the President', department: 'Office of Institutional Equity' },
		{ college: 'Office of the President', department: 'Other' },
		{ college: 'Office of the Provost', department: 'Enrollment Management' },
		{ college: 'Office of the Provost', department: 'Institutional Research' },
		{ college: 'Office of the Provost', department: 'International Programs' },
		{ college: 'Office of the Provost', department: 'Leadership Studies' },
		{ college: 'Office of the Provost', department: 'Other' },
		{ college: 'Office of the Provost', department: 'Student Success' },
		{ college: 'Office of the Registrar', department: 'General' },
		{ college: 'Other', department: 'Emergency Manager' },
		{ college: 'Other', department: 'Great Plains Interactive Distance Education Alliance' },
		{ college: 'Other', department: 'Kansas State Collegian Student Newspaper' },
		{ college: 'Other', department: 'National Academic Advising Association, NACADA' },
		{ college: 'Research', department: 'Biosecurity Research Institute' },
		{ college: 'Research', department: 'K-State Innovation Partners' },
		{ college: 'Research', department: 'National Agricultural Biosecurity Center' },
		{ college: 'Research', department: 'Other809' },
		{ college: 'Student Government Association', department: 'General' },
		{ college: 'University Operations', department: 'Campus Planning and Project Management' },
		{ college: 'University Operations', department: 'Engineering, Utilities, and Maintenance' },
		{ college: 'University Operations', department: 'Environmental Health and Safety' },
		{ college: 'University Operations', department: 'Facilities and Architect' },
		{ college: 'University Operations', department: 'KSU Police Department' },
		{ college: 'University Operations', department: 'Other' },
		{ college: 'University Operations', department: 'Parking Services' },
		{ college: 'University Operations', department: 'Risk and Compliance Officer' }
	];
}

function getColleges() {
	let collegeDeptPairs = getCollegeDepartmentPairs();
	let colleges = [];
	for (i = 0; i < collegeDeptPairs.length; i++) {
		var college = collegeDeptPairs[i].college.toString();
		colleges.push({college: college, blank: null});
	}
	colleges = uniqueObjArray(colleges);
	return colleges;
}

function getCollegeDepartments(college) {
	let collegeDeptPairs = getCollegeDepartmentPairs();
	let departments = [];
	for (i = 0; i < collegeDeptPairs.length; i++) {
		var department = collegeDeptPairs[i].department.toString();
		if (collegeDeptPairs[i].college == college) {
			departments.push({department: department});
		}
	}
	return departments;
}
