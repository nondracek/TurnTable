let items = 4;
var itemPositions = {
  'item-one': 0,
  'item-two': 1,
  'item-three': 2,
  'item-four': 3
};
var degrees = 0;

function selectItem(item) {
  let position = itemPositions[item];
  let rotationAmount = 360 - position*(360/items);
  degrees = degrees + rotationAmount
  rotateTurntable(degrees);
  rotateItemIcons(degrees);
  updatePositions(item);
  highlightSelected();
}

function rotateTurntable(rotationAmount) {
  turntableElement = document.getElementById("turntable");
  turntableElement.style.transition = "transform 1s ease-in-out";
  turntableElement.style.transform = "rotate(" + rotationAmount + "deg)";
}

function rotateItemIcons(rotationAmount) {
  itemIDs = Object.keys(itemPositions);
  for (var i=0; i < itemIDs.length; i++) {
    item = document.getElementById(itemIDs[i]);
    item.style.transition = "transform 1s ease-in-out";
    item.style.transform = "rotate(" + (360 - rotationAmount) + "deg)";
  }
}

function updatePositions(item) {
  startingPosition = itemPositions[item];
  itemIDs = Object.keys(itemPositions);
  for (var i=0; i < itemIDs.length; i++) {
    for (var j=0; j < startingPosition; j++) {
      if (itemPositions[itemIDs[i]] == 0) {
        itemPositions[itemIDs[i]] = 4;
      }
      itemPositions[itemIDs[i]] = itemPositions[itemIDs[i]] - 1;
    }
  }
}

function highlightSelected() {
  itemIDs = Object.keys(itemPositions);
  for (var i=0; i < itemIDs.length; i++) {
      item = document.getElementById(itemIDs[i]);
    if (itemPositions[itemIDs[i]] == 0) {
      // item.style.outline = "white solid 3px";
      item.style.boxShadow = "0px 0px 15px rgb(255, 249, 69)"
    } else {
      item.style.boxShadow = "none";
    }
  }
}