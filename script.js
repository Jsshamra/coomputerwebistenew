function updateTotal() {
    let totalCost = 0;
    const components = document.querySelectorAll('#components select');

    components.forEach(component => {
        const price = parseInt(component.options[component.selectedIndex].getAttribute('data-price'));
        totalCost += price;
    });

    document.getElementById('total-cost').textContent = totalCost;
}


