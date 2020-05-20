module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement >= 20){
    return item.enhancement + 0;
  }else{
    return item.enhancement + 1;
  }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return item.durability = 100;
}


//stretch
function get(item) {
  return { ...item };
}
