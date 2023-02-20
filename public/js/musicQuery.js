function executeRapQuery() {
    var SparqlParser = require('sparqljs').Parser;
    var parser = new SparqlParser();
    var parsedQuery = parser.parse('PREFIX wdt: <http://www.wikidata.org/prop/direct/> PREFIX wd: <http://www.wikidata.org/entity/> SELECT DISTINCT ?person ?personLabel WHERE { VALUES ?prof {wd:Q2252262} ?person wdt:P31 wd:Q5 . ?person wdt:P106 ?prof . ?person wdt:P136 wd:Q11401 . ?person wdt:P27 wd:Q142 . ?person wdt:P8687 ?followers . FILTER(?followers>1000000) SERVICE wikibase:label { bd:serviceParam wikibase:language "fr" . }} ORDER BY ?person LIMIT 5');
}

function executeRockQuery() {
    var SparqlParser = require('sparqljs').Parser;
    var parser = new SparqlParser();
    var parsedQuery = parser.parse('PREFIX wdt: <http://www.wikidata.org/prop/direct/> PREFIX wd: <http://www.wikidata.org/entity/> SELECT DISTINCT ?person ?personLabel WHERE { VALUES ?prof {wd:Q639669} ?person wdt:P31 wd:Q5 . ?person wdt:P106 ?prof . ?person wdt:P136 ?genre . ?genre rdfs:label ?genreLabel . ?person wdt:P1412 wd:Q1860 . ?person wdt:P8687 ?followers . FILTER CONTAINS(?genreLabel, "rock") . FILTER(?followers>1000000) SERVICE wikibase:label { bd:serviceParam wikibase:language "en" . }} ORDER BY ?person LIMIT 5');
}

function executeClassicQuery() {
    var SparqlParser = require('sparqljs').Parser;
    var parser = new SparqlParser();
    var parsedQuery = parser.parse('PREFIX wdt: <http://www.wikidata.org/prop/direct/> PREFIX wd: <http://www.wikidata.org/entity/> SELECT DISTINCT ?person ?personLabel WHERE { VALUES ?prof {wd:Q36834} ?person wdt:P31 wd:Q5 . ?person wdt:P106 ?prof . ?person wdt:P135 wd:Q17723 . ?person wdt:P2031 ?date  FILTER (?date > "1700-01-01T00:00:00Z"^^xsd:dateTime) . SERVICE wikibase:label { bd:serviceParam wikibase:language "en" . }} ORDER BY ?person LIMIT 3');
}