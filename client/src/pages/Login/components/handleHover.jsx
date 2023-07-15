export function handleIconMouseOver(target) {
  if (!target.children[0]) {
    target.style.color = 'rgb(175, 175, 175)';
    return;
  }
  target.children[0].style.color = 'rgb(175, 175, 175)';
}

export function handleIconMouseOut(target) {
  if (!target.children[0]) return;
  target.children[0].style.color = 'black';
}
