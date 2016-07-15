//Translate 
//v005 -20160608 object
//v004 -20160608
//v003 -20160608
//
var enable_translation=true;

function translate(word) {

var translation_table={};


translation_table["purchase!"]=		"Αγόρασε"   ;
translation_table["Purchased"]=		"Αγοράστηκε"   ;
translation_table["purchase!"]=		"Αγοράστηκε!"   ;
//building names

translation_table["Tavern"]=		"Ταβέρνα"   ;
translation_table["Orchard"]=		"Orchard"   ;
translation_table["Butcher shop"]=		"Χασάπης"   ;
translation_table["Farm"]=		"Φάρμα"   ;
translation_table["Granite quarry"]="Λατομείο γρανίτη"   ;
translation_table["Vineyard"]=		"Αμπέλι"   ;
translation_table["Inn"]=		"Πανδοχείο"   ;
translation_table["Copper mine"]=		"Ορυχείο Χαλκού"   ;
translation_table["Archery range"]="Χωρος τοξοβολίας"   ;
translation_table["Blacksmith"]=		"Σιδηρουργός"   ;
translation_table["Iron mine"]=		"Ορυχείο Σιδήρου"   ;
translation_table["Item shop"]=		"Μαγαζί"   ;
translation_table["Alchemy lab"]=		"Εγραστήριο αλχημιστή"   ;
translation_table["Silver mine"]=		"Ορυχείο Ασημιού"   ;
translation_table["Martial training hall"]=		"Martial training hall"   ;
translation_table["Coliseum"]=		"Coliseum"   ;
translation_table["Gold mine"]=		"Χρυσορυχείο"   ;
translation_table["Rogue academy"]="Rogue academy"   ;
translation_table["Airship dock"]=		"Airship dock"   ;
translation_table["Gladiator arena"]="Αρένα μονομάχων"   ;
translation_table["Arcane university"]=		"Πανεπιστήμιο μαγείας"   ;
translation_table["Magic item emporium"]=		"Magic item emporium"   ;
translation_table["Mercantile city-state"]=		"Mercantile city-state"   ;
translation_table["Dragon garden"]="Dragon garden"   ;
translation_table["Adventurers guild"]="Adventurers guild"   ;
translation_table["Golemworks"]=		"Golemworks"   ;
translation_table["Astral gate"]=		"Αστρική Πύλη"   ;
translation_table["Planar fortress-ship"]=		"Planar fortress-ship"   ;
translation_table["Mana generator"]=		"Mana generator"   ;
translation_table["Infinite library"]=		"Infinite library"   ;
translation_table["Chronospire"]=		"Chronospire"   ;
translation_table["Soulwell"]=		"Πηγάδι των ψυχών"   ;
translation_table["Forge of realities"]=		"Forge of realities"   ;
translation_table["Artificial deification lab"]="Artificial deification lab"   ;

//artifactes names
translation_table["Horseshoe"]=		"Πέταλο"   ;
translation_table["Rabbit's Foot"]="Λαγοπόδαρο"   ;
translation_table["Nazar"]=""   ;
translation_table["Lucky Hand"]=		"Τυχερό χέρι"   ;
translation_table["Coin Charm"]=""   ;
translation_table["Golden Rose Clover"]=		""   ;
translation_table["Animal Messenger"]=		""   ;

translation_table["Alchemist's Kit"]=		"Κιτ του αλχιμιστή"   ;
translation_table["Philosophic Mercury"]="Philosophic Mercury"   ;
translation_table["Philosopher's Stone"]="Φιλοσοφική λίθος"   ;

translation_table["Verdant Bead of the Windwalker"]=""   ;
translation_table["Amber Bead of the Sandwalker"]=		""   ;
translation_table["Crimson Bead of the Flamewalker"]=""   ;
translation_table["Azure Bead of the Rainwalker"]=		""   ;

translation_table["Boots of Alacrity"]=		""   ;

translation_table["Book of Aresius"]=		""   ;
translation_table["Book of Antonidas"]=		""   ;

translation_table["Brooch of the Prosperous Adventurer"]=		""   ;
translation_table["Pendant of the Prosperous Adventurer"]=		""   ;
translation_table["Necklace of the Prosperous Adventurer"]=		""   ;
translation_table["Gloves of the Prosperous Adventurer"]=		""   ;
translation_table["Cape of the Prosperous Adventurer"]=		""   ;
translation_table["Talon of the Harpy"]=""   ;
translation_table["Eye of the Cockatrice"]=		""   ;
translation_table["Sting of the Wyvern"]=		""   ;
translation_table["Claw of the Sphynx"]=""   ;
translation_table["Left Horn of Mammorus"]=		""   ;
translation_table["Right Horn of Mammorus"]=		""   ;
translation_table["Scale of the Drake"]=		""   ;
translation_table["Spike of the Basilisk"]=		""   ;
translation_table["Tooth of the Manticore"]=		""   ;
translation_table["Heart of the Kraken"]=		""   ;
translation_table["Left Tusk of the Tarrasque"]=""   ;
translation_table["Right Tusk of the Tarrasque"]=		""   ;
translation_table["Ring of Luck"]=		""   ;

//building descriptions

//artifactes descriptions

//Fights


//races = new Array(   ;
translation_table["a bugbear"]=""   ;
translation_table["a dark elf"]=""   ;
translation_table["a duergar"]=""   ;
translation_table["a ghoul"]=""   ;
translation_table["a gnoll"]=""   ;
translation_table["a goblin"]=""   ;
translation_table["a hobgoblin"]=""   ;
translation_table["a kobold"]=""   ;
translation_table["a lizardman"]=""   ;
translation_table["a troglodyte"]=""   ;
translation_table["a troll"]=""   ;
translation_table["λυκάνθρωπος"]=""   ;
translation_table["an orc"]=""   ;
translation_table["an owlbear"]=""   ;
translation_table["an undead"]=""   ;

//gFolks = new Array(   ;
translation_table["dwarves"]=""   ;
translation_table["elves"]=""   ;
translation_table["gnomes"]=""   ;
translation_table["grey elves"]=""   ;
translation_table["halflings"]=""   ;
translation_table["high elves"]=""   ;
translation_table["humans"]=""   ;
translation_table["wood elves"]=""   ;

//bFolks = new Array(   ;
translation_table["bugbears"]=""   ;
translation_table["dark elves"]="σκοτεινά ξωτικά"   ;
translation_table["gnolls"]=""   ;
translation_table["goblins"]=""   ;
translation_table["hobgoblins"]=""   ;
translation_table["kobolds"]=""   ;
translation_table["lizardmen"]=""   ;
translation_table["orcs"]=""   ;
translation_table["owlbears"]=""   ;
translation_table["shadow dwarves"]=""   ;
translation_table["troglodytes"]=""   ;
translation_table["trolls"]=""   ;

//classes = new Array(   ;
translation_table["animist"]=""   ;
translation_table["arcanist"]=""   ;
translation_table["archer"]=""   ;
translation_table["assassin"]=""   ;
translation_table["bandit"]=""   ;
translation_table["bloodmage"]=""   ;
translation_table["chieftain"]=""   ;
translation_table["dervish"]=""   ;
translation_table["diabolist"]=""   ;
translation_table["elementalist"]=""   ;
translation_table["fighter"]=""   ;
translation_table["hunter"]=""   ;
translation_table["illusionist"]=""   ;
translation_table["lancer"]=""   ;
translation_table["magus"]=""   ;
translation_table["marauder"]=""   ;
translation_table["rager"]=""   ;
translation_table["raider"]=""   ;
translation_table["ranger"]=""   ;
translation_table["ravager"]=""   ;
translation_table["rider"]=""   ;
translation_table["rogue"]=""   ;
translation_table["scourge"]=""   ;
translation_table["scout"]=""   ;
translation_table["seer"]=""   ;
translation_table["sentinel"]=""   ;
translation_table["shadowblade"]=""   ;
translation_table["shaman"]=""   ;
translation_table["sorcerer"]=""   ;
translation_table["spiritualist"]=""   ;
translation_table["stalker"]=""   ;
translation_table["thief"]=""   ;
translation_table["warchanter"]=""   ;
translation_table["warlock"]=""   ;
translation_table["warlord"]=""   ;
translation_table["warmaster"]=""   ;
translation_table["warpriest"]=""   ;
translation_table["warrior"]=""   ;
translation_table["witch"]=""   ;
translation_table["wizard"]=""   ;

//prefixes = new Array(   ;
translation_table["blade"]=""   ;
translation_table["blink"]=""   ;
translation_table["blood"]=""   ;
translation_table["carnivorous"]=""   ;
translation_table["darkspire"]=""   ;
translation_table["dire"]=""   ;
translation_table["dragon"]=""   ;
translation_table["fire"]=""   ;
translation_table["firethorn"]=""   ;
translation_table["giant"]=""   ;
translation_table["hell"]=""   ;
translation_table["horned"]=""   ;
translation_table["monstruous"]=""   ;
translation_table["nightmare"]=""   ;
translation_table["nightshade"]=""   ;
translation_table["shadowleap"]=""   ;
translation_table["shadowthorn"]=""   ;
translation_table["shark"]=""   ;
translation_table["spiked"]=""   ;
translation_table["thornskin"]=""   ;
translation_table["thundercry"]=""   ;
translation_table["vilethorn"]=""   ;
translation_table["wraitheye"]=""   ;

//colors = new Array(   ;
translation_table["red"]=""   ;
translation_table["orange"]=""   ;
translation_table["yellow"]=""   ;
translation_table["green"]=""   ;
translation_table["blue"]=""   ;
translation_table["purple"]=""   ;
translation_table["crimson"]=""   ;
translation_table["lime"]=""   ;
translation_table["brown"]=""   ;
translation_table["black"]=""   ;

//pests = new Array(   ;
translation_table["toad"]=""   ;
translation_table["frog"]=""   ;
translation_table["lizard"]=""   ;
translation_table["snake"]=""   ;
translation_table["scorpion"]=""   ;
translation_table["spider"]=""   ;
translation_table["moth"]=""   ;
translation_table["beetle"]=""   ;
translation_table["worm"]=""   ;
translation_table["centipede"]=""   ;
translation_table["bee"]=""   ;
translation_table["mosquito"]=""   ;
translation_table["hornet"]=""   ;
translation_table["cockroach"]=""   ;
translation_table["dragonfly"]=""   ;
translation_table["butterfly"]=""   ;
translation_table["snail"]=""   ;
translation_table["slug"]=""   ;
translation_table["caterpillar"]=""   ;
translation_table["ant"]=""   ;
translation_table["weevil"]=""   ;
translation_table["locust"]=""   ;
translation_table["bat"]=""   ;
translation_table["rat"]=""   ;
translation_table["muskrat"]=""   ;
translation_table["groundhog"]=""   ;
translation_table["prairie dog"]=""   ;
translation_table["ferret"]=""   ;
translation_table["gopher"]=""   ;
translation_table["squirrel"]=""   ;
translation_table["mole"]=""   ;
translation_table["beaver"]=""   ;
translation_table["chipmunk"]=""   ;
translation_table["marmot"]=""   ;
translation_table["raccoon"]=""   ;

//fears = new Array(   ;
translation_table["being eaten by"]=""   ;
translation_table["being bitten by"]=""   ;
translation_table["being killed by"]=""   ;
translation_table["being licked by"]=""   ;
translation_table["being alone with"]=""   ;
translation_table["being watched by"]=""   ;

//pets = new Array(   ;
translation_table["cat"]=""   ;
translation_table["cow"]=""   ;
translation_table["dog"]=""   ;
translation_table["hound"]=""   ;
translation_table["donkey"]=""   ;
translation_table["horse"]=""   ;
translation_table["kitten"]=""   ;
translation_table["mule"]=""   ;
translation_table["pig"]=""   ;
translation_table["puppy"]=""   ;
translation_table["rooster"]=""   ;
translation_table["hen"]=""   ;
translation_table["sheep"]=""   ;

//fish = new Array(   ;
translation_table["alewife"]=""   ;
translation_table["angelfish"]="αγγελόψαρο"   ;
translation_table["bass"]=""   ;
translation_table["carp"]="κυπρίνος"   ;
translation_table["catfish"]="γατόψαρο"   ;
translation_table["cod"]="μπακαλιάρος"   ;
translation_table["dogfish"]="σκυλόψαρο"   ;
translation_table["eel"]="χέλι"   ;
translation_table["perch"]="πέρκα"   ;
translation_table["salmon"]="σολομός"   ;

//game = new Array(   ;
translation_table["duck"]="πάπια"   ;
translation_table["partridge"]=""   ;
translation_table["hare"]=""   ;
translation_table["deer"]=""   ;
translation_table["quail"]=""   ;

//objects = new Array(   ;
translation_table["doghouse"]=""   ;
translation_table["house"]=""   ;
translation_table["wagon"]=""   ;
translation_table["fence"]=""   ;
translation_table["water well"]=""   ;
translation_table["hayloft"]=""   ;
translation_table["pigpen"]=""   ;
translation_table["stable"]=""   ;
translation_table["pen"]=""   ;
translation_table["barn"]=""   ;

//adventurers = new Array(   ;
translation_table["barbarian"]=""   ;
translation_table["bard"]=""   ;
translation_table["cavalier"]=""   ;
translation_table["changeling"]=""   ;
translation_table["cleric"]=""   ;
translation_table["dark elf"]=""   ;
translation_table["druid"]=""   ;
translation_table["dwarf"]=""   ;
translation_table["gnome"]=""   ;
translation_table["goliath"]=""   ;
translation_table["grey elf"]=""   ;
translation_table["half-elf"]=""   ;
translation_table["halfling"]=""   ;
translation_table["half-orc"]=""   ;
translation_table["high elf"]=""   ;
translation_table["knight"]=""   ;
translation_table["mage"]=""   ;
translation_table["monk"]=""   ;
translation_table["paladin"]=""   ;
translation_table["priest"]=""   ;
translation_table["ranger"]=""   ;
translation_table["sorcerer"]=""   ;
translation_table["swordmage"]=""   ;
translation_table["warmage"]=""   ;
translation_table["warpriest"]=""   ;
translation_table["warrior"]=""   ;
translation_table["wizard"]=""   ;
translation_table["wood elf"]=""   ;

//questgivers = new Array(   ;
translation_table["an old elf"]=""   ;
translation_table["an old dwarf"]=""   ;
translation_table["an old halfling"]=""   ;
translation_table["an old gnome"]=""   ;
translation_table["an old man"]=""   ;
translation_table["an old woman"]=""   ;
translation_table["an old lady"]=""   ;
translation_table["an old witch"]=""   ;
translation_table["a city guard"]=""   ;
translation_table["a mage"]=""   ;
translation_table["a sage"]=""   ;
translation_table["a wizard"]=""   ;
translation_table["a cleric"]=""   ;
translation_table["a priest"]=""   ;
translation_table["a merchant"]=""   ;
translation_table["a fortuneteller"]=""   ;
translation_table["a gypsy"]=""   ;
translation_table["a mysterious traveler"]=""   ;
translation_table["a mysterious man"]=""   ;
translation_table["a suspicious man"]=""   ;
translation_table["a mysterious woman"]=""   ;
translation_table["a suspicious woman"]=""   ;
translation_table["a noble"]=""   ;
translation_table["a noble woman"]=""   ;

//spellcasters = new Array(   ;
translation_table["bloodmage"]=""   ;
translation_table["mage"]=""   ;
translation_table["sorcerer"]=""   ;
translation_table["warlock"]=""   ;
translation_table["witch"]=""   ;
translation_table["wizard"]=""   ;

//drinks = new Array(   ;
translation_table["ale"]=""   ;
translation_table["beer"]=""   ;
translation_table["cider"]=""   ;
translation_table["juice"]=""   ;
translation_table["mead"]=""   ;
translation_table["milk"]=""   ;
translation_table["tea"]=""   ;
translation_table["water"]=""   ;
translation_table["wine"]=""   ;

//food = new Array(   ;
translation_table["porridge"]=""   ;
translation_table["vegetables"]=""   ;
translation_table["fish"]=""   ;
translation_table["meat"]=""   ;
translation_table["bread"]=""   ;
translation_table["chicken"]=""   ;

//toys = new Array(   ;
translation_table["toy sword"]=""   ;
translation_table["toy wand"]=""   ;
translation_table["toy shield"]=""   ;
translation_table["bear"]=""   ;
translation_table["wood ball"]=""   ;

//gatherables = new Array(   ;
translation_table["feathers"]=""   ;
translation_table["walnuts"]=""   ;
translation_table["berries"]=""   ;
translation_table["sea shells"]=""   ;
translation_table["spider silk"]=""   ;
translation_table["spider eyes"]=""   ;
translation_table["spider legs"]=""   ;
translation_table["scorpion stingers"]=""   ;
translation_table["skins"]=""   ;
translation_table["pelts"]=""   ;
translation_table["hides"]=""   ;
translation_table["roots"]=""   ;
translation_table["herbs"]=""   ;
translation_table["bat guano"]=""   ;

//deliverables = new Array(   ;
translation_table["box"]=""   ;
translation_table["crate"]=""   ;
translation_table["message"]=""   ;
translation_table["letter"]=""   ;
translation_table["package"]=""   ;

//containers = new Array(   ;
translation_table["a wooden box"]=""   ;
translation_table["a keg"]=""   ;
translation_table["a barrel"]=""   ;
translation_table["an old crate"]=""   ;
translation_table["an old trunk"]=""   ;

//relatives = new Array(   ;
translation_table["brother"]="αδελφός"   ;
translation_table["sister"]="αδελφή"   ;
translation_table["cousin"]="ξάδελφος"   ;
translation_table["uncle"]="θείος"   ;
translation_table["aunt"]="θεία"   ;
translation_table["twin"]="δίδυμος"   ;

//posesives = new Array(   ;
translation_table["his"]=""   ;
translation_table["her"]=""   ;

//contests = new Array(   ;
translation_table["a brawling"]="καυγά"   ;
translation_table["an eating"]="φαγητού"   ;
translation_table["a drinking"]="ποτού"   ;
translation_table["a swordplay"]="ξιφομαχίας"   ;
translation_table["a fighting"]="πάλης"   ;

//	if (hasBuff("Book of Aresius")) {
translation_table["You <span class='heroic'>open the Gate of Hope</span>! You earn <span class='coin'>#coin#</span>."]="You <span class='heroic'>open the Gate of Hope</span>! You earn <span class='coin'>#coin#</span>."   ;
translation_table["You <span class='heroic'>defeat the Krakhon army</span>! You earn <span class='coin'>#coin#</span>."]="You <span class='heroic'>defeat the Krakhon army</span>! You earn <span class='coin'>#coin#</span>."   ;
translation_table["You <span class='heroic'>destroy the Chalice of Agony</span>! You earn <span class='coin'>#coin#</span>."]=""   ;
translation_table["You <span class='heroic'>discover the Elvenpath</span>! You find <span class='coin'>#coin#</span>."]=""    ;
translation_table["You <span class='heroic'>unchain Arwald's soul</span>! You earn <span class='coin'>#coin#</span>." ]=""   ;
translation_table["You <span class='heroic'>protect Village Lanterne</span>! You earn <span class='coin'>#coin#</span>."]=""    ;
translation_table["You <span class='heroic'>vanquish the Blackbird Nation</span>! You earn <span class='coin'>#coin#</span>." ]=""   ;
translation_table["You <span class='heroic'>face the Thing that Should Not Be</span>! You earn <span class='coin'>#coin#</span>."]=""    ;

//	if (hasBuff("Book of Antonidas")) {
translation_table["You <span class='heroic'>cleanse the world of the Corruption</span>! You earn <span class='coin'>#coin#</span>."]=""    ;
translation_table["You <span class='heroic'>slay the Ender Dragon</span>! You earn <span class='coin'>#coin#</span>."]=""    ;
translation_table["You <span class='heroic'>slay the Czar Dragon</span>! You earn <span class='coin'>#coin#</span>."]=""    ;
translation_table["You <span class='heroic'>close the Dark Portal</span>! You earn <span class='coin'>#coin#</span>."]=""    ;
translation_table["You <span class='heroic'>explore Turtle Rock</span>! You find <span class='coin'>#coin#</span>."]=""    ;
translation_table["You <span class='heroic'>climb the Endless Tower</span>! You earn <span class='coin'>#coin#</span>."]=""    ;
translation_table["You <span class='heroic'>raid the Veriil dungeon</span>! You earn <span class='coin'>#coin#</span>."]=""    ;
translation_table["You <span class='heroic'>mend the leg of a black mare</span>! You earn <span class='coin'>#coin#</span>."]=""    ;

//Adventure
translation_table["You earn <span class='coin'>#coin#</span>."]="Κέρδισες <span class='coin'>#coin#</span>."   ;



var translated_text=translation_table[word];

if(!translated_text || !enable_translation ) return word;
return translated_text;

}

