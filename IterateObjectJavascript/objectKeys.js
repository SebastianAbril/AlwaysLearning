const languages = {
    fra: "French",
    kon: "Kikongo",
    lin: "Lingala",
    lua: "Tshiluba",
    swa: "Swahili"
    }
    let languagesKeys = Object.keys(languages); // [ 'fra', 'kon', 'lin', 'lua', 'swa' ]
    console.log(languagesKeys);
    for(let i=0; i < languagesKeys.length ; i++){
        console.log(languages[languagesKeys[i]]) 
    }                                            