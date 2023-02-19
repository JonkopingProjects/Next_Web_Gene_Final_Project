function executeMusicQuery() {
    var SparqlParser = require('sparqljs').Parser;
    var parser = new SparqlParser();
    var parsedQuery = parser.parse('PREFIX mo: <http://purl.org/ontology/mo/> PREFIX foaf:  <http://xmlns.com/foaf/0.1/> SELECT ?name ?img ?hp ?loc WHERE { ?a a mo:MusicArtist ; foaf:name ?name . OPTIONAL { ?a foaf:img ?img } OPTIONAL { ?a foaf:homepage ?hp } OPTIONAL { ?a foaf:based_near ?loc }}');
}