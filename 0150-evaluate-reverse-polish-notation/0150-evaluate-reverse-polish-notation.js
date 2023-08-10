/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
let stack=[];

    for(const val of tokens){
        if(val==="+"){
            stack.push(stack.pop() +stack.pop())
        }else if(val === '-'){
            let num2 = stack.pop();
            let num1=stack.pop();
            stack.push(num1-num2);
        }else if (val==='*'){
            stack.push(stack.pop()*stack.pop());
        }else if(val ==='/') {
              let num2 = stack.pop();
            let num1=stack.pop();
            stack.push(Math.trunc(num1/num2));
        }else{
            stack.push(Number(val))
        }
    }

    return stack.pop()
    

};