function executeCultureQuery() {
    var SparqlParser = require('sparqljs').Parser;
    var parser = new SparqlParser();
    var parsedQuery = parser.parse('PREFIX bd: <http://www.bigdata.com/rdf#> PREFIX wd: <http://www.wikidata.org/entity/> PREFIX wdt: <http://www.wikidata.org/prop/direct/> PREFIX wikibase: <http://wikiba.se/ontology#> select  ?objet ?objectLabel ?genreLabel where { ?object wdt:P31 wd:Q7889. ?object wdt:P136 ?genre. SERVICE wikibase:label { bd:serviceParam wikibase:language "en" .}} LIMIT 10');
}