/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    
    path = path.split("/");

    const stack = [];

    for(let index = 0; index < path.length; index++) {

        if(path[index] ===  "..") {
            stack.pop();
            stack.pop();
        }
        else if(path[index] === "." || path[index] === "") continue;
        else {
            stack.push("/");
            stack.push(path[index]);
        }
    }

    return stack.length ? stack.join("") : "/"
};