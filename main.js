var addForm = document.getElementById("addForm");
var ItemList = document.getElementById("items");
var Filter = document.getElementById("filter");

// Form submit Event
addForm.addEventListener("submit", addItem);
// Delete Event
ItemList.addEventListener("click", removeItem);
// Filter Event
Filter.addEventListener("keyup", searchItens);

function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById("item").value;

  // Create new li element
  var li = createLi(newItem, "list-group-item");

  // Create del button element
  var deleteBtn = createBtn("btn btn-danger btn-sm float-right delete");

  // Append delete btn in li
  li.appendChild(deleteBtn);

  // append li in ItemList
  ItemList.appendChild(li);
}

function createBtn(classValue) {
  var deleteBtn = document.createElement("button");
  // Add classes to dele button
  deleteBtn.className = classValue;
  // Append text node
  deleteBtn.appendChild(document.createTextNode("X"));
  return deleteBtn;
}

function createLi(newItem, classValue) {
  var li = document.createElement("li");

  // Add class
  li.className = classValue;

  // Add text node with inpu value
  li.appendChild(document.createTextNode(newItem));

  return li;
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are your sure?")) {
      var li = e.target.parentElement;
      ItemList.removeChild(li);
    }
  }
}

function searchItens(e) {
  // convert text to lowarecase
  var text = e.target.value.toLowerCase();
  // Get list
  var items = ItemList.getElementsByTagName("li");
  // Convert to Array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) !== -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
