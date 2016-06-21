
    	/************************
        	Element Variables
    	************************/

    	var $container = $("#container");

    	/************************
        	Animation Setup
    	************************/

    	/* Randomly generate an integer between two numbers. */
    	function r (min, max) {
    	    return Math.floor(Math.random() * (max - min + 1)) + min;
    	}

    	/* Query the window’s dimensions. */
    	var screenWidth = window.screen.availWidth,
    		screenHeight = window.screen.availHeight;

    	/* Define our z-axis animation range. */
    	var translateZMin = -725,
    		translateZMax = 600;

    	/**********************
    	    Circle Creation
    	**********************/


    		rectanglesHtml = "",
    		$rectangles = "";

//var wordArray=["this", "that","other"];

var wordText = "";
wordText += "biomarkers, dry bean, metabolome, rice bran, ammonia, deposition, emissions, methane, sensors";
wordText += ",economics, efficiency, energy, grain, model,enzymes, digestion, concentration, detection";
wordText += ",feed intake,Lactation,feed intake,heat stress,lactation,carcinogenesis,inflammation";
wordText += "metabolites, lipidomics,equipment, food properties, rheology, tribology, Tilapia, aquaculture,ingredients";
wordText += ",fishmeal,microalgae culture, Beef, Myoglobin, Protein";
wordText += ",catecholamines, insulin sensitivity, intrauterine, skeletal muscle, ,bombus, bumble bee, crithidia, parasite";
wordText += ",phytochemical, plant secondary metabolites, trypanosome, aggregates, carbon, carbon sequestration, cover crops, micro-CT scanning";
wordText += ",stable isotopes, ,celiac disease, dietary polyphenol, gliadin, intestinal permeability, protein-polyphenol interaction";
wordText += ",environmental toxins, lipid signaling, mammalian cell, mitochondria, toxicity, trichothecenes, yeast, antibodies, bovine leukemia;"
wordText += ",immune dysfunction, t cells, vaccine, R-plasmid, antibiotic resistance, plasmid";
wordText += ",Carduus nutans, biological control, climate change, phenology, weed management, isotopes, microbiome, nitrogen, nutrient use";
wordText += ",nutrient use efficiency, transcriptome, awareness, farmers market, low-income, urban,genetic architecture, maize, selection";
wordText += ",genotype, genetic, glycine max, herbivores, phytohormones, pollinators, soybean cyst nematodes";
wordText += ",soybeans, modeling, robotics, simulation, virtual";
wordText += ",biochemistry, metabolism, oomycete, pathogenesis, haustoria, fungus, necrotrophic effector, pathogen, wheat";
wordText += ",biosensors, conference, diagnosis, nanobiotechnology,fungicides, honey bee, nutrition, pollen, pollination, queen quality, royal jelly";
wordText += ",cattle, culicoides, livestock, overwintering, sheep";
wordText += ",Bayes, LaPlace, Shannon, Blei, Mimno, LDA, LSA, LSI, Newton, Boyd-Graber,D3";
// Let's make it bigger
wordText = wordText + wordText + wordText;

var wordArray = wordText.split(",");

var rectCount = wordArray.length;
//console.log(wordArray);
console.log(rectCount);
    	for (var i = 0; i < rectCount; i++) {
    		rectanglesHtml += "<div class='rectangle'>"+ wordArray[i]+"</div>";
    	}

    	$rectangles = $(rectanglesHtml);

    	/******************************
    	     Container Animation
    	******************************/

    	$container
    		.css("perspective-origin", screenWidth/2 + "px " + screenHeight/2 + "px")
    		.velocity(
    		{
    			perspective: [ 215, 50 ],
    			opacity: [ 0.90, 0.55 ]
    		}, {
    			duration: 4000,
    			loop: 10,
    			delay: 4000
    		});

    	/***************************
    	    Rectangles Animation
    	***************************/

    	$rectangles
    		.appendTo($container)
    		.velocity({
    			opacity: [
    				function() { return Math.random() },
    				function() { return Math.random() + 0.1 }
    			],
    			translateX: [
    				function() { return "+=" + r(-screenWidth/2.5, screenWidth/2.5) },
    				function() { return r(0, screenWidth) }
    			],
    			translateY: [
    				function() { return "+=" + r(-screenHeight/2.75, screenHeight/2.75) },
    				function() { return r(0, screenHeight) }
    			],
    			translateZ: [
    				function() { return "+=" + r(translateZMin, translateZMax) },
    				function() { return r(translateZMin, translateZMax) }
    			]
    		}, { duration: 6000 })
    		.velocity("reverse", { easing: "easeOutQuad" })
    		.velocity({ opacity: 0 }, 2000);
