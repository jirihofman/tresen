This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# Vlastnosti
  - [x] Export do XLS (raw)
  - [x] Export po roce nebo dle vlastního intervalu

# TODOs
  - [ ] Github pages
  - [ ] Generovani pracovnich dnu - zapojit prazdniny a svátky
  - [ ] Export do XLS - datumy, čísla ne jako raw
  - [ ] Summary zobrazeni a aktualizace podle generovani
  - [ ] Odlehčit závislosti
  - [ ] Code coverage
  - [ ] standard vs eslint, console.log
  - [ ] favicon
  - [ ] Poznamka (duvod cesty) udelat jako zaskrtavaci seznam
  - [ ] Lokace udelat jako zaskrtavaci seznam
  - [ ] U lokace povinna volba 'domaci', tj. odkud budu jezdit
  - [ ] Trips predelat na Lokace, ne natvrdo
  - [ ] Podle toho, kterou vyberu 'domaci' lokaci mi to nabidne mozne Tripy (ty, ktere zacinaji v domaci lokaci)
  - [ ] CRUD Journeys
  - [ ] CRUD Trips
  
# Print
Schovani formularovych prvku: https://stackoverflow.com/questions/52880971/how-to-use-media-print-within-reactjs-web-app

# Omezeni
- V jeden den jen cesta tam a zpet
- Jen pracovni dny (nyni nejsou brany v uvahu svatky)