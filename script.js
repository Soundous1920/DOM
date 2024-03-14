let totalPrice = 20;
   //to decrease the quantity
    function decreaseQuantity(quantityId) {
        const quantityElement = document.getElementById(quantityId);
        const currentQuantity = parseInt(quantityElement.textContent);
        if (currentQuantity > 0) {
            quantityElement.textContent = currentQuantity - 1;
            totalPrice -= 10; // Prix par article
            updateTotalPrice();
        }
    }
//to increase the quantity
    function increaseQuantity(quantityId) {
        const quantityElement = document.getElementById(quantityId);
        const currentQuantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = currentQuantity + 1;
        totalPrice += 10; // Prix par article
        updateTotalPrice();
    }
  
    function updateTotalPrice() {
        document.getElementById('totalPrice').textContent = totalPrice;
    }
      //to remove an item
    function removeItem(Id) {
        const quantityElement = document.getElementById('quantity' + Id.slice(-1));
        const currentQuantity = parseInt(quantityElement.textContent);
        totalPrice -= currentQuantity * 10; // Prix par article
        updateTotalPrice();
        const item = document.getElementById(Id);
        item.remove();
    }

    function Like(Id) {
        const heart = document.getElementById(Id);
        if (heart.classList.contains('liked')) {
            heart.classList.remove('liked');
        } else {
            heart.classList.add('liked');
        }
    }

   