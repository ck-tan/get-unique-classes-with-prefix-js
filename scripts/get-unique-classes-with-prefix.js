function getUniqueClass(allObj, prefix) { 
	//gets unique class names from a group of jquery objects using regex with a given prefix
	var groupObj = allObj.filter("[class*="+prefix+"]");
	//var regex = /\b(ddd-\S*)\b/;
	prefix = escapeRegExp(prefix); //escape or not, this has to be tested on an individual basis
	var regex = new RegExp("\\b(" + prefix + "\\S*)\\b");
	var uniqueClass = [];
	for (var i = 0; i < groupObj.length; i++) { //for loop method
		if($.inArray(groupObj.eq(i).attr("class").match(regex)[0], uniqueClass) < 0) {
			uniqueClass.push(groupObj.eq(i).attr("class").match(regex)[0]);
		}
	}
	/*
	groupObj.each(function() { //each method
		//need to test and tweak performance
		//should change to for loop
		if($.inArray($(this).attr("class").match(regex)[0], uniqueClass) < 0) {
			uniqueClass.push($(this).attr("class").match(regex)[0]);
		}
	});
	*/
	return uniqueClass;
}
function escapeRegExp(regex) { //escapes values for regex use, useful for dynamic regex
	return regex.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}