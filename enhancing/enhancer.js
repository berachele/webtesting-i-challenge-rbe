module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement >= 20){
    return item.enhancement = 20;
  }else{
    return item.enhancement + 1;
  }
}

function fail(item) {
  if(item.enhancement < 15){
    return item.durability - 5
  }
  else if(item.enhancement >= 16){
    item.durability = item.durability - 10
    item.enhancement = item.enhancement - 1
    return {...item}
  }else if(item.enhancement >= 15){
    item.durability = item.durability - 10
    return {...item}
  }
}

function repair(item) {
  return item.durability = 100;
}


//stretch
function get(item) {
  if(item.enhancement === 0){
    return item.name = item.name
  } else{
    return `[+ ${item.enhancement}] ${item.name}`
  }
}
