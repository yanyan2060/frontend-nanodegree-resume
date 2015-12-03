/*
This is empty on purpose! Your code to build the resume will go here.
 */
 

 
 var bio = {
	 "name":"Yanyan Zhou",
	 "role":"Seeking for full-time positions",
	 "welcomMessage":"Interested in learning new technologies!",
	 "contacts": {
		 "mobile": "631-496-6807",
		 "email" : "yanyan9112@gmail.com",
		 "github": "https://github.com/yanyan2060",
		 "location": "San Jose, USA"

	 },
	 "pictureURL": "images/yyz.JPG",
	 "skills":[
	 "Python","Java","C++/C","HTML","CSS","Javascript","SQL","Matlab"
	 ]
	 
	
 };
var formattedName = HTMLheaderName.replace("%data%", "Yanyan Zhou");
var formattedRole = HTMLheaderRole.replace("%data%", "M.S.EE student");
$("#header").append(formattedName);
$("#header").append(formattedRole);
for (contact in bio.contacts) {
	var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%",contact).replace("%data%",bio.contacts[contact]);
	$("#topContacts").append(formattedContactGeneric);
	$("#footerContacts").append(formattedContactGeneric);
};


//bio display
bio.display = function() {


    var formattedBioPic = HTMLbioPic.replace("%data%",bio.pictureURL);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomMessage);
	$("#header").append(formattedBioPic).append(formattedWelcomeMsg);
	if (bio.skills.length > 0) {
		//$("#header").append(HTMLheaderName);
		$("#header").append(HTMLskillsHeader);
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedskills = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedskills);
		}


}


};
bio.display();

var projects = {
	"project":[
		{
			"title":"Web Blog(Python, Google App Engine, Webapp2, HTML, CSS)",
			"dates":"10.2015-11.2015",
			"description": " Built a web blog with sign up/in using hashing to securely read and transmit user passwords.Generated data in JSON formats that other computers can access through an API.Added a static google map, and marked the ip address.Added memcache to blog and display the time of accessing the database."
			
		},
		{
			"title":"<a href = 'https://github.com/yanyan2060/web-search-engine'>Web-Searching Engine(Python)</a>",
			"dates":"09.2015-10.2015",
			"description":"Built a web-search engine including web crawler, build on index and ranking page.Implemented a ranked page crawler algorithm for higher accuracy."
		},
		{
			"title":"<a href='https://github.com/yanyan2060/Udacity-Intro-to-Hadoop-and-MapReduce'>Analyze Big Data Set(Python,Hadoop,MapReduce)</a>",
			"dates":"09.2015-10.5015",
			"description":"Analyzed Udacity student discussion forum to get the hours of most posts by student.Wrote a mapreduce program would output the length of the post and the average answer length for each post.Wrote a mapreduce program would output the Top 10 tags ordered by the number of questions they appear in."
		},
		{
			"title":"<a href = 'https://github.com/yanyan2060/Kernighan-Lin-algorithm'>VLSI Circuits Partitioning(C++)</a>",
			"dates": "05.2014-06.2014",
			"description":"Implemented and experimented with Kernighan-Lin partitioning algorithm for gate-level designs.Found the partition areas which can offer the minimal cutset size."
		},
	{
		"title":"<a href='https://github.com/yanyan2060/Decision-Tree-Induction-algorithm'>Data Classification(C++)</a>",
		"dates":"03.2014-04.2014",
		"description":" Implemented decision tree induction algorithm for classification." +
		"Implemented information gain, gain ratio and gini index three selection measures to decide the separating da attribute." +
		"Verify the decision tree with test data and obtain the accuracy of this algorithm."
	},
	{
		"title":"<a href = 'https://github.com/yanyan2060/Data-Mining---FP-Growth-algorithm'>Mining Frequent Item Sets</a>",
		"dates":"02.2014-03.2014",
		"description":"Implemented the frequent pattern (FP) growth algorithm for mining frequent item sets.Constructed frequent item sets through FP-tree and condition FP-tree for the items in frequent item sets."
	},
	{
		"title": "<a href = 'https://github.com/yanyan2060/Star-Cubing-Algorithm'>Compute data cubes with Star-Cubing algorithms (C++)</a>",
		"dates":"02.2014-03.2014",
		"description":"Implemented Star-Cubing algorithms to compute data cubes. " +
		"Utilized star-tree structure, extends the simultaneous aggregation methods." +
		"Obtained iceberg cubes quickly and use less memory compared to the previous ways."
	},
		
	]
};

//Project Display function
/*$("#projects").append(HTMLprojectStart);
 var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[0].title);
 $(".project-entry:last").append(formattedTitle);*/

projects.display = function(){

	for (p in projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[p].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[p].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[p].description);
		$(".project-entry:last").append(formattedDescription);
		/*if (projects.projects[project].image.length > 0) {
		 for (image in projects.projects[project].images) {
		 var formattedImage = HTMLprojectImage.replace("%data", projects.projects[project].images[image]);
		 $(".project-entry:last").append(formattedImage);
		 }
		 }*/
	}

}

projects.display();

var education = {
	"schools": [
	{
		"name":"<a href='http://www.stonybrook.edu/'>Stony Brook University",
		"degree": "MS</a>",
		"location":"Stony Brook,USA",
		"majors": ["Electrical Engineering"],
		"dates": "2013-2014"

	},
	{
		"name":"<a href='http://en.nwpu.edu.cn/'>Northwestern Polytechnical University",
		"degree": "BA</a>",
		"location":"Xi'An, China",

		"majors": ["Electrical Engineering"],
		"dates": "2009-2013"

	}
	],

  "onlineCourses": [
  {
	  "title": "JavaScript Syntax",
	  "school": "Udacity",
	  "dates": 2015,
	  'url': '<a href="http://www.udacity.com">http://www.udacity.com</a>'
  },
	  {
		  "title": " Responsive Web Design Fundamentals",
		  "school": "Udacity",
		  "dates": 2015,
		  'url': '<a href="http://www.udacity.com">http://www.udacity.com</a>'
	  }



  ]
};



education.display = function () {
	for (s in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%",education.schools[s].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[s].degree);
		var formattedNameDegree = formattedName+formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[s].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[s].location);
		$(".education-entry:last").append(formattedLocation);
		for (major in education.schools[s].majors) {
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[s].majors[major]);
			$(".education-entry:last").append(formattedSchoolMajor);
		};
	}

	$("#education").append(HTMLonlineClasses);

	for (online in education.onlineCourses) {
		$("#education").append(HTMLonlineCourseStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[online].title);
		var formattedShool = HTMLonlineSchool.replace("%data%",education.onlineCourses[online].school);
		var formattedTitleSchool = formattedTitle + formattedShool;
		$(".education-entry:last").append(formattedTitleSchool);
		var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[online].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[online].url);
		$(".education-entry:last").append(formattedURL);


	}

};
education.display();
var work = {
	"jobs": {
		"employer": "<a href='http://www.zteusa.com/'>ZTE",
		"title": "Intern on TD-SCDMA</a>",
		"location": "Xi'An, China",
		"dates": "06.2012-07.2013",
		"description": " Learned knowledge about 3G network mainly focus on TD-SCDMA." +
		"and implemented voice and video communications between mobile phones."
	}
	
};
//work part
$("#workExperience").append(HTMLworkStart);
var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs.employer);
var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs.title);
var formattedEmployerTitle = formattedEmployer + formattedTitle;
$(".work-entry:last").append(formattedEmployerTitle);
var formattedLocation = HTMLschoolLocation.replace("%data%",work.jobs.location);
$(".work-entry:last").append(formattedLocation);
var formattedDates = HTMLworkDates.replace("%data%",work.jobs.dates);
$(".work-entry:last").append(formattedDates);
var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs.description);
$(".work-entry:last").append(formattedDescription);
//Name style change
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0]+" "+name[1];
}
$("#main").append(internationalizeButton);

//see map

$("#mapDiv").append(googleMap);
