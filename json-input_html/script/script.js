fetch("./json/data.json")
.then(response => {
    return response.json();
})
.then(jsondata => {
    console.log(jsondata)

    // h1 要素追加
    const h1Elm = document.createElement("h1");
    h1Elm.textContent = "問題";
    document.body.appendChild(h1Elm);
    
    // h2 要素追加
    const h2Elm = document.createElement("h2");
    h2Elm.textContent = jsondata.h2_data;
    document.body.appendChild(h2Elm);

    // p 要素追加
    const pElm = document.createElement("p");
    pElm.textContent = jsondata.p_data;
    document.body.appendChild(pElm);

    // url 追加
    const aElm = document.createElement("a");
    aElm.textContent = "URL:" + jsondata.url_data;
    aElm.setAttribute("href", jsondata.url_data);
    document.body.appendChild(aElm);
 })

 /*

↓参考サイト↓
https://www.delftstack.com/ja/howto/javascript/load-json-file-in-javascript/

*/