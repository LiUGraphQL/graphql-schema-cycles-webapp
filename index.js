function findCyclesMain() {


    document.getElementById("enumerated_cycles").value = "Calculating...";
    var find_just_one_cycle = !document.getElementById("enumerate_all").checked;
    var schema = document.getElementById("schema_text").value;

    const jsObj = convert(schema);

    const graph = convertToGraph(jsObj);

    const res = detectCycles(graph, find_just_one_cycle);

    if(res.foundCycle) {
	document.getElementById("label_output").textContent = ("Found cycles");
    }
    else {
	document.getElementById("label_output").textContent = ("Found no cycles");
    }

    document.getElementById("enumerated_cycles").value = "";

    for( var sc in res.cycles) {
    var string = "{ ";
	for ( var vert in res.cycles[sc] ) {
	    string += res.cycles[sc][vert]["vertex"].vertexID;
	    if( res.cycles[sc][vert]["vertex"].vertexType === "interface") string += "(i)";
	    string += "[" + res.cycles[sc][vert]["refLabel"] + "]";
	    string += ", ";
	}
	string = string.slice(0,-4);
	string += " }";
	document.getElementById("enumerated_cycles").value += string + "\n";
    }
}
