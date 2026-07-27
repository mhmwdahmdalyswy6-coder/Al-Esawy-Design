// تأثير بسيط على الأزرار
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});

// تحويل العميل إلى صفحة الطلب
document.querySelectorAll(".order-btn").forEach(button => {

    button.addEventListener("click", function () {

        const product = this.dataset.product;
        const price = this.dataset.price;

        window.location.href =
            `order.html?product=${encodeURIComponent(product)}&price=${encodeURIComponent(price)}`;

    });

});