let orderId = 1;

    const menuItems = {
      Burger: { image: 'burger.jpg' },
      Fries: { image: 'Fries.jpg' },
      Drink: { image: 'Drink.jpg' },
    };

    function orderFood() {
      const selectedItems = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);

      if (selectedItems.length === 0) {
        alert("Please select at least one item to order.");
        return;
      }

      simulateOrder(selectedItems)
        .then(order => displayOrder(order))
        .catch(error => console.error(error));
    }

    function simulateOrder(selectedItems) {
      return new Promise((resolve) => {
        const randomSeconds = Math.floor(Math.random() * 10) + 1;
        setTimeout(() => {
          const order = {
            id: orderId++,
            items: selectedItems,
          };
          resolve(order);
        }, randomSeconds * 1000);
      });
    }

    function displayOrder(order) {
      const orderResult = document.getElementById('orderResult');
      const itemsHTML = order.items.map(item => `<img src="${menuItems[item].image}" alt="${item}">`).join('');
      orderResult.innerHTML = `
        <p>Order ID: ${order.id}</p>
        ${itemsHTML}
      `;
    }