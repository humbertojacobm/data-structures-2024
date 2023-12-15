/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {    
    let stepPathEnd = "";
    for (let index = 0; index < paths.length; index++) {
        const currentPath = paths[index];
        const pathStart = currentPath[0];
        const pathEnd = currentPath[1];        
        stepPathEnd = pathEnd;

        if(index == 0){
            continue;
        }
    
        if(pathEnd == paths[index-1][1])
        {
            stepPathEnd = pathEnd2;
        }            
    }
    return stepPathEnd.toString();
};

console.log(destCity([["a","b"],["b","c"], ["c","d"]]));