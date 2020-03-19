- De trailer links uit het JSON bestand werken niet langer. Kunnen deze geupdate worden/kan ik hier een pullrequest voor doen?

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

[Live link](https://mhhuijsmans.github.io/frontend-voor-designers-1920/opdracht3/)
