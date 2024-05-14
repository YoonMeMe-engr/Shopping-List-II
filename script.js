const inputTag = document.getElementsByClassName("form-control")[0];
const shoppingListTag = document.getElementsByClassName("shoppingListContainer")[0];

let productId = 1;
const handleChange = (event) => {
    const inputValue = event.target.value;
    const productContainer = document.createElement("div");
    productContainer.classList.add("productContainer");
    const divTag = document.createElement("div");
    divTag.classList.add("productName"); //css ပေးဖို့သုံး
    divTag.addEventListener("click" , () => { //line သားဖို့သုံး
        const classExit = divTag.classList.contains("purchased");
        if (classExit) {
            divTag.classList.remove("purchased");
        } else {
            divTag.classList.add("purchased");
        }
    });
    const spanTag = document.createElement("span");
    const trashIcon = document.createElement("i"); //အမှိုက်ပုံးအတွက်သုံး
    trashIcon.classList.add("fa-solid" , "fa-trash-can");
    trashIcon.addEventListener("click" , (event) => {
        const renew = productContainer.remove();
        if (renew) {
            productId += 1;
            return;
        } else {
            productId -= 1;
            return;
    });
    spanTag.id = productId;
    const product = productId.toString() + ". " + inputValue; //1 2 3 4 ပါဖို့သုံး
    spanTag.append(product);
    divTag.append(spanTag);
    productContainer.append(divTag, trashIcon);
    shoppingListTag.append(productContainer);
    inputTag.value = "";
    productId += 1; // span Tag အသစ်ပေါ်လာဖို့သုံး
};

inputTag.addEventListener("change" , handleChange);

//<i class="fa-solid fa-trash-can"></i>
