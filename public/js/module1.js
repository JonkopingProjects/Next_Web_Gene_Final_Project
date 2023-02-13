import {SparqlEndpointFetcher} from '../../node_modules/fetch-sparql-endpoint/lib/SparqlEndpointFetcher.js';
    
function test() {
        const myFetcher = new SparqlEndpointFetcher();

        const bindingsStream = fetcher.fetchBindings('https://dbpedia.org/sparql', 'SELECT * WHERE { ?s ?p ?o } LIMIT 20');
        bindingsStream.on('variables', (variables) => console.log(variables));
}

export {test};