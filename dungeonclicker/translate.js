//Translate 
//v007 -20170219 object
//v006 -20170212 object
//v005 -20160608 object
//v004 -20160608
//v003 -20160608
//
var enable_translation=true;

function t(word) {
	return translate(word);
}

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
translation_table["Rogue academy"]="Ακαδημία κλεφτών"   ;
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
translation_table["a dark elf"]="ένα σκοτεινό ξωτικό"   ;
translation_table["a duergar"]=""   ;
translation_table["a ghoul"]=""   ;
translation_table["a gnoll"]=""   ;
translation_table["a goblin"]="ένα γκομπλιν"   ;
translation_table["a hobgoblin"]=""   ;
translation_table["a kobold"]="ένα κομπολντ"   ;
translation_table["a lizardman"]=""   ;
translation_table["a troglodyte"]=""   ;
translation_table["a troll"]=""   ;
translation_table["a werewolf"]="ένας λυκάνθρωπος"   ;
translation_table["an orc"]="ένα Ορκ"   ;
translation_table["an owlbear"]=""   ;
translation_table["an undead"]="έναν απέθαντο"   ;

//gFolks = new Array(   ;
translation_table["dwarves"]="νάνοι"   ;
translation_table["elves"]="ξωτικά"   ;
translation_table["gnomes"]="γνώμοι"   ;
translation_table["grey elves"]="γκρί ξωτικά"   ;
translation_table["halflings"]="Χαλφλινγκς"   ;
translation_table["high elves"]=""   ;
translation_table["humans"]="άνθρωποι"   ;
translation_table["wood elves"]=""   ;

//bFolks = new Array(   ;
translation_table["bugbears"]=""   ;
translation_table["dark elves"]="σκοτεινά ξωτικά"   ;
translation_table["gnolls"]=""   ;
translation_table["goblins"]=""   ;
translation_table["hobgoblins"]=""   ;
translation_table["kobolds"]="κομπολντς"   ;
translation_table["lizardmen"]="σαυράνθρωποι"   ;
translation_table["orcs"]="όρκς"   ;
translation_table["owlbears"]=""   ;
translation_table["shadow dwarves"]=""   ;
translation_table["troglodytes"]="τρογλωδύτες"   ;
translation_table["trolls"]="τρολς"   ;

//classes = new Array(   ;
translation_table["animist"]=""   ;
translation_table["arcanist"]="μυστικιστής"   ;
translation_table["archer"]="τοξότης"   ;
translation_table["assassin"]="εκτελεστής"   ;
translation_table["bandit"]=""   ;
translation_table["bloodmage"]="μάγος του αίματος"   ;
translation_table["chieftain"]=""   ;
translation_table["dervish"]="δερβίσης"   ;
translation_table["diabolist"]=""   ;
translation_table["elementalist"]=""   ;
translation_table["fighter"]="μαχητής"   ;
translation_table["hunter"]="κυνηγός"   ;
translation_table["illusionist"]=""   ;
translation_table["lancer"]=""   ;
translation_table["magus"]=""   ;
translation_table["marauder"]="επιδρομέας"   ;
translation_table["rager"]=""   ;
translation_table["raider"]="επιδρομέας"   ;
translation_table["ranger"]="ρε'ι'νζερ"   ;
translation_table["ravager"]=""   ;
translation_table["rider"]="καβαλάρης"   ;
translation_table["rogue"]="κατεργάρης rogue"   ;
translation_table["scourge"]=""   ;
translation_table["scout"]="ανιχνευτής"   ;
translation_table["seer"]=""   ;
translation_table["sentinel"]=""   ;
translation_table["shadowblade"]=""   ;
translation_table["shaman"]="σαμαν"   ;
translation_table["sorcerer"]=""   ;
translation_table["spiritualist"]=""   ;
translation_table["stalker"]=""   ;
translation_table["thief"]="κλέφτης"   ;
translation_table["warchanter"]=""   ;
translation_table["warlock"]=""   ;
translation_table["warlord"]="πολέμαρχος"   ;
translation_table["warmaster"]=""   ;
translation_table["warpriest"]="πολεμικό ιερέα"   ;
translation_table["warrior"]="πολεμιστής"   ;
translation_table["witch"]="μάγισσα"   ;
translation_table["wizard"]=""   ;

//prefixes = new Array(   ;
translation_table["blade"]="λεπίδο"   ;
translation_table["blink"]=""   ;
translation_table["blood"]="αίμα" ;
translation_table["carnivorous"]="σαρκοβόρο"   ;
translation_table["darkspire"]=""   ;
translation_table["dire"]="τρομερός "   ;
translation_table["dragon"]="δράκο"   ;
translation_table["fire"]="πυρό"   ;
translation_table["firethorn"]=""   ;
translation_table["giant"]="γιγαντό"   ;
translation_table["hell"]=""   ;
translation_table["horned"]="κεράτο"   ;
translation_table["monstruous"]=""   ;
translation_table["nightmare"]=""   ;
translation_table["nightshade"]=""   ;
translation_table["shadowleap"]=""   ;
translation_table["shadowthorn"]=""   ;
translation_table["shark"]="καρχαριο"   ;
translation_table["spiked"]="αγκαθωτό"   ;
translation_table["thornskin"]="αγκαθόδερμο "   ;
translation_table["thundercry"]=""   ;
translation_table["vilethorn"]=""   ;
translation_table["wraitheye"]=""   ;

//colors = new Array(   ;
translation_table["red"]="κόκκινο"   ;
translation_table["orange"]="πορτοκαλί"   ;
translation_table["yellow"]="κίτρινο"   ;
translation_table["green"]="πράσινο"   ;
translation_table["blue"]="μπλέ"   ;
translation_table["purple"]="μώβ"   ;
translation_table["crimson"]="βυσσινί"   ;
translation_table["lime"]="λα'ι'μ"   ;
translation_table["brown"]="καφέ"   ;
translation_table["black"]="μαυρό"   ;

//pests = new Array(   ;
translation_table["toad"]="φρύνος"   ;
translation_table["frog"]="βάτραχος"   ;
translation_table["lizard"]="σαύρα"   ;
translation_table["snake"]="φίδι"   ;
translation_table["scorpion"]="σκορπιός"   ;
translation_table["spider"]="αράχνη"   ;
translation_table["moth"]="νυχτο-πεταλούδα"   ;
translation_table["beetle"]="σκαθάρι"   ;
translation_table["worm"]="σκουλίκι"   ;
translation_table["centipede"]="σαρανταποδαρούσα"   ;
translation_table["bee"]="μέλισσα"   ;
translation_table["mosquito"]="κουνούπι"   ;
translation_table["hornet"]="σφήκα"   ;
translation_table["cockroach"]="κατσαρίδα"   ;
translation_table["dragonfly"]="λιβελούλα"   ;
translation_table["butterfly"]="πεταλόυδα"   ;
translation_table["snail"]="σαλιγκάρι"   ;
translation_table["slug"]="γυμνοσάλιαγκας"   ;
translation_table["caterpillar"]="κάμπια"   ;
translation_table["ant"]="μυρμίγκι"   ;
translation_table["weevil"]="μαμούνι"   ;
translation_table["locust"]="ακρίδα"   ;
translation_table["bat"]="νυχτερίδα"   ;
translation_table["rat"]="ποντίκι"   ;
translation_table["muskrat"]="μοσχοπόντικος"   ;
translation_table["groundhog"]="μαρμότα"   ;
translation_table["prairie dog"]="κυνόμυς"   ;
translation_table["ferret"]="κουνάβι"   ;
translation_table["gopher"]="γεωμύξ"   ;
translation_table["squirrel"]="σκίουρος"   ;
translation_table["mole"]="τυφλοπόντικας"   ;
translation_table["beaver"]="κάστορας"   ;
translation_table["chipmunk"]="chipmunk"   ;
translation_table["marmot"]="μαρμότα"   ;
translation_table["raccoon"]="ρακούν"   ;

//fears = new Array(   ;
translation_table["being eaten by"]="να φαγωθείς από"   ;
translation_table["being bitten by"]="να δαγκωθείς από"   ;
translation_table["being killed by"]="να σκοτωθείς από"   ;
translation_table["being licked by"]="να σε γλύψει"   ;
translation_table["being alone with"]="να μένεις μόνος με"   ;
translation_table["being watched by"]="να σε παρακολουουν"   ;

//pets = new Array(   ;
translation_table["cat"]="γάτα"   ;
translation_table["cow"]="αγελάδα"   ;
translation_table["dog"]="σκύλος"   ;
translation_table["hound"]="κυνηγόσκυλο"   ;
translation_table["donkey"]="γάιδαρος"   ;
translation_table["horse"]="άλογο"   ;
translation_table["kitten"]="ψιψίνο"   ;
translation_table["mule"]="μουλάρι"   ;
translation_table["pig"]="γουρούνι"   ;
translation_table["puppy"]="κουτάβι"   ;
translation_table["rooster"]="πετεινός"   ;
translation_table["hen"]="χήνα"   ;
translation_table["sheep"]="πρόβατο"   ;

//fish = new Array(   ;
translation_table["alewife"]="ποταμόρεγγα"   ;
translation_table["angelfish"]="αγγελόψαρο"   ;
translation_table["bass"]="πέρκα"   ;
translation_table["carp"]="κυπρίνος"   ;
translation_table["catfish"]="γατόψαρο"   ;
translation_table["cod"]="μπακαλιάρος"   ;
translation_table["dogfish"]="σκυλόψαρο"   ;
translation_table["eel"]="χέλι"   ;
translation_table["perch"]="πέρκα"   ;
translation_table["salmon"]="σολομός"   ;

//game = new Array(   ;
translation_table["duck"]="πάπια"   ;
translation_table["partridge"]="πέρδικα"   ;
translation_table["hare"]="λαγός"   ;
translation_table["deer"]="ελάφι"   ;
translation_table["quail"]="ορτύκι"   ;

//objects = new Array(   ;
translation_table["doghouse"]="σκυλόσπιτο"   ;
translation_table["house"]="σπίτι"   ;
translation_table["wagon"]="καρότσα"   ;
translation_table["fence"]="φρακτης"   ;
translation_table["water well"]="πηγάδι"   ;
translation_table["hayloft"]="αχυρόνας"   ;
translation_table["pigpen"]="χοιροστάσιο"   ;
translation_table["stable"]="στάβλος"   ;
translation_table["pen"]="μαντρί"   ;
translation_table["barn"]="αποθήκη"   ;

//adventurers = new Array(   ;
translation_table["barbarian"]="Βάρβαρος"   ;
translation_table["bard"]="Βάρδος"   ;
translation_table["cavalier"]="καβαλάρης"   ;
translation_table["changeling"]=""   ;
translation_table["cleric"]="Κληρικός"   ;
translation_table["dark elf"]="Σκοτεινό Ξωτικό"   ;
translation_table["druid"]="Δρυίδης"   ;
translation_table["dwarf"]="Νάνος"   ;
translation_table["gnome"]="γνώμος"   ;
translation_table["goliath"]="γολιάθ"   ;
translation_table["grey elf"]="γκρι ελφ"   ;
translation_table["half-elf"]="μισο-ξωτικό"   ;
translation_table["halfling"]="χαλφλινγκ"   ;
translation_table["half-orc"]="μισό-ορκ"   ;
translation_table["high elf"]="μισό ελφ"   ;
translation_table["knight"]="ιππότης"   ;
translation_table["mage"]="μάγος"   ;
translation_table["monk"]="μοναχός"   ;
translation_table["paladin"]=""   ;
translation_table["priest"]="παπάς"   ;
translation_table["ranger"]="φύλακας"   ;
translation_table["sorcerer"]=""   ;
translation_table["swordmage"]="μάγος σπαθιού"   ;
translation_table["warmage"]="μάγος πολέμου"   ;
translation_table["warpriest"]=""   ;
translation_table["warrior"]="πολεμιστής"   ;
translation_table["wizard"]=""   ;
translation_table["wood elf"]="έλφ του ξύλου"   ;

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
translation_table["a sage"]="ένας σοφός"   ;
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
translation_table["beer"]="μπύρα"   ;
translation_table["cider"]=""   ;
translation_table["juice"]="χυμός"   ;
translation_table["mead"]=""   ;
translation_table["milk"]="γάλα"   ;
translation_table["tea"]="τσαί"   ;
translation_table["water"]="νερό"   ;
translation_table["wine"]="κρασί"   ;

//food = new Array(   ;
translation_table["porridge"]="κουάκερ"   ;
translation_table["vegetables"]="λαχανικά"   ;
translation_table["fish"]="ψάρι"   ;
translation_table["meat"]="κρέας"   ;
translation_table["bread"]="ψωμί"   ;
translation_table["chicken"]="κοτόπουλο"   ;

//toys = new Array(   ;
translation_table["toy sword"]="παιχνίδι σπαθί"   ;
translation_table["toy wand"]="παιχνίδι ραβδί"   ;
translation_table["toy shield"]="παιχνίδι ασπίδα"   ;
translation_table["bear"]="αρκούδα"   ;
translation_table["wood ball"]="ξύλινη μπάλα"   ;

//gatherables = new Array(   ;
translation_table["feathers"]="φτερλα"   ;
translation_table["walnuts"]="καρύδια"   ;
translation_table["berries"]="μούρα"   ;
translation_table["sea shells"]="κοχύλια"   ;
translation_table["spider silk"]="μετάξι αράχνης"   ;
translation_table["spider eyes"]="μάτια αράχνης"   ;
translation_table["spider legs"]="πόδια αράχνης"   ;
translation_table["scorpion stingers"]="κεντρια σκορπιών"   ;
translation_table["skins"]="δέρματα"   ;
translation_table["pelts"]="τομάρια"   ;
translation_table["hides"]="πετσία"   ;
translation_table["roots"]="ρίζες"   ;
translation_table["herbs"]="βότανα"   ;
translation_table["bat guano"]="ακαθαρσίες νυχτερίδας"   ;

//deliverables = new Array(   ;
translation_table["box"]="κουτί"   ;
translation_table["crate"]="κιβώτιο"   ;
translation_table["message"]="μήνυμα"   ;
translation_table["letter"]="γράμμα"   ;
translation_table["package"]="πακέτο"   ;

//containers = new Array(   ;
translation_table["a wooden box"]="ξύλινο κουτί"   ;
translation_table["a keg"]="βαρελάκι"   ;
translation_table["a barrel"]="βαρέλι"   ;
translation_table["an old crate"]="ένα παλιό κασόνι"   ;
translation_table["an old trunk"]="ένα παλίο μπαούλο"   ;

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
translation_table["You open the Gate of Hope"]="Άνοιξες την Πύλη της Ελπίδας"   ;
translation_table["You defeat the Krakhon army"]="Κέρδισες τον στρατό των Krakhon</span>!"   ;
translation_table["You destroy the Chalice of Agony"]="Κατέστρεωψες το Chalice της Αγωνίας"   ;
translation_table["You discover the Elvenpath"]="Ανακάλυψες το Μονοπάτι των Ξωτικών"    ;
translation_table["You unchain Arwald's soul" ]="Απελευθέρωσες την ψυχή του Arwald"   ;
translation_table["You protect Village Lanterne"]="Προστάτεψες το Χωριό Λαντερνέ"    ;
translation_table["You vanquish the Blackbird Nation" ]="Εξαφάνισες το έθνος του Μπλακμπερντ"   ;
translation_table["You face the Thing that Should Not Be"]="Αντιμετώπισες το Πραγμα που Δεν Πρέπει Να Υπάρχει"    ;

//	if (hasBuff("Book of Antonidas")) {
translation_table["You cleanse the world of the Corruption"]="Καθάρισες τον κόσμο της διαφθοράς"    ;
translation_table["You slay the Ender Dragon"]="Έσφαξες τον Δράκο Ender"    ;
translation_table["You slay the Czar Dragon"]="Έσφαξες τον Δράκο Czar"    ;
translation_table["You close the Dark Portal"]="Έκλεισες την Σκοτεινή Πύλη"    ;
translation_table["You explore Turtle Rock"]="Εξερεύνησες τον Χελωνοβράχο"    ;
translation_table["You climb the Endless Tower"]="Σκαρφάλωσες τον Ατελέιωτο Πύργο"    ;
translation_table["You raid the Veriil dungeon"]="Έκανες επιδρομή στο μπουντρούμι του Veriil"    ;
translation_table["You mend the leg of a black mare"]="Έφτιαξες το πόδι ενός μαύρου mare"    ;

//Adventure
translation_table["You earn <span class='coin'>#coin#</span>."]="Κέρδισες <span class='coin'>#coin#</span>."   ;

translation_table["<span class='xp'>"]="<span class='xp'>"   ;
translation_table["You "]="You "  ;
translation_table["<span class='heroic'>"]="<span class='heroic'>"   ;
translation_table["</span>! "]="</span>! "   ;
translation_table["You earn "]="Κέρδισες "   ;
translation_table["slay "]="Έσφαξες "   ;
translation_table["slay a "]="Έσφαξες ένα/μία "   ;

//Adventure Quest
translation_table["win "] = "κέρδισες" ;
translation_table["unravel "] = "αποκάλυψες" ;
translation_table["unmask a "] = "ξεσκέπασες έναν/μια " ;
translation_table["thwart the heinous plans of an evil "] = "Αντέκρουσες τα σατανικά σχέδια του/τής σατανικού " ;
translation_table["stop the century-old war between "] = "σταμάτησες τον αιώνιο πόλεμο μεταξύ " ;
translation_table["stop an evil "] = "σταμάτησες έναν/μια κακό " ;
translation_table["stop an assassination plot against an important "] = "σταμάτησες ένα σχέδιο δολοφονίας ενός σημαντικού " ;
translation_table["solve the riddle of an eccentric "] = "έλυσες τον γρίφο ενός εκκεντρικού " ;
translation_table["solve "] = "έλυσες " ;
translation_table["slice a bush"] = "έκοψες έναν θάμνο " ;
translation_table["scort "] = "" ;
translation_table["rescue a "] = "διέσωσες ένα " ;
translation_table["redeem an old "] = "εξαργύρωσες ένα παλιό " ;
translation_table["recover an ancient relic from the hands of an evil "] = "" ;
translation_table["play dice with "] = "έπαιξες ζάρια με " ;
translation_table["play cards with "] = "έπαιξες κάρτες με " ;
translation_table["paint a "] = "ζωγράφισες ένα " ;
translation_table["look inside "] = "κοίταξες μέσα " ;
translation_table["hunt down a rogue "] = "κηνήγησες έναν κατεργάρη " ;
translation_table["hunt a "] = "κηνήγησες έναν " ;
translation_table["help treat a "] = "βοήθησες να θεραπεύσεις ένα(ν) " ;
translation_table["help stop a "] = "βοήθησες να σταματήσει ένα " ;
translation_table["help rebuild a "] = "βοήθησες να ξαναχτιστεί ένα " ;
translation_table["help fend off "] = "βοήθησες να απωθήσουν " ;
translation_table["help celebrate a "] = "βοήθησες να γιορταστεί ενα " ;
translation_table["help catch "] = "βοήθησες να πιαστεί " ;
translation_table["help a young "] = "βοήθησες ένα νέο " ;
translation_table["help a shy "] = "βοήθησες έναν ντροπαλό " ;
translation_table["help a novice "] = "βοήθησες έναν αρχάριο " ;
translation_table["help a housewive cook some "] = "βοήθησες μια νοικοκυρά να μαγειρέψει λίγο " ;
translation_table["help a "] = "βοήθησες ένα/μια " ;
translation_table["get some "] = "πήρες μερικά " ;
translation_table["fix a "] = "έφτιαξες ένα/μια " ;
translation_table["fish a "] = "ψαρεψες ένα/μια " ;
translation_table["find the cure for a terrible plague"] = "βρήκες την θεραπεία μια τρομερή αρρώστεια " ;
translation_table["find a lost "] = "βρήκες τον χαμένο " ;
translation_table["find a little boy's "] = "βρήκες ενός μικρού παιδιού το/την " ;
translation_table["find "] = "βρήκες " ;
translation_table["expose a treacherous "] = "αποκάλυψες ένα προδοτικό " ;
translation_table["end a dispute between a "] = "έληξες μια διαμάχη μεταξύ " ;
translation_table["deliver a "] = "παρέδωσες ένα " ;
translation_table["conquer your fear of "] = "κατέκτησες τον φόβο του " ;
translation_table["clear an innocent "] = "καθάρισες έναν αθώο " ;
translation_table["catch a "] = "έπιασες ένα " ;
translation_table["break a clay pot"] = "έσπασες ένα βάζο από πήλο " ;
translation_table["bathe a "] = "έκανες μπάνιο σε " ;
translation_table[" through the wilderness"] = " μέσα από την άγρια φύση" ;
translation_table[" test"] = " δοκίμασες" ;
translation_table[" slime"] = " γλίτσα" ;
translation_table[" research a new spell"] = " ερευνησες ένα νέο ξόρκι" ;
translation_table[" rescue "] = " να διασωθεί " ;
translation_table[" reforge an ancient artifact"] = " " ;
translation_table[" problem"] = " πρόβλημα" ;
translation_table[" pass "] = " " ;
translation_table[" party"] = " ομάδα" ;
translation_table[" overcome "] = " ξέπέρασες" ;
translation_table[" lost "] = " " ;
translation_table[" kill a dire "] = " " ;
translation_table[" jelly"] = " " ;
translation_table[" invasion"] = " " ;
translation_table[" incursion"] = " " ;
translation_table[" get a girlfriend"] = " " ;
translation_table[" for a thirsty "] = " " ;
translation_table[" for a hungry "] = " " ;
translation_table[" for "] = " " ;
translation_table[" find inner peace"] = " " ;
translation_table[" find "] = " " ;
translation_table[" father"] = " " ;
translation_table[" familiar"] = " " ;
translation_table[" death"] = " " ;
translation_table[" contest"] = " " ;
translation_table[" confront "] = " " ;
translation_table[" complete a quest"] = " " ;
translation_table[" before "] = " " ;
translation_table[" awkwardness"] = " " ;
translation_table[" avenge "] = " " ;
translation_table[" and "] = " " ;
translation_table[" a "] = " ένα/μια " ;




var translated_text=translation_table[word];

if(!translated_text || !enable_translation ) return word;
return translated_text;

}
