    let count = 0;
    const cookieButton = document.getElementById('cookie');
    const countDisplay = document.getElementById('count');

    cookieButton.addEventListener('click', () => {
        count++;
        countDisplay.textContent = `Cookies: ${count}`;
    });
    const items = [
    { name: 'Cursor', baseCost: 15, cps: 0.1, possede: 0 },
    { name: 'Grandma', baseCost: 100, cps: 1, possede: 0 },
    { name: 'Farm', baseCost: 1100, cps: 8, possede: 0 },
    { name: 'Mine', baseCost: 12000, cps: 47, possede: 0 },
    { name: 'Factory', baseCost: 130000, cps: 260, possede: 0 },
];

const shopContainer = document.getElementById('shop');

items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'shop-item p-4 border-b border-gray-300 flex justify-between items-center';

    const itemInfo = document.createElement('div');
    itemInfo.innerHTML = `<h3 class="text-lg font-semibold">${item.name}</h3>
                          <p>Cost: <span id="${item.name}-cost">${item.baseCost}</span> cookies</p>
                          <p>CPS: ${item.cps}</p>
                          <p>Owned: ${item.possede}</p>`;

    const buyButton = document.createElement('button');
    buyButton.className = 'bg-blue-500 text-white px-4 py-2 rounded';
    buyButton.textContent = 'Buy';
    buyButton.addEventListener('click', () => {
        if (count >= item.baseCost) {
            count -= item.baseCost;
            item.possede++;
            item.baseCost = Math.floor(item.baseCost * 1.15);
            document.getElementById(`${item.name}-cost`).textContent = item.baseCost;
            onPurchase(item);
            countDisplay.textContent = `Cookies: ${count}`;
            alert(`You bought a ${item.name}!`);
        } else {
            alert('Not enough cookies!');
        }
    });

    itemDiv.appendChild(itemInfo);
    itemDiv.appendChild(buyButton);
    shopContainer.appendChild(itemDiv);
});

const onPurchase = (item) => {
    const interval = setInterval(() => {
        count += item.cps;
        count++;
        countDisplay.textContent = `Cookies: ${count}`;
    }, 1000);
}