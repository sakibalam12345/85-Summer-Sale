// first card
document.getElementById('first-card').addEventListener('click',function(){
    const cardprice1 = getCardbytid('first-card-price');
  const previoustotalprice = gettotalprice('total-price');

  const newtotalprice = previoustotalprice + cardprice1;
  setnewtotalprice('total-price',newtotalprice.toFixed(2));
})

// 2nd card
document.getElementById('second-card').addEventListener('click',function(){
  const cardprice2 = getCardbytid('second-card-price');
  const previoustotalprice = gettotalprice('total-price');

  const newtotalprice = previoustotalprice + cardprice2;
  setnewtotalprice('total-price',newtotalprice.toFixed(2));
})
// 3rd-card
document.getElementById('third-card').addEventListener('click',function(){
    const cardprice2 = getCardbytid('third-card-price');
  const previoustotalprice = gettotalprice('total-price');

  const newtotalprice = previoustotalprice + cardprice2;
  setnewtotalprice('total-price',newtotalprice.toFixed(2)); 
})
// fourth-card
document.getElementById('fourth-card').addEventListener('click',function(){
    const cardprice2 = getCardbytid('fourth-card-price');
  const previoustotalprice = gettotalprice('total-price');

  const newtotalprice = previoustotalprice + cardprice2;
  setnewtotalprice('total-price',newtotalprice.toFixed(2));
})
// fifth card
document.getElementById('fifth-card').addEventListener('click',function(){
    const cardprice2 = getCardbytid('fifth-card-price');
    const previoustotalprice = gettotalprice('total-price');
  
    const newtotalprice = previoustotalprice + cardprice2;
    setnewtotalprice('total-price',newtotalprice.toFixed(2));
})
// 6th-card
document.getElementById('sixth-card').addEventListener('click',function(){
    const cardprice2 = getCardbytid('sixth-card-price');
    const previoustotalprice = gettotalprice('total-price');
  
    const newtotalprice = previoustotalprice + cardprice2;
    setnewtotalprice('total-price',newtotalprice.toFixed(2));
})


