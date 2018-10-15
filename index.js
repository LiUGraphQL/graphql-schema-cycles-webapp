function findCyclesMain() {


  enable_result();
  document.getElementById("enumerated_cycles").value = "Calculating...";
  var find_just_one_cycle = !document.getElementById("enumerate_all").checked;
  var schema = document.getElementById("schema_text").value + "\n";

  const jsObj = convert(schema);
  const graph = convertToGraph(jsObj);

  var _vertices = [];
  var _edges = [];
  cy = []; // empty if its not the first time

  var incrementedge = 0;
  for(var vertex in graph.graph)
  {
    // added for graph drawing purposes.
    //{ data: { id: 'a' } },
    //{ data: { id: 'a"e', weight: 1, source: 'a', target: 'e' } },
    //console.log(graph.graph[vertex].vertexID);
    _vertices.push({data:{id: graph.graph[vertex].vertexID}});
    for(var edge in graph.graph[vertex].referenceList)
    {

        var label = graph.graph[vertex].referenceList[edge].label;
        var referenceID = graph.graph[vertex].referenceList[edge].reference.vertexID;

      _edges.push({data:{id:(incrementedge++)+label, weight:1 ,source:vertex, target:referenceID}});
    }
  }

  const res = detectCycles(graph.graph, find_just_one_cycle);

  if(res.foundCycle) {
    document.getElementById("label_output").textContent = ("Found cycles");
  }
  else {
    document.getElementById("label_output").textContent = ("Found no cycles");
  }

  document.getElementById("enumerated_cycles").value = "";


  // create graph here!
  for( var sc in res.cycles) {
    var string = "{ ";
    for ( var vert in res.cycles[sc] ) {
      string += res.cycles[sc][vert]["vertex"].vertexID;
      if( res.cycles[sc][vert]["refLabel"] === "#interface_ref") {
        string += " <~implements~ ";
      }
      else if (res.cycles[sc][vert]["refLabel"] === "#union_ref") {
        string += " -union-> ";
      }
      else string += " -[" + res.cycles[sc][vert]["refLabel"] + "]-> ";
      //string += ", ";
    }
    string = string.slice(0,-7);
    string += " }";
    document.getElementById("enumerated_cycles").value += string + "\n";
  }

  // cytoscape from here and on.

  var cy = cytoscape({
    container: document.getElementById('cy'),

    boxSelectionEnabled: true,
    autounselectify: true,


    style: cytoscape.stylesheet()
    .selector('node')
    .css({
      'content': 'data(id)'
    })
    .selector('edge')
    .css({
      'curve-style': 'bezier',
      'target-arrow-shape': 'triangle',
      'width': 5,
      'line-color': '#ddd',
      'target-arrow-color': '#555'
    })
    .selector('.highlighted')
    .css({
      'background-color': '#61bffc',
      'line-color': '#61bffc',
      'target-arrow-color': '#61bffc',
      'transition-property': 'background-color, line-color, target-arrow-color',
      'transition-duration': '0.5s'
    }),

    elements: {
      nodes: _vertices,
        //{ data: { id: 'a' } },
      edges: _edges
        //{ data: { id: 'a"e', weight: 1, source: 'a', target: 'e' } },
    },
    styleEnabled : true,

    gravity: 1,

    layout: {
      name: 'cose',
      directed: true,
      roots: '#a',
      padding: 10
    }
  });
}
