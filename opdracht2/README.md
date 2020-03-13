# Frontend voor Designers - opdracht 2: Een interactie uitwerken voor verschillende gebruikers input

Werk een functionaliteit uit die je kunt bedienen met 'click' en nog een user interactie, zoals het toetsenbord, tab, dubbel click, swipe, long press, <del>force touch</del>, of iets anders ... Werk je ontwerp uit in HTML, CSS en Javascript om te kunnen testen in een [browser](https://en.m.wikipedia.org/wiki/List_of_web_browsers).


## Voorbeeld functionaliteit die je kunt maken
- Carousel met vakantiefoto's: Een carousel met meerdere foto's van een vakantie, die je kan bedienen met een button en met de pijltjes op het toetsenbord.
- Portfolio website met meerdere projecten en een biografie. Als je naar 'beneden' scrollt vult de betreffende section zich met informatie. Als je op tab klikt ga je ook naar de volgende section. Of als je 'volgende' roept ...
- Settings panel op een foto-overzichtpagina: Instellingen zijn bijvoorbeeld de font-grootte, night vision en het aantal kolommen die naast elkaar worden getoond. Het bedienen van de instellingen moet met de muis en de sneltoetsen op het toetsenbord.
- Je mag ook een eigen idee uitwerken. Kom dan eerst even overleggen.


## Criteria

1. In de demo maak je gebruik van verschillende [User Interface events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent).
2. In de demo dien je rekening te houden met de interface design principles 04, 08 & 09 van [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/).
3. Je ontwerp is aantoonbaar getest en verbeterd. Verslaglegging en resultaat publiceren op Github. <br>Voeg ook je breakdown-schets toe, en beschrijf je eerste idee en technische opzet en hoe het uiteindelijk is geworden.

***

## Verslaglegging
Ik heb gekozen voor de use case "Carousel met vakantiefoto's".

### Idee & Schets
![Schets eerste ontwerp](https://github.com/mhhuijsmans/frontend-voor-designers-1920/raw/master/opdracht2/doc/schets.jpg)

Mijn eerste idee was een carousel die te bedienen is op de volgende manieren: 

- Click (dmv de pijltjes en puntjes)
- Keyboard (dmv de pijltjestoetsen)
- Drag (dmv slepen van de carousel)

### Eerste versie
![Eerste versie](https://github.com/mhhuijsmans/frontend-voor-designers-1920/raw/master/opdracht2/doc/v1.jpg)

Voor de carousel heb ik gebruik gemaakt van de library [Flickity](https://github.com/metafizzy/flickity).
Dit is mijn javascript code:

```javascript
var carousel = document.querySelector('.carousel');
var flickity = new Flickity( carousel, {
  cellAlign: 'left',
  wrapAround: true
});
```

### Feedback
Tijdens de les heb ik feedback gekregen op bovenstaande eerste versie.
1. In de demo maak je gebruik van verschillende User Interface events.

    Er worden al 4 verschillende functionaliteiten toegepast.

2. De Principles of User Interface Design 04, 08 & 09 zijn goed toegepast

    Het is duidelijk wat de gebruiker kan doen en wat er gebeurt.
    
### Tweede versie
![Tweede versie](https://github.com/mhhuijsmans/frontend-voor-designers-1920/raw/master/opdracht2/doc/v2.jpg)

Ik vond vrij weinig uitdaging in mijn eerste ontwerp - het gebruiken van een library vind ik niet moeilijk (zie bovenstaande code). Ik vond het daarom leuk om mijn ontwerp nog veel verder uit te breiden. Ik heb het volgende gedaan:

- In plaats van een simpele carousel, heb ik een 'fotoboek' gemaakt, waar per 2 bladzijden doorheen gebladerd kan worden.
- Een combinatie gemaakt met drag & drop; zo kan de volgorde van de foto's veranderd worden. Foto's kunnen zowel verwisseld worden als ergens tussenin gesleept worden.
- Er kan gebladerd worden door middel van de pijltjes op het scherm, de ezelsoren, de bladwijzers, pijltjestoetsen en slepen.
- Ook is het mogelijk om foto's naar volgende bladzijden te slepen. Dit kan zowel door een foto op de bladerpijlen, de ezelsoren of de bladwijzers te slepen.

Voor dit nieuwe ontwerp heb ik gebruik gemaakt van de libraries [Flickity](https://github.com/metafizzy/flickity) en [SortableJS](https://github.com/SortableJS/Sortable).

Ook had ik nog enkele andere dingen die ik had willen toevoegen. Helaas had ik hier te weinig tijd voor.

- Bladzijden kunnen toevoegen en verwijderen.
- De compositie per bladzijde kunnen wijzigen, bijvoorbeeld 3 foto's in plaats van 4.
- Een mogelijkheid om foto's uit het album te kunnen slepen.

[Live link](https://mhhuijsmans.github.io/frontend-voor-designers-1920/opdracht2/)
