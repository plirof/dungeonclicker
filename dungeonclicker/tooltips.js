$(function() {
	$("#coin-gui").hover(function() {
		var tooltip = "<h1>"+translate("Coin")+"</h1><p>"+translate("Use it to purchase and upgrade stuff.")+"</p>";
		if (dC.coin.length > 15) {
			tooltip += "<p>"+translate("Magnitude")+": <span class='coin'>10<sup>" + (dC.coin.length - 1) + "</sup><span class='symbol'>"+translate("g")+"</span></span></p>";
			tooltip += "<p>"+translate("Coin")+": <span class='coin'>" + dC["coin"].addCommas() + "<span class='symbol'>"+translate("g")+"</span></span></p>";
		}
		showTooltip(tooltip);
	}, function() {
		hideTooltip();
	});
	
	$("#unlock-gui").hover(function() { showTooltip("<h1>"+translate("Unlock features")+"</h1><p>"+translate("Acquire this amount of coin to unlock the next feature. This doesn't expend the money!")+"</p>"); }, function() { hideTooltip(); });
	
	$("#income-gui").hover(function() {
		updateIncome();
		var tooltip = "<h1>"+translate("Income")+"</h1><p>"+translate("You earn this much coin every second.")+"</p>";
		if (incomeMultiplier > 1) {
			tooltip += "<p>"+translate("Income multiplier")+": <span class='coin'>x" + incomeMultiplier + "</span></p>";
		}
		if (incomeIsBig) {
			tooltip += "<p>"+translate("Magnitude")+": <span class='coin'>10<sup>" + (income.length - 1) + "</sup><span class='symbol'>"+translate("g")+"</span></span></p>";
			tooltip += "<p>"+translate("Coin")+": <span class='coin'>" + income.addCommas() + "<span class='symbol'>"+translate("g")+"</span></span></p>";
		}
		showTooltip(tooltip);
	}, function() {
		hideTooltip();
	});
	
	$("#menu .button").hover(function() {
		var key = $(this).attr("data-key");
		showTooltip("<h1>" + key + "</h1><p>" + dCi["panels"][key]["desc"] + "</p><p><span class='tip'>Hotkey: " + dCi["panels"][key]["hotkey"] + "</span></p>");
	}, function() {
		hideTooltip(); 
	});
	
	$("#btnAdventure").hover(function() {
		var tooltip = "<h1>"+translate("Adventure")+"!</h1><p>"+translate("Go on an adventure and earn a small amount of coin.")+"</p>";
		
		var extraMultiplierA = 0;
		var extraMultiplierB = 0;
		
		if (hasBuff("Verdant Bead of the Windwalker")) {
			extraMultiplierA += 2;
			extraMultiplierB += 3;
		}
		if (hasBuff("Amber Bead of the Sandwalker")) {
			extraMultiplierA += 2;
			extraMultiplierB += 3;
		}
		if (hasBuff("Crimson Bead of the Flamewalker")) {
			extraMultiplierA += 3;
			extraMultiplierB += 4.5;
		}
		if (hasBuff("Azure Bead of the Rainwalker")) {
			extraMultiplierA += 3;
			extraMultiplierB += 4.5;
		}
		
		if (adventureBonusCoin > 0 || extraMultiplierA > 0) {
			tooltip += "<p>Bonus coin: ";
			
			if (adventureBonusCoin > 0) {
				tooltip += "<span class='coin'>" + adventureBonusCoin + "<span class='symbol'>"+translate("g")+"</span></span>";
			}
			if (adventureBonusCoin > 0 && extraMultiplierA > 0) {
				tooltip += " and ";
			}
			if (extraMultiplierA > 0) {
				tooltip += "between <span class='coin'>" + extraMultiplierA + "%</span> and <span class='coin'>" + extraMultiplierB + "%</span> of your income.";
			}

			tooltip += "</p>";
		}
		
		if (adventureMultiplier > 1) tooltip += "<p>"+translate("Multiplier")+": <span class='coin'>x" + adventureMultiplier + "</span></p>";
		
		showTooltip(tooltip);
	}, function() {
		hideTooltip(); 
	});
	
	$(document).on("mouseenter", "#buildings .element", function() {
		var key = $(this).attr("data-key");
		var tooltip = "<h1>" +translate(key) + "</h1>";
		tooltip += "<p>"+translate("Purchase this building and get coin every second.")+"</p>";
		tooltip += "<p>"+translate("Income")+": <span class='coin'>" + dCi["buildings"][key]["income"].toString().addCommas() + "<span class='symbol'>"+translate("g")+"</span></span> "+translate("per second each")+"</p>";
		tooltip += "<p>"+translate("Price")+": <span class='coin'>" + dC["buildings"][key]["p"].toString().addCommas() + "<span class='symbol'>"+translate("g")+"</span></span></p>";
		if (dCi["buildings"][key]["quote"] != "quote") {
			tooltip += "<p><em>" + dCi["buildings"][key]["quote"] + "</em></p>";
		}
		showTooltip(tooltip);
	});
	
	$(document).on("mouseenter", "#artifacts .element", function() {
		var key = $(this).attr("data-key");
		var tooltip = "<h1>" + translate(key) + "</h1>";
		tooltip += "<p>" + dCi["artifacts"][key]["text"] + "</p>";
		tooltip += "<p>"+translate("Price")+": <span class='coin'>" + dCi["artifacts"][key]["price"].addCommas() + "<span class='symbol'>"+translate("g")+"</span></span></p>";
		if (dCi["artifacts"][key]["quote"] != "quote") {
			tooltip += "<p><em>" + dCi["artifacts"][key]["quote"] + "</em></p>";
		}
		showTooltip(tooltip);
	});
	
	$(document).on("mouseleave", ".dcframe .element", function() {
		hideTooltip();
	});
	
	$(document).on("mouseenter", "#log-gui .gamename", function() {
		var tooltip = "<h1><span class='gamename'>Dungeon Clicker</span> v" + dCi.version + "</h1>";
		tooltip += "<p><em>" + dCi.quote + "</em></p>";
		showTooltip(tooltip);
	});
	$(document).on("mouseleave", "#log-gui .gamename", function() {
		hideTooltip();
	});
	
	$(document).on("mouseenter", "#log-gui .heroic", function() {
		var tooltip = "<h1>Heroic adventure</h1>";
		tooltip += "<p>This adventure gives 10 times more coin.</p>";
		showTooltip(tooltip);
	});
	$(document).on("mouseleave", "#log-gui .heroic", function() {
		hideTooltip();
	});
});

function showTooltip(tooltip) {
	$("#tooltip").html(tooltip);
	$("#tooltip").css("opacity", 1);
	$("#about").css("opacity", 0);
}

function hideTooltip() {
	$("#tooltip").css("opacity", 0);
	$("#about").css("opacity", 1);
}
