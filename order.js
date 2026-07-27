// قراءة المنتج والسعر من الرابط
const params = new URLSearchParams(window.location.search);

const product = params.get("product");
const price = params.get("price");

// إذا كانت العناصر موجودة في الصفحة
const productInput = document.getElementById("product");
const priceInput = document.getElementById("price");
const title = document.getElementById("selectedProduct");
const priceText = document.getElementById("selectedPrice");

if (productInput) productInput.value = product || "";
if (priceInput) priceInput.value = price || "";

if (title) title.textContent = product ? "المنتج: " + product : "";
if (priceText) priceText.textContent = price ? "السعر: " + price + " جنيه" : "";

// إظهار فودافون كاش عند الاختيار
const payment = document.getElementById("payment");
const vodafoneBox = document.getElementById("vodafoneBox");

if (payment && vodafoneBox) {
    payment.addEventListener("change", function () {
        if (this.value === "فودافون كاش") {
            vodafoneBox.style.display = "block";
        } else {
            vodafoneBox.style.display = "none";
        }
    });
}

// منع الإرسال مؤقتًا
document.getElementById("orderForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let product = document.getElementById("product").value;
    let price = "";

if (product === "مج أبيض") {
    price = "90 جنيه";
}

if (product === "مج سحري") {
    price = "120 جنيه";
}

if (product === "ميدالية") {
    price = "20 جنيه";
}

if (product.includes("تابلوه")) {
    price = "80 جنيه";
}
    let size = "";

if (product.includes("تابلوه")) {
    size = document.getElementById("tableSize")?.value || "";
}
    let payment = document.getElementById("payment").value;
    let notes = document.querySelector("textarea").value;

    let myWhatsApp = "201007801549";

    let message = `طلب جديد من Al-Esawy Design:

الاسم: ${name}

رقم الهاتف: ${phone}

المنتج: ${product}

السعر: ${price}
${size ? "\nالمقاس: " + size : ""}

طريقة الدفع: ${payment}

ملاحظات:
${notes}`;

    window.open(
        `https://wa.me/${myWhatsApp}?text=${encodeURIComponent(message)}`,
        "_blank"
    );

});