/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function(s) 
{
    let stack = [];
    let freq = new Array(26).fill(0); 
    
    for (let i = 0; i < s.length; i++) 
    {
        if (s[i] === '*') 
        {
            if (stack.length > 0) 
            {
                let minCharCode = -1;
                for (let j = 0; j < 26; j++) 
                {
                    if (freq[j] > 0) 
                    {
                        minCharCode = j;
                        break;
                    }
                }
                
                if (minCharCode !== -1) 
                {
                    let minChar = String.fromCharCode(minCharCode + 97);
                    
                    for (let k = stack.length - 1; k >= 0; k--) 
                    {
                        if (stack[k] === minChar) 
                        {
                            stack.splice(k, 1);
                            freq[minCharCode]--;
                            break;
                        }
                    }
                }
            }
        } 
        else 
        {
            stack.push(s[i]);
            let charCode = s[i].charCodeAt(0) - 97;
            freq[charCode]++;
        }
    }
    return stack.join('');


    // let stack = []
    // for(let i=0; i<s.length; i++)
    // {
    //     if(s[i]==='*')
    //     {
    //         if(stack.length>0)
    //         {
    //             let minChar = stack.reduce((min, curr) => curr < min ? curr : min);
    //             let minIndex = stack.lastIndexOf(minChar);
    //             stack.splice(minIndex, 1);
    //         }
    //     }
    //     else
    //     {
    //         stack.push(s[i])
    //     }
    // }   
    // return stack.join('')


    // This Exceeds the time limit but works
    // let count = 0;
    // for(let i=0; i<s.length; i++)
    // {
    //     if(s[i]==='*')
    //         count++;
    // }
    // if(count===0)
    //     return s;
    // while(count>0)
    // {
    //     let stack = []
    //     for(let i=0; i<s.length; i++)
    //     {
    //         let temp = s[i]
    //         if(temp!=='*')
    //         {
    //             stack.push(temp)
    //         }
    //         else
    //         {
    //             let minChar = stack.reduce((min, curr) => curr < min ? curr : min);
    //             let index = stack.lastIndexOf(minChar);
    //             stack.splice(index, 1);
    //             for(let j = i + 1; j < s.length; j++) 
    //             {
    //                 stack.push(s[j]);
    //             }
    //             break;
    //         }    
    //     }
    //     s = stack.join('');
    //     count--;
    // }
    // return s;
};