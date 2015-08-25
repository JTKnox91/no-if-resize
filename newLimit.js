function newLimit(items, oldLimit) {
  return oldLimit * (
    Math.pow(2, Math.floor(
      (items/oldLimit)*(4/3)
    ))/
    Math.pow(2, Math.ceil(
      ( (oldLimit - items) / oldLimit) * (4/3) -1
    ))
  );
}

function newLimitOneLiner(items,oldLimit){return oldLimit*(Math.pow(2,Math.floor((items/oldLimit)*(4/3)))/Math.pow(2,Math.ceil(((oldLimit-items)/oldLimit)*(4/3)-1);}