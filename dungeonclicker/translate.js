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

var translated_text=translation_table.get(word);

if(!translated_text) return word;
return translated_text;

}

