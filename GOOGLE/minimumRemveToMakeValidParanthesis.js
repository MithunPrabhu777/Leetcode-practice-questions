var minRemoveToMakeValid = function (s) {
    let stack = [];

    let stringArray = s.split("");

    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] === "(") {
            stack.push(i);
        } else if (stringArray[i] === ")") {
            if (stack.length) stack.pop();
            else stringArray[i] = "";
        }
    }

    for (let i of stack) stringArray[i] = "";

    return stringArray.join("");
};

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)", "lee(t(c)ode)" would also be accepted.