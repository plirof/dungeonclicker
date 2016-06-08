//Translate 
//v003 -20160608
//

function translate(word) {

var translation_table=new Map();

//building names
translation_table.set("Tavern",		"Ταβέρνα");
translation_table.set("Orchard",		"Orchard");
translation_table.set("Butcher shop",	"Χασάπης");
translation_table.set("Farm",			"Φάρμα");
translation_table.set("Granite quarry","Granite quarry");
translation_table.set("Vineyard",		"Αμπέλι");
translation_table.set("Inn",			"Πανδοχείο");
translation_table.set("Copper mine",	"Ορυχείο Χαλκού");
translation_table.set("Archery range","Archery range");
translation_table.set("Blacksmith",	"Σιδηρουργός");
translation_table.set("Iron mine",	"Iron mine");
translation_table.set("Item shop",	"Item shop");
translation_table.set("Alchemy lab",	"Alchemy lab");
translation_table.set("Silver mine",	"Ορυχείο Ασημιού");
translation_table.set("Martial training hall",	"Martial training hall");
translation_table.set("Coliseum",		"Coliseum");
translation_table.set("Gold mine",	"Χρυσορυχείο");
translation_table.set("Rogue academy","Rogue academy");
translation_table.set("Airship dock",	"Airship dock");
translation_table.set("Gladiator arena","Αρένα μονομάχων");
translation_table.set("Arcane university",	"Arcane university");
translation_table.set("Magic item emporium", 	"Magic item emporium");
translation_table.set("Mercantile city-state",	"Mercantile city-state");
translation_table.set("Dragon garden","Dragon garden");
translation_table.set("Adventurers guild","Adventurers guild");
translation_table.set("Golemworks",	 "Golemworks");
translation_table.set("Astral gate",	"Αστρική Πύλη");
translation_table.set("Planar fortress-ship",	"Planar fortress-ship");
translation_table.set("Mana generator",	"Mana generator");
translation_table.set("Infinite library",	 "Infinite library");
translation_table.set("Chronospire",	 "Chronospire");
translation_table.set("Soulwell",	 	"Πηγάδι των ψυχών");
translation_table.set("Forge of realities", "Forge of realities");
translation_table.set("Artificial deification lab","Artificial deification lab");

//artifactes names
translation_table.set("Horseshoe", "Πέταλο");
translation_table.set("Rabbit's Foot","Λαγοπόδαρο");
translation_table.set("Nazar","");
translation_table.set("Lucky Hand", "Τυχερό χέρι");
translation_table.set("Coin Charm","");
translation_table.set("Golden Rose Clover", "");
translation_table.set("Animal Messenger", "");

translation_table.set("Alchemist's Kit", "Κιτ του αλχιμιστή");
translation_table.set("Philosophic Mercury","Philosophic Mercury");
translation_table.set("Philosopher's Stone","Φιλοσοφική λίθος");

translation_table.set("Verdant Bead of the Windwalker","");
translation_table.set("Amber Bead of the Sandwalker", "");
translation_table.set("Crimson Bead of the Flamewalker","");
translation_table.set("Azure Bead of the Rainwalker", "");

translation_table.set("Boots of Alacrity", "");

translation_table.set("Book of Aresius", "");
translation_table.set("Book of Antonidas", "");

translation_table.set("Brooch of the Prosperous Adventurer", "");
translation_table.set("Pendant of the Prosperous Adventurer", "");
translation_table.set("Necklace of the Prosperous Adventurer", "");
translation_table.set("Gloves of the Prosperous Adventurer", "");
translation_table.set("Cape of the Prosperous Adventurer", "");
translation_table.set("Talon of the Harpy","");
translation_table.set("Eye of the Cockatrice", "");
translation_table.set("Sting of the Wyvern", "");
translation_table.set("Claw of the Sphynx","");
translation_table.set("Left Horn of Mammorus", "");
translation_table.set("Right Horn of Mammorus", "");
translation_table.set("Scale of the Drake", "");
translation_table.set("Spike of the Basilisk", "");
translation_table.set("Tooth of the Manticore", "");
translation_table.set("Heart of the Kraken", "");
translation_table.set("Left Tusk of the Tarrasque","");
translation_table.set("Right Tusk of the Tarrasque", "");
translation_table.set("Ring of Luck", "");

//building descriptions

//artifactes descriptions

//Fights


//races = new Array();
translation_table.set("a bugbear","");
translation_table.set("a dark elf","");
translation_table.set("a duergar","");
translation_table.set("a ghoul","");
translation_table.set("a gnoll","");
translation_table.set("a goblin","");
translation_table.set("a hobgoblin","");
translation_table.set("a kobold","");
translation_table.set("a lizardman","");
translation_table.set("a troglodyte","");
translation_table.set("a troll","");
translation_table.set("a werewolf","");
translation_table.set("an orc","");
translation_table.set("an owlbear","");
translation_table.set("an undead","");

//gFolks = new Array();
translation_table.set("dwarves","");
translation_table.set("elves","");
translation_table.set("gnomes","");
translation_table.set("grey elves","");
translation_table.set("halflings","");
translation_table.set("high elves","");
translation_table.set("humans","");
translation_table.set("wood elves","");

//bFolks = new Array();
translation_table.set("bugbears","");
translation_table.set("dark elves","");
translation_table.set("gnolls","");
translation_table.set("goblins","");
translation_table.set("hobgoblins","");
translation_table.set("kobolds","");
translation_table.set("lizardmen","");
translation_table.set("orcs","");
translation_table.set("owlbears","");
translation_table.set("shadow dwarves","");
translation_table.set("troglodytes","");
translation_table.set("trolls","");

//classes = new Array();
translation_table.set("animist","");
translation_table.set("arcanist","");
translation_table.set("archer","");
translation_table.set("assassin","");
translation_table.set("bandit","");
translation_table.set("bloodmage","");
translation_table.set("chieftain","");
translation_table.set("dervish","");
translation_table.set("diabolist","");
translation_table.set("elementalist","");
translation_table.set("fighter","");
translation_table.set("hunter","");
translation_table.set("illusionist","");
translation_table.set("lancer","");
translation_table.set("magus","");
translation_table.set("marauder","");
translation_table.set("rager","");
translation_table.set("raider","");
translation_table.set("ranger","");
translation_table.set("ravager","");
translation_table.set("rider","");
translation_table.set("rogue","");
translation_table.set("scourge","");
translation_table.set("scout","");
translation_table.set("seer","");
translation_table.set("sentinel","");
translation_table.set("shadowblade","");
translation_table.set("shaman","");
translation_table.set("sorcerer","");
translation_table.set("spiritualist","");
translation_table.set("stalker","");
translation_table.set("thief","");
translation_table.set("warchanter","");
translation_table.set("warlock","");
translation_table.set("warlord","");
translation_table.set("warmaster","");
translation_table.set("warpriest","");
translation_table.set("warrior","");
translation_table.set("witch","");
translation_table.set("wizard","");

//prefixes = new Array();
translation_table.set("blade","");
translation_table.set("blink","");
translation_table.set("blood","");
translation_table.set("carnivorous","");
translation_table.set("darkspire","");
translation_table.set("dire","");
translation_table.set("dragon","");
translation_table.set("fire","");
translation_table.set("firethorn","");
translation_table.set("giant","");
translation_table.set("hell","");
translation_table.set("horned","");
translation_table.set("monstruous","");
translation_table.set("nightmare","");
translation_table.set("nightshade","");
translation_table.set("shadowleap","");
translation_table.set("shadowthorn","");
translation_table.set("shark","");
translation_table.set("spiked","");
translation_table.set("thornskin","");
translation_table.set("thundercry","");
translation_table.set("vilethorn","");
translation_table.set("wraitheye","");

//colors = new Array();
translation_table.set("red","");
translation_table.set("orange","");
translation_table.set("yellow","");
translation_table.set("green","");
translation_table.set("blue","");
translation_table.set("purple","");
translation_table.set("crimson","");
translation_table.set("lime","");
translation_table.set("brown","");
translation_table.set("black","");

//pests = new Array();
translation_table.set("toad","");
translation_table.set("frog","");
translation_table.set("lizard","");
translation_table.set("snake","");
translation_table.set("scorpion","");
translation_table.set("spider","");
translation_table.set("moth","");
translation_table.set("beetle","");
translation_table.set("worm","");
translation_table.set("centipede","");
translation_table.set("bee","");
translation_table.set("mosquito","");
translation_table.set("hornet","");
translation_table.set("cockroach","");
translation_table.set("dragonfly","");
translation_table.set("butterfly","");
translation_table.set("snail","");
translation_table.set("slug","");
translation_table.set("caterpillar","");
translation_table.set("ant","");
translation_table.set("weevil","");
translation_table.set("locust","");
translation_table.set("bat","");
translation_table.set("rat","");
translation_table.set("muskrat","");
translation_table.set("groundhog","");
translation_table.set("prairie dog","");
translation_table.set("ferret","");
translation_table.set("gopher","");
translation_table.set("squirrel","");
translation_table.set("mole","");
translation_table.set("beaver","");
translation_table.set("chipmunk","");
translation_table.set("marmot","");
translation_table.set("raccoon","");

//fears = new Array();
translation_table.set("being eaten by","");
translation_table.set("being bitten by","");
translation_table.set("being killed by","");
translation_table.set("being licked by","");
translation_table.set("being alone with","");
translation_table.set("being watched by","");

//pets = new Array();
translation_table.set("cat","");
translation_table.set("cow","");
translation_table.set("dog","");
translation_table.set("hound","");
translation_table.set("donkey","");
translation_table.set("horse","");
translation_table.set("kitten","");
translation_table.set("mule","");
translation_table.set("pig","");
translation_table.set("puppy","");
translation_table.set("rooster","");
translation_table.set("hen","");
translation_table.set("sheep","");

//fish = new Array();
translation_table.set("alewife","");
translation_table.set("angelfish","αγγελόψαρο");
translation_table.set("bass","");
translation_table.set("carp","κυπρίνος");
translation_table.set("catfish","γατόψαρο");
translation_table.set("cod","μπακαλιάρος");
translation_table.set("dogfish","σκυλόψαρο");
translation_table.set("eel","χέλι");
translation_table.set("perch","πέρκα");
translation_table.set("salmon","σολομός");

//game = new Array();
translation_table.set("duck","πάπια");
translation_table.set("partridge","");
translation_table.set("hare","");
translation_table.set("deer","");
translation_table.set("quail","");

//objects = new Array();
translation_table.set("doghouse","");
translation_table.set("house","");
translation_table.set("wagon","");
translation_table.set("fence","");
translation_table.set("water well","");
translation_table.set("hayloft","");
translation_table.set("pigpen","");
translation_table.set("stable","");
translation_table.set("pen","");
translation_table.set("barn","");

//adventurers = new Array();
translation_table.set("barbarian","");
translation_table.set("bard","");
translation_table.set("cavalier","");
translation_table.set("changeling","");
translation_table.set("cleric","");
translation_table.set("dark elf","");
translation_table.set("druid","");
translation_table.set("dwarf","");
translation_table.set("gnome","");
translation_table.set("goliath","");
translation_table.set("grey elf","");
translation_table.set("half-elf","");
translation_table.set("halfling","");
translation_table.set("half-orc","");
translation_table.set("high elf","");
translation_table.set("knight","");
translation_table.set("mage","");
translation_table.set("monk","");
translation_table.set("paladin","");
translation_table.set("priest","");
translation_table.set("ranger","");
translation_table.set("sorcerer","");
translation_table.set("swordmage","");
translation_table.set("warmage","");
translation_table.set("warpriest","");
translation_table.set("warrior","");
translation_table.set("wizard","");
translation_table.set("wood elf","");

//questgivers = new Array();
translation_table.set("an old elf","");
translation_table.set("an old dwarf","");
translation_table.set("an old halfling","");
translation_table.set("an old gnome","");
translation_table.set("an old man","");
translation_table.set("an old woman","");
translation_table.set("an old lady","");
translation_table.set("an old witch","");
translation_table.set("a city guard","");
translation_table.set("a mage","");
translation_table.set("a sage","");
translation_table.set("a wizard","");
translation_table.set("a cleric","");
translation_table.set("a priest","");
translation_table.set("a merchant","");
translation_table.set("a fortuneteller","");
translation_table.set("a gypsy","");
translation_table.set("a mysterious traveler","");
translation_table.set("a mysterious man","");
translation_table.set("a suspicious man","");
translation_table.set("a mysterious woman","");
translation_table.set("a suspicious woman","");
translation_table.set("a noble","");
translation_table.set("a noble woman","");

//spellcasters = new Array();
translation_table.set("bloodmage","");
translation_table.set("mage","");
translation_table.set("sorcerer","");
translation_table.set("warlock","");
translation_table.set("witch","");
translation_table.set("wizard","");

//drinks = new Array();
translation_table.set("ale","");
translation_table.set("beer","");
translation_table.set("cider","");
translation_table.set("juice","");
translation_table.set("mead","");
translation_table.set("milk","");
translation_table.set("tea","");
translation_table.set("water","");
translation_table.set("wine","");

//food = new Array();
translation_table.set("porridge","");
translation_table.set("vegetables","");
translation_table.set("fish","");
translation_table.set("meat","");
translation_table.set("bread","");
translation_table.set("chicken","");

//toys = new Array();
translation_table.set("toy sword","");
translation_table.set("toy wand","");
translation_table.set("toy shield","");
translation_table.set("bear","");
translation_table.set("wood ball","");

//gatherables = new Array();
translation_table.set("feathers","");
translation_table.set("walnuts","");
translation_table.set("berries","");
translation_table.set("sea shells","");
translation_table.set("spider silk","");
translation_table.set("spider eyes","");
translation_table.set("spider legs","");
translation_table.set("scorpion stingers","");
translation_table.set("skins","");
translation_table.set("pelts","");
translation_table.set("hides","");
translation_table.set("roots","");
translation_table.set("herbs","");
translation_table.set("bat guano","");

//deliverables = new Array();
translation_table.set("box","");
translation_table.set("crate","");
translation_table.set("message","");
translation_table.set("letter","");
translation_table.set("package","");

//containers = new Array();
translation_table.set("a wooden box","");
translation_table.set("a keg","");
translation_table.set("a barrel","");
translation_table.set("an old crate","");
translation_table.set("an old trunk","");

//relatives = new Array();
translation_table.set("brother","αδελφός");
translation_table.set("sister","αδελφή");
translation_table.set("cousin","ξάδελφος");
translation_table.set("uncle","θείος");
translation_table.set("aunt","θεία");
translation_table.set("twin","δίδιμος");

//posesives = new Array();
translation_table.set("his","");
translation_table.set("her","");

//contests = new Array();
translation_table.set("a brawling","καυγά");
translation_table.set("an eating","φαγητού");
translation_table.set("a drinking","ποτού");
translation_table.set("a swordplay","ξιφομαχίας");
translation_table.set("a fighting","πάλης");


var translated_text=translation_table.get(word);

if(!translated_text) return word;
return translated_text;

}

