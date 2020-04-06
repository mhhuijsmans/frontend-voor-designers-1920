[Live link](https://mhhuijsmans.github.io/frontend-voor-designers-1920/opdracht3/)

# frontend voor designers - opdracht 3: Een interactie uitwerken met externe data

Voor deze opdracht ga je een functionaliteit ontwerpen met externe data. De data is JSON die met een [REST API](https://developer.mozilla.org/en-US/docs/Glossary/REST) van een externe bron wordt ingeladen met Javascript.  Als de data geladen is moeten gebruikers je ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond.

## Criteria
1. De uitwerking van je ontwerp moet het doen in een browser en device naar keuze.
2. De data wordt van een externe bron ingeladen met Javascript.
3. Een aantal states van de [UI stack](https://www.scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack/) worden opgevangen en zijn vormgegeven.
4. In de demo maak je gebruik van meerdere [UI events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) zodat gebruikers je ontwerp op verschillende manieren kunnen bedienen.
5. In de demo dien je rekening te houden met de interface design principles 04, 08, 09 & 11 van [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/).
6. Je ontwerp is aantoonbaar getest en verbeterd. Verslaglegging en resultaat publiceren op Github

***

## Verslaglegging

### Idee & Schets
![Schets eerste ontwerp](https://github.com/mhhuijsmans/frontend-voor-designers-1920/raw/master/opdracht3/doc/schets.jpg)

Mijn eerste idee was een streaming dienst met: 

- Carousel om door de films heen te bladeren
- Genres met filteroptie
- Lightbox met trailer
- Optie om favorieten toe te voegen

### Eerste versie
![Eerste versie](https://github.com/mhhuijsmans/frontend-voor-designers-1920/raw/master/opdracht3/doc/v1.jpg)

#### Todo:
- Favorieten
- Daadwerkelijke trailer links (links in JSON werken niet)

#### Issues:
- Vanwege het beperkt aantal films in de JSON (zeker als je ook nog filtert) is het niet mogelijk om een wraparound carousel te maken. 

Voor de carousel heb ik gebruik gemaakt van de library [Flickity](https://github.com/metafizzy/flickity).

### Feedback
Ik heb de volgende feedback gekregen op bovenstaande eerste versie.
1. Missende ul tag

    Gefixt :)

2. Aparte JSON inladen

    Ik heb dit wel overwogen te doen, maar ik vond het uiteindelijk handiger om uit het hoofdbestand zelf te halen, omdat deze data altijd overeen zal komen met de films zelf.
    
### Tweede versie
![Tweede versie](https://github.com/mhhuijsmans/frontend-voor-designers-1920/raw/master/opdracht3/doc/v2.jpg)

#### Toegevoegd:
- Favorieten
- Daadwerkelijke trailer links

### Feedback
Ik heb de volgende feedback gekregen op bovenstaande eerste versie.
1. Link naar trailer in alert

    Leuk idee! Dit heb ik geïmplementeerd door de `alert()` method in een `confirm()` method te veranderen.
    ```javascript
    playSvg.addEventListener('click', function(e) {
		var trailerBtn = document.querySelector('.btn-trailer');
		var watchTrailer = confirm("If I had the rights to this movie, I would play it for you... You can watch the trailer though!\nPress OK to watch the trailer, or cancel to return.");
		if (watchTrailer == true) {
			trailerBtn.click();
		}
	});
	```

	Hiermee wordt een klik op de trailer button gesimuleerd wanneer de gebruiker op OK drukt.

	![Link naar trailer in alert](https://github.com/mhhuijsmans/frontend-voor-designers-1920/raw/master/opdracht3/doc/traileralert.JPG)

2. Plot is soms verder nog wel een (te) lange regel

    Ik heb de plot een max-width in ems meegegeven (zodat het meeschaalt met de fontgrootte). Hierbij heb ik rekening gehouden met een goede leeslengte; dit is tussen de 40 en 75 karakters per regel. [Bron - The Elements of Typographic Style Applied to the Web](http://webtypography.net/2.1.2)

3. Hartjes & feedback filter

    Ik heb een teller toegevoegd die automatisch update wanneer je een favoriet toevoegt of verwijdert.

    ![Favorieten teller](https://github.com/mhhuijsmans/frontend-voor-designers-1920/raw/master/opdracht3/doc/favorites.jpg)

4. Hamburger past niet bij filter

    Ik heb het hamburger icoon vervangen door een draaiende pijl.

    ![Pijltje](https://github.com/mhhuijsmans/frontend-voor-designers-1920/raw/master/opdracht3/doc/arrow.JPG)
    
### Derde versie
![Derde versie](https://github.com/mhhuijsmans/frontend-voor-designers-1920/raw/master/opdracht3/doc/v3.jpg)

#### Todo:
- Plot te lang

#### Toegevoegd:
- Optie om trailer te bekijken vanuit de alert
- Favorieten teller

#### Aangepast:
- Hamburger -> pijltje
- Plot width ingekort

[Live link](https://mhhuijsmans.github.io/frontend-voor-designers-1920/opdracht3/)