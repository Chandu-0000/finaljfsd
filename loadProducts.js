document.addEventListener("DOMContentLoaded", function () {
    fetch("products.json")
        .then(response => response.json())
        .then(data => {
            const productGrid = document.getElementById("product-grid");
            data.forEach(product => {
                const productItem = `
                    <div class='product-item'>
                        <img src='${product.image}' alt='${product.name}' class='product-image' />
                        <h3>${product.name}</h3>
                        <p class='description'>${product.description}</p>
                        <p class='price'>Price: $${product.price}</p>
                        <p class='stock'>Stock: ${product.stock}</p>
                    </div>`;
                productGrid.innerHTML += productItem;
            });
        })
        .catch(error => console.error("Error loading products:", error));
});
