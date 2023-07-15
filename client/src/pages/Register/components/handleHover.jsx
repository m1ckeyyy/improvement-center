export function handleIconMouseOver(target) {
  if (!target.children[0]) {
    target.style.color = 'rgba(18, 142, 91, 1)';
    return;
  }
  target.children[0].style.color = 'rgba(18, 142, 91, 1)';
}

export function handleIconMouseOut(target) {
  if (!target.children[0]) return;
  target.children[0].style.color = 'black';
}
