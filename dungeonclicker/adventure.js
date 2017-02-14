var adventureBonusCoin = 0;
var adventureMultiplier = 0;
var quests = new Array();
var heroicQuests = new Array();
var hQC = 0;
var hideBGHandle;
var showBGHandle;

function initAdventurePanel() {
	$("#btnAdventure").hover(function() {
		if (dC["options"]["ShowAdventureLight"] == false) return;
		$("#light").css("opacity", 1);
	}, function() {
		$("#light").css("opacity", 0);
	});
	
	$("#btnAdventure").mousedown(function() {
		if (hasBuff("Boots of Alacrity")) adventure();
	});
	
	$("#btnAdventure").mouseup(function() {
		adventure();
	});
}

function showAdventurePanel() {
	$("#bg-texture").css("background-color", "#753EBB");
}

function updateAdventureMultiplier() {
	adventureBonusCoin = 0;
	adventureMultiplier = 1;
	
	if (hasBuff("Horseshoe")) adventureBonusCoin += 1;
	if (hasBuff("Rabbit's Foot")) adventureBonusCoin += 1;
	if (hasBuff("Nazar")) adventureBonusCoin += 1;
	if (hasBuff("Lucky Hand")) adventureBonusCoin += 1;
	if (hasBuff("Coin Charm")) adventureBonusCoin += 1;
	if (hasBuff("Golden Rose Clover")) adventureBonusCoin += 5;

	if (hasBuff("Brooch of the Prosperous Adventurer")) adventureMultiplier += 0.05;
	if (hasBuff("Pendant of the Prosperous Adventurer")) adventureMultiplier += 0.1;
	if (hasBuff("Necklace of the Prosperous Adventurer")) adventureMultiplier += 0.15;
	if (hasBuff("Gloves of the Prosperous Adventurer")) adventureMultiplier += 0.2;
	if (hasBuff("Cape of the Prosperous Adventurer")) adventureMultiplier += 0.25;
}

function adventure() {
	var coin = randomBetween(1, 3) + adventureBonusCoin;
	
	if (hasBuff("Verdant Bead of the Windwalker")) coin += randomBetween(Math.ceil(multiplyNumbers(income, 0.005)), Math.ceil(multiplyNumbers(income, 0.01)));
	if (hasBuff("Amber Bead of the Sandwalker")) coin += randomBetween(Math.ceil(multiplyNumbers(income, 0.005)), Math.ceil(multiplyNumbers(income, 0.01)));
	if (hasBuff("Crimson Bead of the Flamewalker")) coin += randomBetween(Math.ceil(multiplyNumbers(income, 0.01)), Math.ceil(multiplyNumbers(income, 0.025)));
	if (hasBuff("Azure Bead of the Rainwalker")) coin += randomBetween(Math.ceil(multiplyNumbers(income, 0.01)), Math.ceil(multiplyNumbers(income, 0.025)));
	
	if (adventureMultiplier > 1) coin = Math.ceil(multiplyNumbers(coin, adventureMultiplier));
	
	var heroicProbability = 0;
	if (hasBuff("Book of Aresius")) heroicProbability++;
	if (hasBuff("Book of Antonidas")) heroicProbability++;
	
	if (randomBetween(1, 100) <= heroicProbability && hQC >= 10) {
		hQC = 0;
		coin = multiplyNumbers(coin, 10);
		if (heroicQuests.length < 1) {
			generateHeroicQuests();
		}
		quest = heroicQuests.splice(Math.floor(Math.random() * heroicQuests.length), 1);
	}
	else {
		hQC++;
		if (quests.length < 1) {
			generateQuests();
		}
		quest = quests.splice(Math.floor(Math.random() * quests.length), 1);
	}
	
	quest = quest[0].replace("#coin#", coin.addCommas() + "<span class='symbol'>g</span>");
	
	toLog(quest);
	addCoin(coin);
	
	// Spawn particles
	var p = randomBetween(1, 3);
	if (hasBuff("Golden Rose Clover") && dC["options"]["AdditionalParticles"] == true) p += 3;
	
	spawnParticles("coin", p);
}

function generateHeroicQuests() {
	heroicQuests = new Array();
	if (hasBuff("Book of Aresius")) {
		heroicQuests.push(translate("You ")+translate("<span class='heroic'>")+translate("open the Gate of Hope")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		heroicQuests.push(translate("You ")+translate("<span class='heroic'>")+translate("defeat the Krakhon army")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		heroicQuests.push(translate("You ")+translate("<span class='heroic'>")+translate("destroy the Chalice of Agony")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		heroicQuests.push(translate("You ")+translate("<span class='heroic'>")+translate("discover the Elvenpath")+translate("</span>! ")+translate("You find ")+"<span class='coin'>#coin#</span>.");
		heroicQuests.push(translate("You ")+translate("<span class='heroic'>")+translate("unchain Arwald's soul")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		heroicQuests.push(translate("You ")+translate("<span class='heroic'>")+translate("protect Village Lanterne")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		heroicQuests.push(translate("You ")+translate("<span class='heroic'>")+translate("vanquish the Blackbird Nation")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		heroicQuests.push(translate("You ")+translate("<span class='heroic'>")+translate("face the Thing that Should Not Be")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
	}
	if (hasBuff("Book of Antonidas")) {
		heroicQuests.push(translate("You ")+translate("<span class='heroic'>")+translate("cleanse the world of the Corruption")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		heroicQuests.push(translate("You ")+translate("<span class='heroic'>")+translate("slay the Ender Dragon")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		heroicQuests.push(translate("You ")+translate("<span class='heroic'>")+translate("slay the Czar Dragon")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		heroicQuests.push(translate("You ")+translate("<span class='heroic'>")+translate("close the Dark Portal")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		heroicQuests.push(translate("You ")+translate("<span class='heroic'>")+translate("explore Turtle Rock")+translate("</span>! ")+translate("You find ")+"<span class='coin'>#coin#</span>.");
		heroicQuests.push(translate("You ")+translate("<span class='heroic'>")+translate("climb the Endless Tower")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		heroicQuests.push(translate("You ")+translate("<span class='heroic'>")+translate("raid the Veriil dungeon")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		heroicQuests.push(translate("You ")+translate("<span class='heroic'>")+translate("mend the leg of a black mare")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
	}
}

function generateQuests() {
		for (var i = 0; i < 15; i++) {
			quests.push(translate("You ")+translate("<span class='xp'>")+translate("slay ") + translate(getRandom(races)) + translate(" ") + translate(getRandom(classes)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
			quests.push(translate("You ")+translate("<span class='xp'>")+translate("slay a ") + translate(getRandom(prefixes)) + translate(" ") + translate(getRandom(pests)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
			quests.push(translate("You ")+translate("<span class='xp'>")+translate("gather some ") + translate(getRandom(gatherables)) + translate(" for ") + translate(getRandom(questgivers)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		}
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("help fend off ") + translate(getRandom(races)) + translate(" incursion")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("stop the century-old war between ") + translate(getRandom(gFolks)) + translate(" and ") + translate(getRandom(bFolks)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("help stop a ") + translate(getRandom(prefixes)) + translate(" ") + translate(getRandom(pests)) + translate(" invasion")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("help catch ") + translate(getRandom(races)) + translate(" ") + translate(getRandom(classes)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("unravel ") + translate(getRandom(questgivers)) + translate("'s evil plans")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("unmask a ") + translate(getRandom(adventurers)) + translate("'s true intentions")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("thwart the heinous plans of an evil ") + translate(getRandom(adventurers)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("expose a treacherous ") + translate(getRandom(adventurers)) + translate("'s agreement with ") + translate(getRandom(races)) + translate(" ") + translate(getRandom(spellcasters)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("stop an evil ") + translate(getRandom(spellcasters)) + translate("'s ritual")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("hunt down a rogue ") + translate(getRandom(spellcasters)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("recover an ancient relic from the hands of an evil ") + translate(getRandom(spellcasters)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("scort ") + translate(getRandom(questgivers)) + translate(" through the wilderness")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("slay a ") + translate(getRandom(colors)) + translate(" slime")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("slay a ") + translate(getRandom(colors)) + translate(" jelly")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("paint a ") + translate(getRandom(objects)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("fix a ") + translate(getRandom(objects)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("help rebuild a ") + translate(getRandom(objects)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("find a lost ") + translate(getRandom(pets)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("rescue a ") + translate(getRandom(pets)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("find a little boy's ") + translate(getRandom(toys)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("bathe a ") + translate(getRandom(prefixes)) + translate(" ") + translate(getRandom(pets)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("help treat a ") + translate(getRandom(spellcasters)) + translate("'s ") + translate(getRandom(prefixes)) + translate(" ") + translate(getRandom(pets)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("fish a ") + translate(getRandom(prefixes)) + translate(" ") + translate(getRandom(fish) + "")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("hunt a ") + translate(getRandom(prefixes)) + translate(" ") + translate(getRandom(game) + "")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("catch a ") + translate(getRandom(prefixes)) + translate(" ") + translate(getRandom(pests)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("get some ") + translate(getRandom(drinks)) + translate(" for a thirsty ") + translate(getRandom(adventurers)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("get some ") + translate(getRandom(food)) + translate(" for a hungry ") + translate(getRandom(adventurers)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("help a housewive cook some ") + translate(getRandom(food)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("help a ") + translate(getRandom(spellcasters)) + translate(" research a new spell")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("help celebrate a ") + translate(getRandom(adventurers)) + translate("'s birthday")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("help a ") + translate(getRandom(adventurers)) + translate(" get a girlfriend")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("help a ") + translate(getRandom(adventurers)) + translate(" find inner peace")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("find ") + translate(getRandom(questgivers)) + translate("'s lost sack of ") + translate(getRandom(gatherables)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("solve ") + translate(getRandom(questgivers)) + translate("'s ") + translate(getRandom(pests)) + translate(" problem")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("help a ") + translate(getRandom(adventurers)) + translate(" reforge an ancient artifact")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("help a ") + translate(getRandom(adventurers)) + translate(" kill a dire ") + translate(getRandom(pests)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("help a ") + translate(getRandom(adventurers)) + translate(" complete a quest")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("help a ") + translate(getRandom(adventurers)) + translate(" find ") + translate(getRandom(posesives)) + translate(" lost ") + translate(getRandom(relatives)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("help a young ") + translate(getRandom(adventurers)) + translate(" confront ") + translate(getRandom(posesives)) + translate(" father")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("help a shy ") + translate(getRandom(adventurers)) + translate(" overcome ") + translate(getRandom(posesives)) + translate(" awkwardness")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("help a ") + translate(getRandom(adventurers)) + translate(" avenge ") + translate(getRandom(posesives)) + translate(" ") + translate(getRandom(relatives)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("help a ") + translate(getRandom(adventurers)) + translate(" rescue ") + translate(getRandom(posesives)) + translate(" party")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("help a novice ") + translate(getRandom(adventurers)) + translate(" pass ") + translate(getRandom(posesives)) + translate(" test")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("rescue a ") + translate(getRandom(spellcasters)) + translate("'s ") + translate(getRandom(pests)) + translate(" familiar")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("end a dispute between a ") + translate(getRandom(adventurers)) + translate(" and ") + translate(getRandom(races)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("clear an innocent ") + translate(getRandom(adventurers)) + translate("'s name")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("redeem an old ") + translate(getRandom(adventurers)) + translate(" before ") + translate(getRandom(posesives)) + translate(" death")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("stop an assassination plot against an important ") + translate(getRandom(adventurers)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("deliver a ") + translate(getRandom(deliverables)) + translate(" for ") + translate(getRandom(questgivers)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("look inside ") + translate(getRandom(containers)) + translate("")+translate("</span>! ")+translate("You find ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("solve the riddle of an eccentric ") + translate(getRandom(spellcasters)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("conquer your fear of ") + translate(getRandom(fears)) + translate(" a ") + translate(getRandom(prefixes)) + translate(" ") + translate(getRandom(pests)) + translate("")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("win ") + translate(getRandom(contests)) + translate(" contest")+translate("</span>! ")+translate("The prize is ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("play dice with ") + translate(getRandom(races)) + translate("")+translate("</span>! ")+translate("You win ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("play cards with ") + translate(getRandom(races)) + translate("")+translate("</span>! ")+translate("You win ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("find the cure for a terrible plague")+translate("</span>! ")+translate("You earn ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("break a clay pot")+translate("</span>! ")+translate("You find ")+"<span class='coin'>#coin#</span>.");
		quests.push(translate("You ")+translate("<span class='xp'>")+translate("slice a bush")+translate("</span>! ")+translate("You find ")+"<span class='coin'>#coin#</span>.");
}

function getRandom(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}
