// first card
document.getElementById('first-card').addEventListener('click',function(){
    const cardprice1 = getCardbytid('first-card-price');
  const previoustotalprice = gettotalprice('total-price');

  const newtotalprice = previoustotalprice + cardprice1;
  setnewtotalprice('total-price',newtotalprice.toFixed(2));

 itemName('K. Accessories');
//  purchase-button
if(newtotalprice > 0){
  document.getElementById('purchase-btn').removeAttribute('disabled')
}else{
  document.getElementById('purchase-btn').setAttribute('disabled',true)
}
 // apply-button
if(newtotalprice >= 200){
  document.getElementById('apply-btn').removeAttribute('disabled')
}else{
  document.getElementById('apply-btn').setAttribute('disabled', true)
}
})

// 2nd card
document.getElementById('second-card').addEventListener('click',function(){
  const cardprice2 = getCardbytid('second-card-price');
  const previoustotalprice = gettotalprice('total-price');

  const newtotalprice = previoustotalprice + cardprice2;
  setnewtotalprice('total-price',newtotalprice.toFixed(2));

  itemName('j. Accessories');
  // purchase-btn
  if(newtotalprice > 0){
    document.getElementById('purchase-btn').removeAttribute('disabled')
  }else{
    document.getElementById('purchase-btn').setAttribute('disabled',true)
  }
  // apply-button
  if(newtotalprice >= 200){
    document.getElementById('apply-btn').removeAttribute('disabled')
  }
})
// 3rd-card
document.getElementById('third-card').addEventListener('click',function(){
    const cardprice3 = getCardbytid('third-card-price');
  const previoustotalprice = gettotalprice('total-price');

  const newtotalprice = previoustotalprice + cardprice3;
  setnewtotalprice('total-price',newtotalprice.toFixed(2)); 

  itemName('Home Cooker');
  // purchase-btn
  if(newtotalprice > 0){
    document.getElementById('purchase-btn').removeAttribute('disabled')
  }else{
    document.getElementById('purchase-btn').setAttribute('disabled',true)
  }
  // apply-button
  if(newtotalprice >= 200){
    document.getElementById('apply-btn').removeAttribute('disabled')
  }
})
// fourth-card
document.getElementById('fourth-card').addEventListener('click',function(){
    const cardprice4 = getCardbytid('fourth-card-price');
  const previoustotalprice = gettotalprice('total-price');

  const newtotalprice = previoustotalprice + cardprice4;
  setnewtotalprice('total-price',newtotalprice.toFixed(2));

  itemName('Sports Back Cap');
  // purchase-btn
  if(newtotalprice > 0){
    document.getElementById('purchase-btn').removeAttribute('disabled')
  }else{
    document.getElementById('purchase-btn').setAttribute('disabled',true)
  }
  // apply-button
  if(newtotalprice >= 200){
    document.getElementById('apply-btn').removeAttribute('disabled')
  }
})
// fifth card
document.getElementById('fifth-card').addEventListener('click',function(){
    const cardprice5 = getCardbytid('fifth-card-price');
    const previoustotalprice = gettotalprice('total-price');
  
    const newtotalprice = previoustotalprice + cardprice5;
    setnewtotalprice('total-price',newtotalprice.toFixed(2));

    itemName('Full Jersey Set');
    // purchase-btn
    if(newtotalprice > 0){
      document.getElementById('purchase-btn').removeAttribute('disabled')
    }else{
      document.getElementById('purchase-btn').setAttribute('disabled',true)
    }
    // apply-button
    if(newtotalprice >= 200){
      document.getElementById('apply-btn').removeAttribute('disabled')
    }
})
// 6th-card
document.getElementById('sixth-card').addEventListener('click',function(){
    const cardprice6 = getCardbytid('sixth-card-price');
    const previoustotalprice = gettotalprice('total-price');
  
    const newtotalprice = previoustotalprice + cardprice6;
    setnewtotalprice('total-price',newtotalprice.toFixed(2));

    itemName('Sports cates');
    // purchase-btn
    if(newtotalprice > 0){
      document.getElementById('purchase-btn').removeAttribute('disabled')
    }else{
      document.getElementById('purchase-btn').setAttribute('disabled',true)
    }
// apply-button
if(newtotalprice >= 200){
  document.getElementById('apply-btn').removeAttribute('disabled')
}
    
})

// apply button

document.getElementById('apply-btn').addEventListener('click', function(){

const couponvalue = getinputvaluebyid('coupon-input');
const discount = document.getElementById('discount-price');
const currenttotal = gettotalprice('total-price')

if (couponvalue === 'SELL200'){
  const discountprice = currenttotal - (currenttotal * 20 / 100);
  const afterdiscountprice = currenttotal - discountprice;
  setnewtotalprice('discount-price', afterdiscountprice.toFixed(2))
} else{
  alert('please use the right coupon')
}

const previoustotal = document.getElementById('final-price');
const previoustotalprice = gettotalprice('total-price');
const previousdiscountprice = gettotalprice('discount-price');
const newtotalprice = previoustotalprice - previousdiscountprice;
setnewtotalprice('final-price',newtotalprice.toFixed(2))

})









