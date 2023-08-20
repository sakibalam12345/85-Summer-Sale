function getCardbytid(cardid){
    const cardfield = document.getElementById(cardid);
    const cardinner = cardfield.innerText;
    const cardstringtonumber = parseFloat(cardinner)
    return cardstringtonumber;
}

function gettotalprice(totalprice){
    const totalpricefield = document.getElementById(totalprice);
    const totalpriceinner = totalpricefield.innerText;
    const totalpricetonumber = parseFloat(totalpriceinner);
    return totalpricetonumber;
}

function setnewtotalprice(totalpricedisplay,newvalue){
    const totalpricefield = document.getElementById(totalpricedisplay);
    totalpricefield.innerText = newvalue;
     
}

function itemName(item){
    console.log(item);
    
    const itemfield = document.getElementById('item-name');
    const count = itemfield.childElementCount;
    const additem = document.createElement('p');
    additem.innerText = (count + 1) + ". " + (item) ;
    itemfield.appendChild(additem);
}

