Simple jQuery plugin for search in array of objects
Requires `async` and `jQuery` to work

Example:

```javascript
var movies = [
  {name: "The Godfather", year: "1972", genere: "Drama"},
  {name: "The Lord of the Rings: The Fellowship of the Ring ", year: "2001", genere: "Adventure"},
  {name: "Forrest Gump", year: "1994", genere: "Drama"},
  {name: "The Matrix", year: "1999", genere: "Sci-Fi"}
];

var filtered = $(movies).smartsearch({
  query: "Drama",
  fields: "name,year,genere",
  synonyms: {
    forest: "forrest"
  }
});

/*

filtered = [
  {name: "The Godfather", year: "1972", genere: "Drama"},
  {name: "Forrest Gump", year: "1994", genere: "Drama"}
]

*/
```
[Download](https://raw.githubusercontent.com/localhostech/jquery-smartsearch/master/filter.js)
