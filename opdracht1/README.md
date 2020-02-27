# Frontend voor Designers - opdracht 1: Een Micro-interactie uitwerken en testen

## Opdracht
Ontwerp een user interface voor een gegeven use case. Werk je ontwerp uit in HTML, CSS en Javascript om te kunnen testen in een browser.

### Criteria
1. De uitwerking van je ontwerp moet het doen in een browser en device naar keuze.
2. De [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/) nr 04 & 11 zijn goed toegepast.
3. Je ontwerp is aantoonbaar getest en verbeterd. Verslaglegging en resultaat publiceren op [Github](https://github.com).

### Use cases
- In een verzameling films wil ik een aantal leuke films kunnen bewaren om ze later te bekijken.
- In een lijst studentenhuizen wil ik details kunnen bekijken om te bepalen of de kamer geschikt is om te huren.
- In een verzameling muzieknummers wil ik de volgorde kunnen veranderen om een playlist te maken voor een feest.
- Als ik foto's zoek wil ik ze kunnen filteren op kleur om verassende zoekresultaten te krijgen die ik kan gebruiken voor mijn Visual Research.
- Je mag ook een eigen idee uitwerken. Kom dan eerst even overleggen.

***

## Verslaglegging
Ik heb gekozen voor de use case "In een verzameling muzieknummers wil ik de volgorde kunnen veranderen om een playlist te maken voor een feest".

### Idee & Schets
![Schets eerste ontwerp](https://github.com/mhhuijsmans/frontend-voor-designers-1920/raw/master/opdracht1/doc/schets.jpg)

Mijn eerste idee was een app met bovenaan de playlist informatie en een play knop. Daaronder alle nummers die in de playlist staan.
De gebruiker kan de lijst handmatig sorteren door de nummers te slepen naar de gewenste positie.

### Eerste versie
![Eerste versie](https://github.com/mhhuijsmans/frontend-voor-designers-1920/raw/master/opdracht1/doc/v1.jpg)

Voor het sorteren heb ik gebruik gemaakt van de library [SortableJS](https://github.com/SortableJS/Sortable).

### Feedback
Tijdens de les heb ik feedback gekregen op bovenstaande eerste versie.
1. De uitwerking van je ontwerp moet het doen in een browser en device naar keuze.

    Het werkt in een browser zoals gewenst.    
    Is reponsive
2. De twee Principles of User Interface Design 04 & 11 zijn goed toegepast

    Het draggen is niet meteen duidelijk zichtbaar (de werking)    
    Kleurgebruik (playknop)
    
### Tweede versie
![Tweede versie](https://github.com/mhhuijsmans/frontend-voor-designers-1920/raw/master/opdracht1/doc/v2.jpg)

Aan de hand van de feedback die ik heb ontvangen, heb ik enkele aanpassigen gedaan.

- Een drag handle (de stippen) toegevoegd om aan te geven dat de gebruiker de nummers kan verslepen.
- Voor desktop een drag cursor toegevoegd, om bovenstaande reden.
- De play knop een andere kleur gegeven om deze meer op te laten vallen en duidelijk te maken dat er op geklikt kan worden.

[Live link](https://mhhuijsmans.github.io/frontend-voor-designers-1920/opdracht1/)
