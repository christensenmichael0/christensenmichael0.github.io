var Projects = {
	"dataAnalyst": [{
		name: 'Investigate A Dataset',
		url: 'https://github.com/christensenmichael0/Titantic_Data_Analysis',
		image_src: 'dist/img/titanic-sinking-400small.jpg',
		description: "Went through the entire data analysis process, starting by posing a question and finished by sharing findings. Used vectorized operations in NumPy and Pandas to speed up data analysis code.",
		analysis_src: "https://christensenmichael0.github.io/project-pdf/Titanic_Analysis.pdf",
		code_src: "https://github.com/christensenmichael0/Titantic_Data_Analysis/blob/master/project_two.py"
	},
	{
		name: 'Wrangle OpenStreetMap Data',
		url: 'https://github.com/christensenmichael0/Open_Street_Map_Data_Wrangling',
		image_src: "dist/img/osm-400small.jpg",
		description: 'Utilized data munging techniques to clean OpenStreetMap data for Syracuse, New York. This entailed assessing the quality of the data for validity, accuracy, completeness, consistency and uniformity.',
		analysis_src: "https://christensenmichael0.github.io/project-pdf/OSM_Wrangling.pdf",
		code_src: "https://github.com/christensenmichael0/Open_Street_Map_Data_Wrangling/blob/master/syracuse_new_york_osm_project.py"
	},
	{
		name: 'Explore And Summarize Data',
		url: 'https://github.com/christensenmichael0/Exploratory-Data-Analysis-with-R',
		image_src: "dist/img/redwine-400small.jpg",
		description: "Used R and apply exploratory data analysis techniques to explore the " + 
		"<a href='https://github.com/christensenmichael0/Exploratory-Data-Analysis-with-R/blob/master/wineQualityReds.csv' download target='_blank'>" +
		"red wine dataset</a> for distributions, outliers, and anomalies. Determined the "+ 
		"relationships in one variable to multiple variables. Created polished graphics using ggplot2 package.",
		analysis_src: "https://christensenmichael0.github.io/project-pdf/Red_Wine_Analysis.pdf",
		code_src: "https://github.com/christensenmichael0/Exploratory-Data-Analysis-with-R/blob/master/Project_4.Rmd"
	},
	{
		name: 'Identify Fraud From Enron Email',
		url: 'https://github.com/christensenmichael0/Machine_Learning_Through_Enron_Fraud',
		image_src: "dist/img/Enron-400small.jpg",
		description: "Utilized Python's scikit-learn library to deploy supervised Machine " +
		"Learning Algorithms on the <a href='https://github.com/christensenmichael0/Machine_Learning_Through_Enron_Fraud/blob/master/my_dataset.pkl' download>" +
		"Enron financial and email dataset</a> to identify persons of interest. Implemented " +
		"feature scaling and text mining techniques. Made use of recursive feature selection " +
        "and model parameter tuning using exhaustive grid search. Ultimately applied cross-validation " +
		"operations on testing data to validate model performance metrics.",
		analysis_src: "https://christensenmichael0.github.io/project-pdf/Enron_Analysis.pdf",
		code_src: "https://github.com/christensenmichael0/Machine_Learning_Through_Enron_Fraud/blob/master/poi_id.py"
	},
	{
		name: 'Make Effective Data Visualization',
		url: 'https://christensenmichael0.github.io/Data_Visualization_with_d3.js',
		image_src: "dist/img/drunk-driving-400small.jpg",
		description: "<a href='https://christensenmichael0.github.io/Data_Visualization_with_d3.js' target='_blank'>" +
		"Visualized </a>the incidence of impaired driving death rate by US state using D3.js. " +
		"Chose optimal visual elements to encode data and increase its effectiveness. Incorporated " + 
		"interactive elements to engage the audience.",
		analysis_src: "https://christensenmichael0.github.io/project-pdf/Impaired_Driving_Analysis.pdf",
		code_src: "https://github.com/christensenmichael0/Data_Visualization_with_d3.js/blob/master/index.html"
	},
	{
		name: 'Design an A/B Test',
		url: 'https://github.com/christensenmichael0/Design_an_AB_Test',
		image_src: "dist/img/ab-testing-blog-400small.png",
		description: "Considered an actual A/B test that was run by Udacity. Selected, characterized, " +
		"and validated metrics to evaluate a proposed change. Determined the number of samples needed " +
		"and planned an appropriate duration for the experiment. Ultimately drew conclusions and recommended " +
		"whether or not to launch the change.",
		analysis_src: "https://christensenmichael0.github.io/project-pdf/AB_Testing_Analysis.pdf",
		code_src: "https://github.com/christensenmichael0/Design_an_AB_Test"
	}
	],
	"frontEnd": [{
		name: 'Build a Portfolio Site',
		url: 'https://christensenmichael0.github.io/Build_A_Portfolio_Site',
		image_src: 'dist/img/portfolio-400small.jpg',
		description: "Provided with a design mockup as a PDF-file, the goal was to replicate the " +
		"design in HTML and CSS. The final product is a responsive website built using Bootstrap that displays " +
		"images, descriptions, and links to various projects. Click " +
		"<a href='https://christensenmichael0.github.io/Build_A_Portfolio_Site' target='_blank'>here</a> to see the final product.",
		code_src: "https://github.com/christensenmichael0/Build_A_Portfolio_Site"
	},
	{
		name: 'Interactive Resume',
		url: 'https://github.com/christensenmichael0/Open_Street_Map_Data_Wrangling',
		image_src: "dist/img/resume-400small.jpg",
		description: "Developed an <a href='https://christensenmichael0.github.io/Build_Online_Resume' target='_blank'> " +
		"interactive resume </a> that consumes my content " +
		"from JavaScript object literals and dynamically displays the information with a provided template. " +
		"Objects, functions, conditionals, and control structures are used to compose the " +
		"content that will display on the webpage. JQuery DOM manipulation methods are employed " +
		"to interact with and modify elements.",
		code_src: "https://github.com/christensenmichael0/Build_Online_Resume"
	},
	{
		name: 'Classic Arcade Game Clone',
		url: 'https://github.com/christensenmichael0/Open_Street_Map_Data_Wrangling',
		image_src: "dist/img/frogger-400small.jpg",
		description: "Provided with visual assets and a game loop engine; the task was to " +
		"add a number of entities to the game including the player, characters, " +
		"and enemies in an effort to recreate the classic arcade game Frogger. A primary objective " +
		"of this project was to learn JavaScript's object oriented programming features to create " +
		"countless instances of similarly function objects. Click " +
		"<a href='https://christensenmichael0.github.io/Classic_Arcade_Game' target='_blank'>here</a> to play!",
		code_src: "https://github.com/christensenmichael0/Classic_Arcade_Game"
	},
	{
		name: 'Website Optimization',
		url: 'https://github.com/christensenmichael0/Open_Street_Map_Data_Wrangling',
		image_src: "dist/img/optimization-400small.jpg",
		description: "Improved a <a href='https://christensenmichael0.github.io/Website_Optimization' target='_blank'> " +
		"website</a> with a number of optimization " +
		"and performance-related issues so that it achieves a high target PageSpeed " +
		"score and runs at 60 frames per second. Used Grunt (JavaScript taskrunner) " +
		"to facilitate the build process.",
		code_src: "https://github.com/christensenmichael0/Website_Optimization"
	},
	{
		name: 'Neighborhood Map',
		url: 'https://github.com/christensenmichael0/Neighborhood_Map',
		image_src: "dist/img/meetup-400small.jpg",
		description: "Developed a single-page mapping "+ 
		"<a href='https://christensenmichael0.github.io/Neighborhood_Map' target='_blank'>application </a>" +
		"using Knockout JS featuring exercise meetups in and around Boston, Massachusetts. Built-in " +
		"functionalities include a search box and sliders to filter meetups by " +
		"date and distance from the center of the city. The Meetup API provides data to " +
		"the application.",
		code_src: "https://github.com/christensenmichael0/Neighborhood_Map"
	},
	{
		name: 'Feed Reader Testing',
		url: 'https://github.com/christensenmichael0/javascript_testing_with_jasmine',
		image_src: "dist/img/jasmine_testing-400small.jpg",
		description: "Provided with a web-based application that reads RSS feeds the task was to complete the Jasmine test suite " + 
		"to ensure the functionality of the webpage. This workflow is consistent with the red, green, refactor approach in test driven development. " +
		"The final page with output from Jasmine can be viewed " +
		"<a href='https://christensenmichael0.github.io/javascript_testing_with_jasmine' target='_blank'>here</a>.",
		code_src: "https://github.com/christensenmichael0/javascript_testing_with_jasmine"
	},
	],
	"personal": [
	{
		name: 'Visualizing Shipping Data',
		url: 'https://github.com/christensenmichael0/RouteWatch',
		image_src: 'dist/img/AIS_image-400small.jpg',
		description: "Using Python: parse, filter, sort, and group 16 hours (233,604 records) worth of " +
		"satellite-AIS data in the Gulf of Mexico. Extract the number of passenger, cargo, and tanker " +
		"vessels underway and <a href='https://christensenmichael0.github.io/AIS_map/' target='_blank'> " +
		"visualize </a> their routes. This work is serving as a feasibility study for the development of " +
		"a new product line leveraging data and software tools from both Horizon Marine and Collecte " +
		"Localisation Satellites (CLS)." ,
		analysis_src: "",
		code_src: "https://github.com/christensenmichael0/RouteWatch/blob/master/ais_cleaning_script.py"
	},
	{
		name: 'Optimal Routing Animation',
		url: 'https://github.com/christensenmichael0/RouteWatch',
		image_src: 'dist/img/rig_tow-400small.jpg',
		description: "Utilized various Python packages including NumPy and MatplotLib Basemap to develop " +
		"a high-quality optimal routing " +
		"<a href='https://christensenmichael0.github.io/animation/' target='_blank'>animation</a> " + 
		"to serve as a marketing tool for Horizon Marine's vessel routing service " +
		" <a id='hmi-ref' href='http://www.horizonmarine.com/routewatch.html' target='_blank'>" +
		"(RouteWatch)</a>.",
		analysis_src: "",
		code_src: "https://github.com/christensenmichael0/RouteWatch/blob/master/RW_frame_generator.py"
	}
	]
	}


var Project = function(data) {
	//Sets all variables to a ko.observable that changes when project changes
	this.name = ko.observable(data.name);
	this.url = ko.observable(data.url);
	this.image_src = ko.observable(data.image_src);
	this.description = ko.observable(data.description);
	this.analysis_src = ko.observable(data.analysis_src);
	this.code_src = ko.observable(data.code_src);
	
}

var ViewModel = function() {
	//Makes sure 'self' always refers to ViewModel
	var self = this;

	//Creates an empty array to hold project objects
	this.dataProjectList = ko.observableArray([]);
	this.fendProjectList = ko.observableArray([]);
	this.personalProjectList = ko.observableArray([]);
	
	//Adds each project to the array projectList
	Projects['dataAnalyst'].forEach(function(project){
		self.dataProjectList.push( new Project(project) );
	});
	
	Projects['frontEnd'].forEach(function(project){
		self.fendProjectList.push( new Project(project) );
	});
	
	Projects['personal'].forEach(function(project){
		self.personalProjectList.push( new Project(project) );
	});
	
	//Picks the first project to display on page load
	this.currentDataProject = ko.observable( this.dataProjectList()[0]);	
	this.currentFendProject = ko.observable( this.fendProjectList()[0]);
	this.currentPersonalProject = ko.observable( this.personalProjectList()[0]);
	
	this.setDataProject = function(clickedProject) {
		self.currentDataProject(clickedProject)
	};
	
	this.setFendProject = function(clickedProject) {
		self.currentFendProject(clickedProject)
	};
	
	this.setPersonalProject = function(clickedProject) {
		self.currentPersonalProject(clickedProject)
	};
	
};

ko.applyBindings(new ViewModel())