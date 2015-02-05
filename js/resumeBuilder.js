bio = {
			"name": "Kelvin Rodriguez",
			"role": "Mechatronics Technologist",
			"contacts": {
				"mobile": "829-556-9057",
				"email": "kelv.rod@gmail.com",
				"github": "Kelv",
				"twitter": "",
				"location": "Invivienda, Santo Domingo" 
				},
			"welcomeMessage": "Hello I'm Kelvin!",
			"skills": ["Electricity", "Electronics", "Solidworks and AutoCad Design", "Programming"],
			"biopic": "images/kelvin.jpg",
			"display": "function(){}"
		};
education = {
				"schools": [
					{
						"name": "Prof. Simon Orozco Politechnic School",
						"location": "Invivienda, Santo Domingo, DR",
						"degree": "Electronics Technician",
						"majors": ['Electronics','Math'],
						"dates": "11022010",
						"url": ""
					},
					{
						"name": "Las Americas Institute of Technology",
						"location": "Autopista Las Américas, Km. 27, PCSD, La Caleta, Boca Chica, DR",
						"degree": "Mechatronics Technologist",
						"majors": ['Electronics','Math','Programming'],
						"dates": "08132014",
						"url": "http://www.itla.edu.do"
					},
					{
						"name": "UNAPEC",
						"location": "Avenida 27 de Febrero 569, Santo Domingo, DR",
						"degree": "Electrical Engineer",
						"majors": ['Math'],
						"dates": "0",
						"url": "https://www.unapec.edu.do"
					}
				],
				"onlineCourses": [
					{
						"title": "UT.1.01x Energy 101",
						"school": "UTAustinX",
						"date": "December 2013",
						"url": "https://s3.amazonaws.com/verify.edx.org/downloads/57a4d25da06f4d0d9a04bbf15a00b11f/Certificate.pdf"
					},
					{
						"title": "6.00.1x Introduction to Computer Science and Programming",
						"school": "MITx",
						"date": "January 2014",
						"url": "https://s3.amazonaws.com/verify.edx.org/downloads/387f96a001224d8493bb7aa028d85384/Certificate.pdf"
					},
					{
						"title": "Fundamentals of Audio and Music Engineering: Part 1 Musical Sound & Electronics",
						"school": "University of Rochester",
						"date": "July 2014",
						"url": "https://drive.google.com/file/d/0B-7ClsNtH5iac0ttc2paQm91Rnc/view?usp=sharing"
					},
					{
						"title": "Programming Mobile Applications for Android Handheld Systems",
						"school": "University of Maryland",
						"date": "April 2014",
						"url": "https://drive.google.com/file/d/0B-7ClsNtH5iaclJMcm9TeHFONFU/view?usp=sharing"
					},
					{
						"title": "UT.6.01x Embedded Systems - Shape the World",
						"school": "UTAustinX",
						"date": "May 2014",
						"url": "https://s3.amazonaws.com/verify.edx.org/downloads/bba1866b82ea4a3fa2cac8daa807e8b4/Certificate.pdf"
					},
					{
						"title": "6.00.2x Introduction to Computational Thinking and Data Science",
						"school": "MITx",
						"date": "May 2014",
						"url": "https://s3.amazonaws.com/verify.edx.org/downloads/2806ab3e0c2940a9964661a28fd630ed/Certificate.pdf"
					},
					{
						"title": "CNC.ETRRx Introducción al Control Numérico por Computadora",
						"school": "TenarisUniversityX",
						"date": "December 2014",
						"url": "https://s3.amazonaws.com/verify.edx.org/downloads/27273b6315c8401bb58fceecf7989c30/Certificate.pdf"
					},
					{
						"title": "Desarrollo en HTML5, CSS y Javascript de WebApps, incl. móviles FirefoxOS* (3.ª ed.)",
						"school": "Universidad Politecnica de Madrid",
						"date": "November 2014",
						"url": "https://www.miriadax.net/files/10132/badge/a966af9a-4308-4e3c-8194-643185192329.pdf"
					}
				],
				"display": "function(){}"
			};

work = {
			"jobs":[
			 	{
					"employer": "Veraguas Water Purifier",
					"title": "Salesman",
					"loc": "El Progreso Av. #8, Santo DOmingo, RD",
					"dates": "January 2012-July 2014",
					"description": "Sale the product with quality and hygiene."
				},
				{
					"employer": "Misa Electronics",
					"title": "Electronics Technician",
					"loc": "Simon Orozco Av., Invivienda, Santo Domingo",
					"dates": "August 2010-December 2010",
					"description": "Repair electronics equipment."
				}
			],
			"display": "function(){}"
		};

projects = {
				"projects": [
					{
						"title": "Space Invaders",
						"dates": "January 2014",
						"description": "This project was about a game of Space Invaders",
						"images": ["images/space.png"]
					}

				]
			}



// $('#header').append(HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage));
// $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));

// $('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
// $('#header').prepend(HTMLheaderName.replace('%data%', bio.name));

// $('#topContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
// $('#topContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
// $('#topContacts').append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
// $('#topContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
// $('#topContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));





// for(contact in contacts){
// 	var mobile = HTML
// 	var email
// 	var twitter 
// 	var github 
// 	var blog 
// 	var location

// 	$('#topContacts').append(HTMLheaderName.replace('%data%', bio.contacts[contacts]));
// }

// if (bio.skills.length != 0){
// 	$('#header').append(HTMLskillsStart);
// 	for(var i = 0; i < bio.skills.length; i++){
// 		$('#skills').append(HTMLskills.replace('%data%', bio.skills[i]));
// 	}
// }


// function displayWork(){
// 	for(j in work.jobs){
// 		$('#workExperience').append(HTMLworkStart);
// 		var employer = HTMLworkEmployer.replace('%data%', work.jobs[j].employer);
// 		var title = HTMLworkTitle.replace('%data%', work.jobs[j].title);
// 		var loc = HTMLworkLocation.replace('%data%', work.jobs[j].loc);
// 		var dates = HTMLworkDates.replace('%data%', work.jobs[j].dates);
// 		var description = HTMLworkDescription.replace('%data%', work.jobs[j].description);

// 		var workExp = employer + title + dates + loc + description;

// 		$('.work-entry:last').append(workExp);
		
// 	}
// }

// displayWork();

// function logClicks(x,y){
// 	console.log(x +' '+ y);
// }

$('#main').append(internationalizeButton);

var inName = function(){
	var n = $('#name').html().trim().split(' ');

	return n[0][0].toUpperCase()+ n[0].slice(1).toLowerCase() + " " + n[1].toUpperCase(); 
}


bio.display = function(){
				$('#header').append(HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage));
				$('#header').append(HTMLbioPic.replace('%data%', bio.biopic));

				$('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
				$('#header').prepend(HTMLheaderName.replace('%data%', bio.name));

				$('#topContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
				$('#topContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
				$('#topContacts').append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
				$('#topContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
				$('#topContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));

				if (bio.skills.length != 0){
					$('#header').append(HTMLskillsStart);
					for(var i = 0; i < bio.skills.length; i++){
						$('#skills').append(HTMLskills.replace('%data%', bio.skills[i]));
					}
				}
			};




projects.display = function(){
					for(var i in projects.projects){
						$('#projects').append(HTMLprojectStart);

						var title = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
						var dates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
						var description = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
						var images = "";

						for(var im in projects.projects[i].images){
							images += HTMLprojectImage.replace('%data%', projects.projects[i].images[im]);
						}

						var project = title + dates + description + images;

						$('.project-entry:last').append(project);					
					}

				};


work.display = function(){
				for(j in work.jobs){
					$('#workExperience').append(HTMLworkStart);
					var employer = HTMLworkEmployer.replace('%data%', work.jobs[j].employer);
					var title = HTMLworkTitle.replace('%data%', work.jobs[j].title);
					var loc = HTMLworkLocation.replace('%data%', work.jobs[j].loc);
					var dates = HTMLworkDates.replace('%data%', work.jobs[j].dates);
					var description = HTMLworkDescription.replace('%data%', work.jobs[j].description);

					var workExp = employer + title + dates + loc + description;

					$('.work-entry:last').append(workExp);
				}
			};

education.display = function(){
					for(var school in education.schools){
						$('#education').append(HTMLschoolStart);
						var name = HTMLschoolName.replace('%data%', education.schools[school].name);
						var location = HTMLschoolLocation.replace('%data%', education.schools[school].location);
						var degree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
						var majors = "";
						for(var m in education.schools[school].majors){
							majors += HTMLschoolMajor.replace('%data%', education.schools[school].majors[m]);
						}
						//var major = HTMLschoolMajor.replace('%data%', education.schools[school].major);
						var dates = HTMLschoolDates.replace('%data%', education.schools[school].dates);

						var schoolFormatted = name + degree + dates + location  + majors;

						$('.education-entry:last').append(schoolFormatted);
					}
					$('#education').append(HTMLonlineClasses);
					for(var course in education.onlineCourses){
						$('#education').append(HTMLschoolStart);
						var title = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
						var school = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
						var dates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].date);
						var url = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);

						var courseFormatted = title + school + dates + url;

						$('.education-entry:last').append(courseFormatted);
					}
				};


bio.display();
work.display();
education.display();
projects.display();

$('#mapDiv').append(googleMap);