const mixedArray = [42, "text", null, false, undefined, { key: "value" }, [1, 2, 3], function() {}, "second"];

function categorizeArrayElements(arr) {
    // Your code here
    let arrayObject ={
        number:[],
        string:[],
        object:[],
        boolean:[],
        undefined:[],
        function:[]
    }
    for(let i = 0; i < mixedArray.length; i++){
        if(typeof(arr[i]) === "number"){
            arrayObject.number.push(arr[i])
        }
        else if(typeof(arr[i]) === "string"){
            arrayObject.string.push(arr[i])
        }
        else if(typeof(arr[i]) === "object"){
            arrayObject.object.push(arr[i])
        }
        else if(typeof(arr[i]) === "undefined"){
            arrayObject.undefined.push(arr[i])
        }
        else if(typeof(arr[i]) === "boolean"){
            arrayObject.boolean.push(arr[i])
        }
        else{
            arrayObject.function.push(arr[i])
        }
        
    }
    console.log(arrayObject)
}

const categorizedResult = categorizeArrayElements(mixedArray);
console.log(categorizedResult);