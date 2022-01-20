// Dane Miller, 01/20/2022
// Version 1.0.0
// Host this .js file on GitHub.


/*** DATA TABLES: COLLEGE/DEPARTMENT ***/

function getColleges() {
	return [
		{ college: 'College of Agriculture', blank: null, departments: [
			{ department: '4-H Youth Development' },
			{ department: 'Agricultural Economics' },
			{ department: 'Agronomy' },
			{ department: 'Animal Sciences and Industry' },
			{ department: 'Biological and Agricultural Engineering' },
			{ department: 'Communications and Agricultural Education' },
			{ department: "Dean's Office" },
			{ department: 'Entomology' },
			{ department: 'Food Science Institute' },
			{ department: 'Grain Sciences and Industry' },
			{ department: 'Horticulture, Forestry, and Recreation Resources' },
			{ department: 'Kansas Forest Service' },
			{ department: 'Other' },
			{ department: 'Plant Pathology' },
			{ department: 'Research and Extension' }
		]},
		{ college: 'College of Arts and Sciences', blank: null, departments: [
			{ department: 'Aerospace Studies' },
			{ department: 'American Ethnic Studies' },
			{ department: 'Art' },
			{ department: 'Biochemistry and Molecular Biophysics' },
			{ department: 'Biology' },
			{ department: 'Chemistry' },
			{ department: 'Communication Studies' },
			{ department: "Dean's Office" },
			{ department: 'Economics' },
			{ department: 'English' },
			{ department: 'Gender, Women, and Sexuality Studies' },
			{ department: 'Geography and Geospatial Sciences' },
			{ department: 'Geology' },
			{ department: 'History' },
			{ department: 'Humanities' },
			{ department: 'Integrated Computer Science' },
			{ department: 'International and Area Studies' },
			{ department: 'Journalism and Mass Communications' },
			{ department: 'Life Science' },
			{ department: 'Mathematics' },
			{ department: 'Military Science' },
			{ department: 'Modern Languages' },
			{ department: 'Music, Theatre, and Dance' },
			{ department: 'Natural Resources and Environmental Sciences' },
			{ department: 'Other' },
			{ department: 'Physics' },
			{ department: 'Political Sciences' },
			{ department: 'Research Centers and Facilities' },
			{ department: 'Social Science' },
			{ department: 'Sociology, Anthropology, and Social Work' },
			{ department: 'Statistics' }
		]},
		{ college: 'College of Business Administration', blank: null, departments: [
			{ department: 'Accounting' },
			{ department: "Dean's Office" },
			{ department: 'Finance' },
			{ department: 'Management' },
			{ department: 'Marketing' },
			{ department: 'Other' }
		]},
		{ college: 'College of Education', blank: null, departments: [
			{ department: 'Curriculum and Instruction' },
			{ department: "Dean's Office" },
			{ department: 'Educational Leadership' },
			{ department: 'Other' },
			{ department: 'Special Education, Counseling, and Student Affairs' }
		]},
		{ college: 'College of Engineering', blank: null, departments: [
			{ department: 'Architectural Engineering and Construction Science' },
			{ department: 'Biological and Agricultural Engineering' },
			{ department: 'Chemical Engineering' },
			{ department: 'Computer Science' },
			{ department: "Dean's Office" },
			{ department: 'Electrical and Computer Engineering' },
			{ department: 'Industrial and Manufacturing Systems Engineering' },
			{ department: 'Mechanical and Nuclear Engineering' },
			{ department: 'Other' }
		]},
		{ college: 'College of Health and Human Sciences', blank: null, departments: [
			{ department: 'Applied Human Sciences' },
			{ department: "Dean's Office" },
			{ department: 'Food, Nutrition, Dietetics, and Health' },
			{ department: 'Hospitality Management' },
			{ department: 'Interior Design and Fashion Studies' },
			{ department: 'Kinesiology' },
			{ department: 'Other' },
			{ department: 'Personal Financial Planning' }
		]},
		{ college: 'College of Veterinary Medicine',  departments: [
			{ department: 'Anatomy and Physiology' },
			{ department: 'Clinical Sciences' },
			{ department: "Dean's Office" },
			{ department: 'Diagnostic Medicine/Pathobiology' },
			{ department: 'Other' }
		]},
		{ college: 'Diversity and Multicultural Student Affairs',  departments: [
			{ department: 'Intercultural Learning and Academic Success' },
			{ department: 'Multicultural Center' },
			{ department: 'Multicultural Programs and Services' },
			{ department: 'Other' }
		]},
		{ college: 'Division of Communications and Marketing',  departments: [
			{ department: 'Design Services' },
			{ department: 'Kansas Open Records Act' },
			{ department: 'K-State Today' },
			{ department: 'News and Communications Services' },
			{ department: 'Other' },
			{ department: 'Photo Services' },
			{ department: 'University Marketing' },
			{ department: 'Video Production Services' },
			{ department: 'Web Services' }
		]},
		{ college: 'Division of Financial Services', blank: null, departments: [
			{ department: 'Cashiers and Student Accounting' },
			{ department: 'Financial Reporting' },
			{ department: 'General Accounting' },
			{ department: 'Other' },
			{ department: 'Purchasing' },
			{ department: 'Sponsored Programs Accounting' },
			{ department: 'Systems' }
		]},
		{ college: 'Global Campus', blank: null, departments: [
			{ department: 'Conference Management Services' },
			{ department: "Dean's Office" },
			{ department: 'Financial and Administrative Operations' },
			{ department: 'Marketing' },
			{ department: 'Other' },
			{ department: 'Program Development and Management' },
			{ department: 'Recruitment' },
			{ department: 'Student Success and Advising' },
			{ department: 'UFM Community Learning Center' }
		]},
		{ college: 'Graduate School', blank: null, departments: [
			{ department: 'Administration' },
			{ department: 'Admissions' },
			{ department: "Dean's Office" },
			{ department: 'Degree Analysis' },
			{ department: 'Other' }
		]},
		{ college: 'Human Capital Services', blank: null, departments: [
			{ department: 'Administration' },
			{ department: 'Benefits' },
			{ department: 'Compensation and Organizational Effectiveness' },
			{ department: 'Employee Relations and Engagement' },
			{ department: 'Learning and Development' },
			{ department: 'Other' },
			{ department: 'Resources Center and Operations' },
			{ department: 'Talent Acquisition' }
		]},
		{ college: 'Information Technology Services', blank: null, departments: [
			{ department: 'Operations' },
			{ department: 'Other' }
		]},
		{ college: 'K-State Athletics, Inc.', blank: null, departments: [
			{ department: 'Academics and Student-Athlete Services' },
			{ department: 'Administration' },
			{ department: 'Athletic Operations, Facilities, and Events' },
			{ department: 'Athletics Communication' },
			{ department: 'Broadcasting and HD.TV' },
			{ department: 'Business Office' },
			{ department: 'Compliance' },
			{ department: 'Development' },
			{ department: 'Equipment' },
			{ department: 'Other' },
			{ department: 'Spirit Squad' },
			{ department: 'Sports Medicine' },
			{ department: 'Sports Properties' },
			{ department: 'Strength and Conditioning' },
			{ department: 'Ticketing, Fan Experience, and Sales' }
		]},
		{ college: 'K-State Olathe', blank: null, departments: [
			{ department: "Dean's Office" },
			{ department: 'Other' }
		]},
		{ college: 'K-State Salina', blank: null, departments: [
			{ department: "Dean's Office" },
			{ department: 'Other' }
		]},
		{ college: 'K-State Student Union', blank: null, departments: [
			{ department: 'General' }
		]},
		{ college: 'Libraries', blank: null, departments: [
			{ department: 'Administration' },
			{ department: 'Collections, Discovery, and IT Services' },
			{ department: 'Other' },
			{ department: 'Research, Education, and Engagement Division' },
			{ department: 'University Archives and Special Collections' }
		]},
		{ college: 'Office of International Programs', blank: null, departments: [
			{ department: 'Education Abroad' },
			{ department: 'English Language Program' },
			{ department: 'International Admissions and Recruiting' },
			{ department: 'International Faculty Collaborations' },
			{ department: 'International Student and Scholar Services' },
			{ department: 'Other' },
			{ department: 'Special Programs and Sponsored Students' }
		]},
		{ college: 'Office of PreAward Services', blank: null, departments: [
			{ department: 'Other' }
		]},
		{ college: 'Office of Student Life', blank: null, departments: [
			{ department: 'Cats Cupboard' },
			{ department: 'Center for Advocacy, Response, and Education' },
			{ department: 'Center for Child Development, CDC' },
			{ department: 'Counseling Services' },
			{ department: 'Housing and Dining Services' },
			{ department: 'Lafene Student Health Center' },
			{ department: 'LGBT Resource Center' },
			{ department: 'Multicultural Programs' },
			{ department: 'Multicultural Student Life' },
			{ department: 'Other' },
			{ department: 'Recreational Services' },
			{ department: 'Student Access Center' },
			{ department: 'Veterans Center' }
		]},
		{ college: 'Office of the President', blank: null, departments: [
			{ department: 'Beach Museum of Art' },
			{ department: 'Chief of Staff' },
			{ department: 'Diversity and Inclusion' },
			{ department: 'Government Relations' },
			{ department: 'Internal Audit' },
			{ department: 'McCain Auditorium' },
			{ department: 'NBAF' },
			{ department: 'Office of General Counsel' },
			{ department: 'Office of Institutional Equity' },
			{ department: 'Other' }
		]},
		{ college: 'Office of the Provost', blank: null, departments: [
			{ department: 'Enrollment Management' },
			{ department: 'Institutional Research' },
			{ department: 'International Programs' },
			{ department: 'Leadership Studies' },
			{ department: 'Other' },
			{ department: 'Student Success' }
		]},
		{ college: 'Office of the Registrar', blank: null, departments: [
			{ department: 'General' }
		]},
		{ college: 'Other', blank: null, departments: [
			{ department: 'Emergency Manager' },
			{ department: 'Great Plains Interactive Distance Education Alliance' },
			{ department: 'Kansas State Collegian Student Newspaper' },
			{ department: 'National Academic Advising Association, NACADA' }
		]},
		{ college: 'Research', blank: null, departments: [
			{ department: 'Biosecurity Research Institute' },
			{ department: 'K-State Innovation Partners' },
			{ department: 'National Agricultural Biosecurity Center' },
			{ department: 'Other809' }
		]},
		{ college: 'Student Government Association', blank: null, departments: [
			{ department: 'General' }
		]},
		{ college: 'University Operations', blank: null, departments: [
			{ department: 'Campus Planning and Project Management' },
			{ department: 'Engineering, Utilities, and Maintenance' },
			{ department: 'Environmental Health and Safety' },
			{ department: 'Facilities and Architect' },
			{ department: 'KSU Police Department' },
			{ department: 'Other' },
			{ department: 'Parking Services' },
			{ department: 'Risk and Compliance Officer' }
		]}
	];
}

function getDepartments(college) {
	let colleges = getColleges();
	for (i = 0; i < colleges.length; i++) {
		if (colleges[i].college == college) {
			return colleges[i].departments;
		}
	}
	return [];
}