let root = {};

let head = root;

addWordToMap(word = "apple",root);
addWordToMap(word = "app",root);

function addWordToMap(word,root){
    for(let char of word){
        if(!root[char]){
            root[char] = {};
        }
        root = root[char];
    }

    root["isEnd"] = true;
}

console.log(root);

