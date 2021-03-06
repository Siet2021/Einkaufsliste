let shoppingItems = getShoppingItemsFromLocalStorage();

        updateList();

        function getShoppingItemsFromLocalStorage() {
            let items = localStorage.getItem('shoppingItems');

            if (items == null || items == '') {
                items = [];
            } else {
                items = items.split(',');
            }

            return items;
        }

        function addNewItem() {
            

            let item = document.getElementById('inp').value;
            document.getElementById('inp').innerHTML = '';

            if (item != null) {
                shoppingItems.push(item);
                localStorage.setItem('shoppingItems', shoppingItems);
            }
            inp.value = '';
        }

        function removeItem(itemIndex) {
            shoppingItems.splice(itemIndex, 1);
            localStorage.setItem('shoppingItems', shoppingItems);
        }

        function updateList() {
            document.getElementById('list').innerHTML = '';

            for (let index = 0; index < shoppingItems.length; index += 1) {
                document.getElementById('list').innerHTML += '<li class="l1">' + shoppingItems[index] +
                ' <button id="deletebutton" onclick="removeItem(' + index + '); updateList();">X</button></li>';
            
            }
        }