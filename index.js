
function challenge6(arr)
{
    let a = 0;
    let b = 0;
    let c = 0;
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] === 'A')
        {
            a += 1;
        }
        else if(arr[i] === 'B')
        {
            b += 1;
        }
        else if(arr[i] === 'C')
        {
            c += 1;
        }
        
    }
    if(a > b && a > c)
    {
        console.log("A is the winner");
    }
    else if(b > a && b > c)
    {
        console.log("B is the winner");
    }
    else if(c > b && c > a)
    {
        console.log("C is the winner");
    }


    else if(a === b && a === c && b === c)
    {
        console.log("A B and C are equal");
    }
    else if(a === b)
    {
        console.log("A and B are both winners.");
    }
    else if(b === c)
    {
        console.log("B and C are both winners.");
    }


}

let vote = ['A', 'B', 'C', 'A'];
console.log(challenge6(vote));

function challenge5(text)
{
    let count = 0;
    if(text.length === 0)
    {
        return count;
    }
    text = text.trim();
    count = text.split(" ").length;
    return count;
}
let word = "abx bde gfh abd";
console.log(challenge5(word));
function challenge4(text, char)
{
    let count = 0;
    for(let i = 0; i < text.length; i++)
    {
        if(text.charAt(i) == char)
        {
            count++;
        }
    }
    return count;
}
let text1 = "det det";
let char1 = "e";
console.log(challenge4(text1, char1));
function challenge3(arr)
{
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        sum += arr[i] / arr.length;
    }
    return sum;
}

let arr = [85, 90, 78, 92];
console.log(challenge3(arr));


function challenge2(arr)
{
    let big = [];
    for(let i = (arr.length) - 1; i >= 0; i--)
    {
        big.push(arr[i]);
    }
    return big;

}
let array1 = [1, 2, 3, 4, 5];
console.log(arr.reverse());

function challenge1(width, height)
{
    let rectangleString = "";
    for(let num = 0; num < height; num++)
    {
        for(let number = 0; number < width; number++)
        { 
            rectangleString += "*";
        }
        rectangleString += "\n";
    }   
    return rectangleString;
  
}

console.log(challenge(5, 1));

