createProduct()
createAdmin()
checklogin()
// HOME PAGE //
var myIndex = 0
carousel ()
function carousel() {
    var i;
    var x = document.getElementsByClassName("ads");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

let slideIndex = 1
showSlides(slideIndex)

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i
    let slides = document.getElementsByClassName("mySlides")
    let lis = document.getElementsByClassName("li")
    if ( n > slides.length ) 
        slideIndex = 1
    if ( n < slideIndex )
        slideIndex = slides.length
    for( i = 0 ; i < slides.length ; i++)
        slides[i].style.display  = "none"
    for( i = 0 ; i < lis.length ; i++)
        lis[i].className = lis[i].className.replace(" active","") 
    slides[slideIndex-1].style.display = "block";  
    lis[slideIndex-1].className += " active";
}

// MANG SAN PHAM //
function currency(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
}
function createProduct() {
    if(localStorage.getItem('product') === null) {
        let product = [
    {   name : "Xiaomi 12T", price : "17000000", origin : "China", img : "../image/xiaomi12T.png", brand : "xiaomi",id : "x01",
        info : { screen : "6.6 inch",camera : "50.0 MP + 12.0 MP + 10.0 MP",storage : "128GB",chip : "Snapdragon 8 Gen 1" }
    },
    {
        name : "Samsung A32",price : "5500000",origin : "Korea",img : "../image/samsung_a32.png",brand : "samsung",id : "s08",
        info : { screen : "6.4 inch",camera : "64 MP + 8 MP + 5 MP + 5 MP",storage : "128GB",chip : "MediaTek Helio G80" }
    },
    {   name : "Xiaomi 12",price : "17000000",origin : "China",img : "../image/xiaomi12.png",brand : "xiaomi",id : "x02",
        info : { screen : "6.6 inch",camera : "50.0 MP + 12.0 MP + 10.0 MP",storage : "128GB",chip : "Snapdragon 8 Gen 1"}
    },
    {
        name : "Samsung S22",price : "20000000",origin : "Korea",img : "../image/samsung_s22.png",brand : "samsung",id : "s01",
        info : {screen : "6.6 inch",camera : "50.0 MP + 12.0 MP + 10.0 MP",storage : "128GB",chip : "Snapdragon 8 Gen 1"}
    },
    {
        name : "Samsung A53",price : "11000000",origin : "Korea",img : "../image/samsung_a53.png",brand : "samsung",id : "s02",
        info : {screen : "6.5 inch",camera : "64.0 MP + 12.0 MP + 5.0 MP + 5.0 MP",storage : "256GB",chip : "Exynos 1280"},
    },
    {
        name : "iPhone 14 Pro Max",price : "35000000",origin : "Mỹ",img : "../image/iphone14promax.png",brand : "iphone",
        id : "i01",info : { screen : "6.7 inch",camera : "48.0 MP + 12.0 MP",storage : "128GB",chip : "Apple A16 Bionic"}
    },
    {   name : "Samsung A22", price : "4900000",origin : "Korea",img : "../image/samsung_a22.png",brand : "samsung",id : "s09",
        info : { screen : "6.4 inch",camera : "48 MP + 8 MP + 2 MP + 2 MP",storage : "128GB",chip : "MediaTek MT6769V" }
    },
    {   name : "iPhone 14 Pro", price : "30000000",origin : "Mỹ",img : "../image/iphone14pro.png",brand : "iphone",id : "i02",
        info : { screen : "6.1 inch",camera : "48.0 MP + 12.0 MP",storage : "128GB",chip : "Apple A16 Bionic"}
    },
    {   name : "iPhone 14 Plus",price : "27000000",origin : "Mỹ",img : "../image/iphone14plus.png",brand : "iphone",id : "i03",
        info : {screen : "6.7 inch",camera : "12.0 MP + 12.0 MP",storage : "128GB",chip : "Apple A15 Bionic"}
    },
    {   name : "Samsung A33",price : "6900000",origin : "Korea",img : "../image/samsung_a33.png",brand : "samsung",id : "s06",
        info : {screen : "6.4 inch",camera : "48 MP + 8 MP + 5 MP + 2 MP",storage : "128GB",chip : "Exynos 1280"}
    },
    {   name : "Xiaomi 11",price : "6400000",origin : "China",img : "../image/xiaomi11.png",brand : "xiaomi",id : "x03",
        info : {screen : "6.4 inch",camera : "50.0 MP + 8.0 MP + 2.0 MP + 2.0 MP",storage : "64GB",chip : "Snapdragon 680"}, 
    },
    {   name : "iPhone 14",price : "24000000",origin : "Mỹ",img : "../image/iphone14.png",brand : "iphone",id : "i04",
        info : {screen : "6.1 inch",camera : "12.0 MP + 12.0 MP",storage : "128GB",chip : "Apple A15 Bionic"}
    },
    {   name : "iPhone 13 Pro Max",price : "28000000",origin : "Mỹ",img : "../image/iphone13promax.png",brand : "iphone",id : "i05",
        info : {screen : "6.7 inch",camera : "12.0 MP + 12.0 MP + 12.0 MP",storage : "128GB",chip : "Apple A15 Bionic"}
    },
    {   name : "Vivo Y01",price : "2800000",origin : "Taiwan",img : "../image/vivoy01.png",brand : "vivo",id : "v12",
        info : {screen : "6.5 inch",camera : "8 MP",storage : "32GB",chip : "MediaTek Helio G80"}
    },
    {   name : "Xiaomi 11T",price : "10000000",origin : "China",img : "../image/xiaomi11T.png",brand : "xiaomi",id : "x04",
        info : {screen : "6.6 inch",camera : "108 MP + 8 MP + 5 MP",storage : "128GB",chip : "MediaTek Dimensity 1200"}, 
    },
    {   name : "iPhone 13 mini",price : "17000000",origin : "Mỹ",img : "../image/iphone13mini.png",brand : "iphone",id : "i06",
        info : {screen : "5.4 inch",camera : "12.0 MP + 12.0 MP",storage : "128GB",chip : "Apple A15 Bionic"}
    },
    {   name : "Samsung S22 Ultra",price : "26000000",origin : "Korea",img : "../image/samsung_s22ultra.png",brand : "samsung", id : "s04",
        info : {screen : "6.5 inch",camera : "108 MP + 12.0 MP + 10.0 MP +10.0 MP",storage : "128GB",chip : "Snapdragon 8 Gen 1"}
    },
    {   name : "Vivo Y02",price : "3300000",origin : "Taiwan",img : "../image/vivoy02.png",brand : "vivo",id : "v11",
        info : {screen : "6.5 inch",camera : "8 MP",storage : "32GB",chip : "MediaTek Helio G80"}
    },
    {   name : "iPhone 13",price : "19500000",origin : "Mỹ",img : "../image/iphone13.png",brand : "iphone",id : "i07",
        info : {screen : "6.1 inch",camera : "12.0 MP + 12.0 MP",storage : "128GB",chip : "Apple A15 Bionic"}
    },
    {   name : "iPhone 12 mini",price : "15000000",origin : "Mỹ",img : "../image/iphone12.png",brand : "iphone",id : "i10",
        info : {screen : "5.4 inch",camera : "12.0 MP + 12.0 MP",storage : "256GB",chip : "Apple A14 Bionic"}
    },
    {   name : "Xiaomi POCO",price : "3000000",origin : "China",img : "../image/xiaomipoco.png",brand : "xiaomi",id : "x08",
        info : {screen : "6.7 inch",camera : "13 MP + 2 MP", storage : "64GB",chip : "JLQ JR510"}
    },
    {   name : "iPhone 13 Pro",price : "25000000",origin : "Mỹ",img : "../image/iphone13promax.png",brand : "iphone",id : "i08",
        info : {screen : "6.1 inch",camera : "12.0 MP + 12.0 MP + 12.0 MP",storage : "128GB",chip : "Apple A15 Bionic"}
    },
    {   name : "Vivo Y21",price : "6000000",origin : "Taiwan",img : "../image/vivoy21.png",brand : "vivo",id : "v10",
        info : {screen : "6.5 inch",camera : "50 MP + 2 MP",storage : "128GB",chip : "MediaTek Helio G80"}
    },
    {   name : "Xiaomi 10",price : "7000000",origin : "China",img : "../image/xiaomi10.png",brand : "xiaomi",id : "x05",
        info : {screen : "6.6 inch",camera : "108 MP + 8 MP + 5 MP + 2 MP",storage : "128GB",chip : "Snapdragon 732G"}, 
    },
    {   name : "Vivo Y22",price : "6000000",origin : "Taiwan",img : "../image/vivoy22.png",brand : "vivo",id : "v09",
        info : {screen : "6.5 inch",camera : "50 MP + 2 MP",storage : "128GB",chip : "Snapdragon 680"}
    },
    {   name : "iPhone 12",price : "16500000",origin : "Mỹ",img : "../image/iphone12.png",brand : "iphone",id : "i09",
        info : {screen : "6.1 inch",camera : "12.0 MP + 12.0 MP",storage : "64GB",chip : "Apple A14 Bionic"}
    },
    {   name : "Samsung A03",price : "2600000",origin : "Korea",img : "../image/samsung_a03.png",brand : "samsung",id : "s11",
        info : {screen : "6.5 inch",camera : "48 MP + 2 MP",storage : "32GB",chip : "Unisoc T606"}
    },
    {   name : "Vivo T1",price : "6200000",origin : "Taiwan",img : "../image/vivot1.png",brand : "vivo",id : "v08",
        info : {screen : "6.5 inch",camera : "50 MP + 2 MP",storage : "128GB",chip : "Snapdragon 680"}
    },
    {   name : "Xiaomi 10s",price : "3900000",origin : "China",img : "../image/xiaomi10s.png",brand : "xiaomi",id : "x06",
        info : {screen : "6.5 inch",camera : "50 MP + 8 MP + 5 MP + 2 MP",storage : "128GB",chip : "MediaTek Helio G88"}, 
    },
    {   name : "Vivo Y53",price : "7000000",origin : "Taiwan",img : "../image/vivoy53.png",brand : "vivo",id : "v07",
        info : {screen : "6.5 inch",camera : "64 MP + 2 MP + 2 MP",storage : "128GB",chip : "MediaTek Helio G80"}
    },
    {   name : "Xiaomi 11s",price : "8500000",origin : "China",img : "../image/xiaomi11s.png",brand : "xiaomi",id : "x12",
        info : {screen : "6.5 inch",camera : "64 MP + 8 MP +5 MP",storage : "128GB",chip : "Snapdragon 778G"}, 
    },
    {   name : "Samsung M53",price : "12500000",origin : "Korea",img : "../image/samsung_m53.png",brand : "samsung",id : "s05",
        info : {screen : "6.7 inch",camera : "108 MP + 8 MP + 2 MP +2 MP",storage : "256GB",chip : "MediaTek Dimensity 900 5G"}
    },
    {   name : "iPhone 11",price : "11800000",origin : "Mỹ",img : "../image/iphone11.png",brand : "iphone",id : "i11",
        info : {screen : "6.1 inch",camera : "12.0 MP + 12.0 MP", storage : "64GB",chip : "Apple A13 Bionic"}
    },
    {   name : "Vivo Y55",price : "7000000",origin : "Taiwan",img : "../image/vivoy55.png",brand : "vivo",id : "v06",
        info : {screen : "6.4 inch",camera : "50 MP + 2 MP + 2 MP",storage : "128GB",chip : "Snapdragon 680"}
    },
    {   name : "Xiaomi 9C",price : "3200000",origin : "China",img : "../image/xiaomi9c.png",brand : "xiaomi",id : "x07",
        info : {screen : "6.5 inch",camera : "13 MP + 2 MP + 2 MP",storage : "128GB",chip : "MediaTek Helio G88"} 
    },
    {   name : "Samsung A04",price : "4000000",origin : "Korea",img : "../image/samsung_a04.png",brand : "samsung",id : "s10",
        info : {screen : "6.5 inch",camera : "50 MP + 2 MP + 2 MP", storage : "64GB",chip : "Exynos 850"}
    },
    {   name : "Vivo V23",price : "12000000",origin : "Taiwan",img : "../image/vivov23.png",brand : "vivo",id : "v05",
        info : {screen : "6.4 inch",camera : "64 MP + 8 MP + 2 MP",storage : "128GB",chip : "MediaTek Dimensity 920 "}
    },
    {   name : "Xiaomi 12s",price : "16000000",origin : "China",img : "../image/xiaomi12s.png",brand : "xiaomi",id : "x11",
        info : {screen : "6.5 inch",camera : "50 MP + 13 MP +5 MP",storage : "256GB",chip : "Snapdragon 8 Gen 1"}
    },
    {   name : "iPhone SE",price : "11500000",origin : "Mỹ",img : "../image/iphonese.png",brand : "iphone",id : "i12",
        info : {screen : "4.7 inch",camera : "12.0 MP", storage : "64GB",chip : "Apple A15 Bionic"}
    },
    {   name : "Vivo Y15",price : "3200000",origin : "Taiwan",img : "../image/vivoy15.png",brand : "vivo",id : "v03",
        info : {screen : "6.6 inch",camera : "13 MP + 2 MP", storage : "32GB",chip : "Snapdragon 8 Gen 1"}
    },
    {   name : "Samsung A13",price : "4800000",origin : "Korea",img : "../image/samsung_a13.png",brand : "samsung",id : "s12",
        info : {screen : "6.6 inch",camera : "50 MP + 5 MP + 2 MP + 2 MP",storage : "128GB",chip : "Exynos 850"}
    },
    {   name : "Vivo X80",price : "20000000",origin : "Taiwan",img : "../image/vivox80.png",brand : "vivo",id : "v04",
        info : {screen : "6.7 inch",camera : "50 MP + 12 MP + 12 MP",storage : "256GB",chip : "MediaTek Dimensity 9000"}
    },
    {   name : "Xiaomi 9A",price : "2300000",origin : "China",img : "../image/xiaomi9a.png",brand : "xiaomi",id : "x09",
        info : {screen : "6.5 inch",camera : "13 MP", storage : "32GB",chip : "MediaTek Helio G25"}
    },
    {   name : "Vivo V25",price : "10500000",origin : "Taiwan",img : "../image/vivo.png",brand : "vivo",id : "v01",
        info : {screen : "6.6 inch",camera : "50.0 MP + 12.0 MP + 10.0 MP",storage : "128GB",chip : "Snapdragon 8 Gen 1"}
    },
    {   name : "Samsung A23",price : "7000000",origin : "Korea",img : "../image/samsung_a23.png",brand : "samsung",id : "s07",
        info : {screen : "6.4 inch",camera : "50 MP + 5 MP + 2 MP + 2 MP",storage : "128GB",chip : "Snapdragon 695 5G"}
    },
    {   name : "Vivo V25e",price : "10500000",origin : "Taiwan",img : "../image/vivov25e.png",brand : "vivo",id : "v02",
        info : {screen : "6.6 inch",camera : "50.0 MP + 12.0 MP + 10.0 MP",storage : "128GB",chip : "Snapdragon 8 Gen 1"}
    },
    {   name : "Xiaomi A1",price : "2100000",origin : "China",img : "../image/xiaomia1.png",brand : "xiaomi",id : "x10",
        info : {screen : "6.5 inch",camera : "8 MP", storage : "32GB",chip : "MediaTek MT6761 "}
    },
    {   name : "Samsung A73",price : "12000000",origin : "Korea",img : "../image/samsung_a73.png",brand : "samsung",id : "s03",
        info : {screen : "6.7 inch",camera : "108.0 MP + 12.0 MP + 5.0 MP + 5.0 MP",storage : "128GB",chip : "Snapdragon 778G"}
    }
        ]
        localStorage.setItem('product',JSON.stringify(product))
    }
}


// HIEN THI SAN PHAM //

/* HIEN THI SAN PHAM NGAU NHIEN */

showProduct(JSON.parse(localStorage.getItem('product')))
function showProduct(tmpArr) {
    let product = tmpArr
    let perPage = 10
    let currentPage = 1
    let start = 0
    let end = perPage
    function renderProduct1() {
        const ProductPerform = document.getElementById("product-perform") 
        let s = ""
        const content = product.map((item,index) => {
            if(index >= start && index < end) {
                s += `
                <div class="col p-2-4 t-3 m-6" onclick="showProductDetail('${item.id}')" id="${item.id}">
                    <a class="home_product_iteam" href="#" >
                        <img src="${item.img}" alt="" class="home_product_iteam_img">
                        <h4 class="home_product_iteam_name">
                            ${item.name}
                        </h4>
                        <div class="home_produc_iteam_price">
                            <span class="home_product_price_curent">${currency(item.price) }</span>
                        </div>
                        <div class="home_product_iteam_origin">
                            <span class="home_product_iteam_origin_name">${item.origin}</span>
                        </div>
                    </a>
                </div>
                `
                return s;
            }
        })
    ProductPerform.innerHTML = s
    }
    function getCurrentPage1(currentPage) {
        start = (currentPage-1)*perPage
        end = currentPage*perPage
    }
    function changePage1() {
        const currentPages = document.querySelectorAll("#page div")
        for(let i=0 ; i<currentPages.length;i++) {
            currentPages[i].addEventListener("click",function() {
                let value = i + 1
                currentPage = value
                getCurrentPage1(currentPage)
                renderProduct1()
            })
        } 
    }
    function displayPanigation1(){
        let sotrang=Math.ceil(product.length/perPage);
        var lienket='';
        for(var i = 1;i<=sotrang;i++){
            vitri=(i-1)*perPage;
            lienket+='<div class="pageNumber">'+i+'</div>';
        }
        document.getElementById("page").innerHTML=lienket;
    }
    renderProduct1()
    displayPanigation1()
    changePage1()
}
/* HIEN THI SAN PHAM THEO HANG */

showProduct_classified()
function showProduct_classified() {
    let tmp = []
    let product = JSON.parse(localStorage.getItem('product'))
    const Ipcategory = document.getElementById("Ip-category")
    const Sscategory = document.getElementById("Samsung-category")
    const Xmcategory = document.getElementById("Xiaomi-category")
    const Vvcategory = document.getElementById("Vivo-category")
    Ipcategory.addEventListener("click" , function() {
        tmp=product.filter(function(product){
            return product.brand == "iphone"
        })
        showProduct(tmp)
    })
    Sscategory.addEventListener("click" , function() {
        tmp=product.filter(function(product){
            return product.brand == "samsung"
        })
        showProduct(tmp)
    })
    Xmcategory.addEventListener("click" , function() {
        tmp=product.filter(function(product){
            return product.brand == "xiaomi"
        })
        showProduct(tmp)
    })
    Vvcategory.addEventListener("click" , function() {
        tmp=product.filter(function(product){
            return product.brand == "vivo"
        })
        showProduct(tmp)
    })
}

// HIEN THI THONG TIN SAN PHAM //

// Đóng div thong tin san pham
window.onclick = function(event) {
    const product_detail = document.getElementById("product-detail")
    if (event.target == product_detail) {
        product_detail.style.display = "none";
    }
}

function showProductDetail (productid) {
    let product = JSON.parse(localStorage.getItem('product'))
    const product_detail = document.getElementById("product-detail")
    document.getElementById('product-detail').style.display='block'
    for(let i=0 ; i< product.length ; i++) {
        if(product[i].id === productid) {
            product_detail.innerHTML = `
        <div class="product-detail-div">
            <div class="pd-img">
                <img src="${product[i].img}" alt="">
            </div>
            <div class="pd-main">
                <div class="info">
                    <div>
                        <h2>${product[i].name}</h2>
                    <p>
                        Màn hình: ${product[i].info.screen}
                        <br>
                        <br>
                        Camera: ${product[i].info.camera}
                        <br>
                        <br>
                        Bộ nhớ: ${product[i].info.storage}
                        <br>
                        <br>
                        Chip: ${product[i].info.chip}
                        <br>
                        <br>
                        Giá: ${ currency(product[i].price)}
                    </p>
                    </div>
                </div>
                <div class="quantity">
                    <div><button id='minus'>-</button></div>
                    <div><input type="text" id='count'></div>
                    <div><button id='plus'>+</button></div>
                </div>
                <div class="button">
                    <button id='addToCart-el'>Thêm vào giỏ hàng</button>
                </div>
                </div>
            </div>
        `
        }
    }
    addToCart(productid) // chuc nang cua users da dang ki tai khoan
}

//      GIO HANG       //
function inCart(productid) {
    let cartArr = JSON.parse(localStorage.getItem('cart'));
    if(cartArr == null) return false
    for(let i=0;i<cartArr.length;i++) {
        if(cartArr[i].id == productid) {
            return true         
        }
    }
    localStorage.setItem('cart',JSON.stringify(cartArr));
    return false
}
function addToCart(productid) {
    let product = JSON.parse(localStorage.getItem('product'))
    const btnPlus = document.getElementById('plus')
    const btnMinus = document.getElementById('minus')
    const countInput = document.getElementById('count')
    const btnAddToCart = document.getElementById('addToCart-el')
    countInput.readOnly = true
    countInput.value = 1
    let tmpProduct
    let quantity
    btnPlus.addEventListener("click",function() {
            countInput.value++
            quantity = countInput.value
    })
    btnMinus.addEventListener("click",function() {
            if(countInput.value <= 1)
                btnMinus.readOnly = true
            else
                countInput.value--
            quantity = countInput.value
    })
    quantity = countInput.value
    btnAddToCart.addEventListener("click",function() {
        if(localStorage.getItem('cart')===null){
            let cartArr = []
            for(let i = 0 ; i < product.length ; i++) {
                if(product[i].id === productid && inCart(product[i].id) == false) {
                    tmpProduct = product[i]
                    tmpProduct.quantity = quantity
                    cartArr.push(tmpProduct)
                }
                else if(product[i].id === productid && inCart(product[i].id) == true){
                    alert("SẢN PHẨM ĐÃ CÓ TRONG GIỎ HÀNG !")
                } 
            } 
            localStorage.setItem('cart',JSON.stringify(cartArr));
        }
        else {
            let cartArr = JSON.parse(localStorage.getItem('cart'));
            for(let i = 0 ; i < product.length ; i++) {
                if(product[i].id === productid && inCart(product[i].id) == false) {
                    tmpProduct = product[i]
                    tmpProduct.quantity = quantity
                    tmpProduct.totalPrice = tmpProduct.quantity * tmpProduct.price
                    cartArr.push(tmpProduct)
                }
                else if(product[i].id === productid && inCart(product[i].id) == true){
                    alert("SẢN PHẨM ĐÃ CÓ TRONG GIỎ HÀNG !")
                } 
            }
            localStorage.setItem('cart',JSON.stringify(cartArr));
        } 
        showCartTable()
        alert("THÊM VÀO GIỎ HÀNG THÀNH CÔNG!")
        closeProductDetail()
    })  
}
showCartTable()
function showCartTable(){
    if (localStorage.getItem('cart')===null || localStorage.getItem('cart')=='[]'){
		var s='<p>GIỎ HÀNG ĐANG RỖNG</p>';
		document.getElementById('showCart').innerHTML=s;
		document.getElementById('cart-total').innerHTML= "0 VND";
    }
    else {
        let cartArr = JSON.parse(localStorage.getItem('cart'));
        let s=""
        let total = 0;
        for(let i = 0 ; i < cartArr.length ; i++) {
            s+= `
            <div class="cart-content-detail">
                <div class="cart-content-img">
                    <img src="${cartArr[i].img}" alt="">
                </div>
                <div class="cart-content-info">
                    ${cartArr[i].name}
                    <br>
                    <br>
                    ${currency(cartArr[i].price)}
                </div>
                <div class="cart-content-quantity">
                    <input type="number" min=1 id='cartQuantity' value='${cartArr[i].quantity}' onchange='updateCart(this.value,"${cartArr[i].id}")'>
                </div>
                <div class="cart-content-button">
                    <button onclick='deleteCartProduct("${cartArr[i].id}")'>
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
            `
            total+= cartArr[i].quantity * cartArr[i].price
        }           
        document.getElementById('showCart').innerHTML = s
        document.getElementById('cart-total').innerHTML = `${currency(total)}`
        if(cartArr.length == 0) {
            document.getElementById('showCart').innerHTML = `<p>GIỎ HÀNG ĐANG RỖNG</p>`
        }
    }
    
}  
function updateCart(value,productid) {
    let cartArr = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cartArr.length; i++) {
        if(cartArr[i].id === productid){
            cartArr[i].quantity = value;
            cartArr[i].totalPrice = value * cartArr[i].price
        }
    } 
    localStorage.setItem('cart',JSON.stringify(cartArr));
    showCartTable()
}
function closeProductDetail() {
    document.getElementById("product-detail").style.display="none"
}
function deleteCartProduct(productid) {
    let cartArr = JSON.parse(localStorage.getItem('cart'));
    for(let i = 0 ; i < cartArr.length ; i++) {
        if(cartArr[i].id === productid) {
            cartArr.splice(i,1);
        }
    }
    localStorage.setItem('cart',JSON.stringify(cartArr));
    showCartTable()
}

/* -------------------- TIM KIEM THEO GIA   -------------------- */

function search1(){
    let tmpArr = []
	var productsearch = document.getElementById('search').value.toLowerCase();
	var arrProduct = JSON.parse(localStorage.getItem('product'));
	if(productsearch != "") {
		for(var i = 0; i < arrProduct.length; i++){
			if ((arrProduct[i].name.toLowerCase().search(productsearch) != -1 || arrProduct[i].brand.toLowerCase().search(productsearch) != -1) && productsearch != '') {
				tmpArr.push(arrProduct[i])
                /* s+=`
                    <div class="col p-3 t-6 m-12" onclick="showProductDetail('${arrProduct[i].id}')" id="${arrProduct[i].id}">
                        <a class="home_product_iteam" href="#">
                            <img src="${arrProduct[i].img}" alt="" class="home_product_iteam_img">
                            <h4 class="home_product_iteam_name">
                                ${arrProduct[i].name}
                            </h4>
                            <div class="home_product_iteam_price">
                                <span class="home_product_price_curent">${currency(arrProduct[i].price)}</span>
                            </div>
                                            
                            <div class="home_product_iteam_origin">
                                <span class="home_product_iteam_origin_name">${arrProduct[i].origin}</span>
                            </div>
                        </a>
                    </div>` */
			}
		}   
        showProduct(tmpArr)
	}
    else
        showProduct(JSON.parse(localStorage.getItem('product')))
}
function search2(){
	var brandsearch = document.getElementById('brandsearch').value;
	var priceform = document.getElementById('priceform').value;
	var priceto = document.getElementById('priceto').value;
    var arrProduct = JSON.parse(localStorage.getItem('product'));
	var s='';
    function getFirstPageItems(tmpArr) {
        if(tmpArr.length > 10) {
            for(let i=0;i<10;i++) {
            s += `
                    <div class="col p-2-4 t-3 m-6" onclick="showProductDetail('${tmpArr[i].id}')" id="${tmpArr[i].id}">
                        <a class="home_product_iteam" href="#" >
                            <img src="${tmpArr[i].img}" alt="" class="home_product_iteam_img">
                            <h4 class="home_product_iteam_name">
                                ${tmpArr[i].name}
                            </h4>
                            <div class="home_produc_iteam_price">
                                <span class="home_product_price_curent">${currency(tmpArr[i].price)}</span>
                            </div>
                            <div class="home_product_iteam_origin">
                                <span class="home_product_iteam_origin_name">${tmpArr[i].origin}</span>
                            </div>
                        </a>
                    </div>
                    `
            }
        }
        else {
            for(let i=0;i<tmpArr.length;i++) {
                s += `
                        <div class="col p-2-4 t-3 m-6" onclick="showProductDetail('${tmpArr[i].id}')" id="${tmpArr[i].id}">
                            <a class="home_product_iteam" href="#" >
                                <img src="${tmpArr[i].img}" alt="" class="home_product_iteam_img">
                                <h4 class="home_product_iteam_name">
                                    ${tmpArr[i].name}
                                </h4>
                                <div class="home_produc_iteam_price">
                                    <span class="home_product_price_curent">${currency(tmpArr[i].price)}</span>
                                </div>
                                <div class="home_product_iteam_origin">
                                    <span class="home_product_iteam_origin_name">${tmpArr[i].origin}</span>
                                </div>
                            </a>
                        </div>
                        `
                }
        }
        document.getElementById('product-perform').innerHTML = s
    }
	if (brandsearch == 'all') {
        if (priceform == '' && priceto == '') {
            getFirstPageItems(JSON.parse(localStorage.getItem('product')))
            showProduct(JSON.parse(localStorage.getItem('product')))
        }
        else {
            let tmpArr1 = []
            for(var i = 0; i < arrProduct.length; i++){
                if (parseInt(arrProduct[i].price) >= parseInt(priceform) && parseInt(arrProduct[i].price) <= parseInt(priceto)) {
                    tmpArr1.push(arrProduct[i])
                } 
            }
            getFirstPageItems(tmpArr1)
            showProduct(tmpArr1)
        }
        
    }
	else {
        let tmpArr2 = []
		for(var i = 0; i < arrProduct.length; i++){
            if (brandsearch === arrProduct[i].brand.toLowerCase() && parseInt(arrProduct[i].price)>=parseInt(priceform) && parseInt(arrProduct[i].price) <= parseInt(priceto)) {
			    tmpArr2.push(arrProduct[i])
			}
            else if(brandsearch === arrProduct[i].brand.toLowerCase() && priceform == '' && priceto == '') {
                tmpArr2.push(arrProduct[i])
            }
		}
        getFirstPageItems(tmpArr2)
        showProduct(tmpArr2)
    }
    document.getElementById('product-perform').innerHTML = s;
}



/*-------- */

/* DON HANG */
function buy(){
	if(localStorage.getItem('userlogin')===null){
		alert("Bạn phải đăng nhập trước khi mua sản phẩm");
        document.getElementById('cart').style.display = 'none';
        showFormLogin();
		return false;
	}
	var info = '';
	var totalprice = 0;
	if(localStorage.getItem('cart')===null || localStorage.getItem('cart')=='[]'){
		return false;
	}
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
			info+=cartArray[i].quantity+' x '+cartArray[i].name+"<br>";
			totalprice+=cartArray[i].quantity*cartArray[i].price;
	}
	var customer = JSON.parse(localStorage.getItem('userlogin'));
	var date = new Date();
	var d = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
	if(localStorage.getItem('bill')===null){
		var billArray = [];
		var bill = {id: billArray.length, info: info, totalprice: totalprice, customer: customer, date: d, status: 'Chưa xử lý'};
		billArray.unshift(bill);
		localStorage.setItem('bill', JSON.stringify(billArray));
	}
	else{
		var billArray = JSON.parse(localStorage.getItem('bill'));
		var bill = {id: billArray.length, info: info, totalprice: totalprice, customer: customer, date: d, status: 'Chưa xử lý'};
		billArray.unshift(bill);
		localStorage.setItem('bill', JSON.stringify(billArray));
	}	
	localStorage.removeItem('cart');
    document.getElementById('cart').style.display = 'none';
	showCartTable();
    var text = "BẠN CÓ MUỐN THANH TOÁN KHÔNG?"
    if (confirm(text))
        alert("THANH TOÁN THÀNH CÔNG!")
    else 
        return true
}
function showbill(){ // sửa 2
    if(localStorage.getItem('userlogin')===null){
		alert("Bạn phải đăng nhập trước khi xem hóa đơn");
        showFormLogin();
		return false;
	}
    if (localStorage.getItem('bill') === null){  // sửa 1
        document.getElementById('bill').innerHTML = '<div class="bill_intro">"Hổng" có đơn nào hết<img class="bill_intro_icon" src="../image/billempty.jpg" alt=""> </div>';
	}else
    if (JSON.parse(localStorage.getItem('bill')).length === 0){  // sửa 1
        document.getElementById('bill').innerHTML = '<div class="bill_intro">"Hổng" có đơn nào hết<img class="bill_intro_icon" src="../image/billempty.jpg" alt=""> </div>';
	}
	else{
		var user = JSON.parse(localStorage.getItem('userlogin'))
		var billArray = JSON.parse(localStorage.getItem('bill'));
        var s= "";
		var v='<div class="bill_heading">DANH SÁCH ĐƠN HÀNG</div>'+
            '<div class="bill_heading_info2">'+
                '<span class="bill_info">Sản phẩm</span>'+
                '<span class="bill_info">Giá</span>'+
                '<span class="bill_info">Ngày xuất đơn</span>'+
                '<span class="bill_info">Tình trạng</span>'+
                '<span class="bill_info">Xóa</span>'+
            '</div>';
		for (var i = 0; i < billArray.length; i++) {
			if(user.username==billArray[i].customer.username){
				s += '<div class="billcontent">'+
					'<div>'+billArray[i].info+'</div>'+
					'<div>'+currency(billArray[i].totalprice)+'</div>'+
					'<div>'+billArray[i].date+'</div>'+
					'<div class="bill_status1">'+billArray[i].status+'</div>'+
                    '<button onclick="deleteBill('+billArray[i].id+')" id = "btn_delete_bill" class="btn_trash_bill"><i class="fa-sharp fa-solid fa-trash"></i></button>'+
				'</div>';
			}
		}
        if (s.length > 0)
		document.getElementById('bill').innerHTML = v+s;
        else
        document.getElementById('bill').innerHTML = '<div class="bill_intro">"Hổng" có đơn nào hết<img class="bill_intro_icon" src="../image/billempty.jpg" alt=""> </div>';
	}
}

// delete bill
function deleteBill(billid) {
    let flag = false;
        var text = "Bạn có muốn xóa hóa đơn không?";
        if (confirm(text)) {
            let billArray = JSON.parse(localStorage.getItem('bill'))
            for(let i = 0 ; i < billArray.length ; i++) {
                if(billArray[i].id === billid && billArray[i].status == "Chưa xử lý") {
                    billArray.splice(i,1);
                    flag =true
                }
            }
            if(flag) {
                localStorage.setItem('bill',JSON.stringify(billArray));
                showbill();
            }
            else 
                alert("ĐƠN HÀNG ĐÃ ĐƯỢC XỬ LÝ!")
        }
        else {
            
            alert("Bạn thật là thông minh");
            return true;
        }
}

/* LIEN HE */
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
/* ------------- */


/*DANG KY DANG NHAP */
function showFormSignUp() {
    document.getElementById('formsignup').style.display = 'block';
}
function closeFormSignUp() {
    document.getElementById('formsignup').style.display = 'none';
}
function showFormLogin() {
    document.getElementById('formlogin').style.display = 'block';
}
function closeFormLogin() {
    document.getElementById('formlogin').style.display = 'none';
}



// USER
var x = true;
function showPass() {
    if (x) {
        document.getElementById('password').type = 'text';
        document.getElementById('eyeopen').style.display = 'block';
        document.getElementById('eyeclose').style.display = 'none';
        x = false;

    }
    else {
        document.getElementById('password').type = 'password';
        document.getElementById('eyeopen').style.display = 'none';
        document.getElementById('eyeclose').style.display = 'block';
        x= true;

    }
}
function showPass2() {
    if (x) {
        document.getElementById('repassword').type = 'text';
        document.getElementById('eyeopen2').style.display = 'block';
        document.getElementById('eyeclose2').style.display = 'none';
        x = false;

    }
    else {
        document.getElementById('repassword').type = 'password';
        document.getElementById('eyeopen2').style.display = 'none';
        document.getElementById('eyeclose2').style.display = 'block';
        x= true;

    }
}
function showPass3() {
    if (x) {
        document.getElementById('passwordlogin').type = 'text';
        document.getElementById('eyeopen3').style.display = 'block';
        document.getElementById('eyeclose3').style.display = 'none';
        x = false;

    }
    else {
        document.getElementById('passwordlogin').type = 'password';
        document.getElementById('eyeopen3').style.display = 'none';
        document.getElementById('eyeclose3').style.display = 'block';
        x= true;

    }
}


function createAdmin(){
	if(localStorage.getItem('user')===null){
        var userArray = [];
		var user = {username: 'admin', password: '12345678', fullname: 'ADMIN', phone: '0867575163' , datesignup: '11-6-2022'};
		userArray.push(user);
		localStorage.setItem('user',JSON.stringify(userArray));
	}
}

document.getElementById('formsignup').addEventListener('submit', createUser);
document.getElementById('formlogin').addEventListener('submit', login);

function createUser(e) {
    e.preventDefault();
    var name = document.getElementById('fullname');
    var phone = document.getElementById('numberphone');
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var repassword = document.getElementById('repassword');
    var flag = false;

    // Phần kiểm tra Fullname người dùng
    if (name.value.length === 0) {
        document.getElementById('fullnameerror').style.display = 'block';
        document.getElementById('fullname').style.border = '1px solid red';
        name.focus();
        flag = true;
    }
    else 
            {
                let ten_regex = /^[AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+ [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+(?: [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]*)*/
                if (!ten_regex.test(name.value))
                {
                    document.getElementById('fullnameerror').style.display = 'block';
                    document.getElementById('fullnameerror').innerHTML= 'Tên không hợp lệ';
                    document.getElementById('fullname').style.border = '1px solid red';
                    flag = true;
}
                else {
                    document.getElementById('fullname').style.border = '1px solid black';
                    document.getElementById('fullnameerror').style.display = 'none';
                } 
                
            }
    
    // Phần kiểm tra số điện thoại người dùng
    if (phone.value.length === 0) {
        document.getElementById('phoneerror').style.display = 'block';
        document.getElementById('numberphone').style.border = '1px solid red';
        phone.focus();
        flag = true;
    }
    else
            {
                let phone_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
                if (!phone_regex.test(phone.value))
                {
                    document.getElementById('phoneerror').style.display = 'block';
                    document.getElementById('phoneerror').innerHTML= 'Số điện thoại không hợp lệ';
                    document.getElementById('numberphone').style.border = '1px solid red';
                    flag = true;
                }
                else {
                    document.getElementById('phoneerror').style.display = 'none';
                    document.getElementById('numberphone').style.border = '1px solid black';
                }
                
            }
    
    // Phần kiểm  tra tên đăng nhập người dùng
    if (username.value.length === 0) {
        document.getElementById('usernameerror').style.display = 'block';
        document.getElementById('username').style.border = '1px solid red';
        username.focus();
        flag = true;
    }
    else {
        document.getElementById('usernameerror').style.display = 'none';
        document.getElementById('username').style.border = '1px solid black';

    }
    
    // Phần kiểm tra mật khẩu người dùng
    if (password.value.length === 0) {
        document.getElementById('passerror').style.display = 'block';
        document.getElementById('password').style.border = '1px solid red';
        password.focus();
        flag = true;
    }
    else
        if (password.value.length < 8) {
            document.getElementById('passerror').style.display = 'block';
            document.getElementById('passerror').innerHTML = 'Mật khẩu phải đủ 8 kí tự';
            document.getElementById('password').style.border = '1px solid red';
            flag = true;
        }
        else {
            document.getElementById('passerror').style.display = 'none';
            document.getElementById('password').style.border = '1px solid black';

        }
    
    // Phần kiểm tra mật khẩu nhập lại của người dùng
    if (repassword.value.length === 0) {
        document.getElementById('repasserror').style.display = 'block';
        document.getElementById('repassword').style.border = '1px solid red';
        flag = true;
    }
    else
        if (repassword.value != password.value) {
            document.getElementById('repasserror').style.display = 'block';
            document.getElementById('repasserror').innerHTML = 'Mật khẩu nhập lại không đúng';
            document.getElementById('repassword').style.border = '1px solid red';
            flag = true;
        }
        else {
            document.getElementById('repasserror').style.display = 'none';
            document.getElementById('repassword').style.border = '1px solid black';

        }

    if(flag==true){
        return true;
    }
    var d = new Date();
    var datesignup = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
    var user = {username: username.value, password: password.value, fullname: name.value, phone: phone.value , datesignup: datesignup};
    var userArray = JSON.parse(localStorage.getItem('user'));
    for(var i=0;i<userArray.length;i++){
        if(user.phone==userArray[i].phone){
            document.getElementById('phoneerror').style.display = 'block';
            document.getElementById('phoneerror').innerHTML = 'Số điện thoại đã tồn tại';
            document.getElementById('numberphone').style.border = '1px solid red';
            phone.focus();
            return true;
        }
        if(user.username==userArray[i].username){
            document.getElementById('usernameerror').style.display = 'block';
            document.getElementById('usernameerror').innerHTML = 'Tên đăng nhập đã tồn tại';
            document.getElementById('username').style.border = '1px solid red';
            username.focus();
            return true;
        }

    }
    userArray.push(user);
    localStorage.setItem('user',JSON.stringify(userArray));
    alert('Bạn đã đăng kí thành công !');
    showFormLogin();
    closeFormSignUp();
}

function login(e){
	e.preventDefault();
	var username = document.getElementById('usernamelogin').value;
	var password = document.getElementById('passwordlogin').value;
	var flag=false;

    // Phần kiểm tra tên đăng nhập của người dùng
	if (username.length === 0) {
        document.getElementById('usernameloginerror').style.display = 'block';
        document.getElementById('usernamelogin').style.border = '1px solid red';

        flag = true;
    }
    else {
        document.getElementById('usernameloginerror').style.display = 'none';
        document.getElementById('usernamelogin').style.border = '1px solid black';
    }

    // Phần kiểm tra password của người dùng
    if (password.length === 0) {
        document.getElementById('passloginerror').style.display = 'block';
        document.getElementById('passwordlogin').style.border = '1px solid red';
        flag = true;
    }
    else
        if (password.length < 8) {
            document.getElementById('passloginerror').style.display = 'block';
            document.getElementById('passloginerror').innerHTML = 'Mật khẩu phải đủ 8 kí tự';
document.getElementById('passwordlogin').style.border = '1px solid red';
            flag = true;
        }
        else {
            document.getElementById('passloginerror').style.display = 'none';
            document.getElementById('passwordlogin').style.border = '1px solid black';
        }
	if(flag==true){
		return false;
	}
	var userArray = JSON.parse(localStorage.getItem('user'));
	for(var i=0;i<userArray.length;i++){
		if(username==userArray[i].username && password==userArray[i].password){
                closeFormLogin();
				localStorage.setItem('userlogin',JSON.stringify(userArray[i]));
                alert('Bạn đã đăng nhập thành công !');
				window.location.reload('Black_Phone.html');
				return true;
		}
	}
    document.getElementById('passloginerror').style.display = 'block';
	document.getElementById('passloginerror').innerHTML = 'Sai thông tin đăng nhập';
	return false;
}

function logout(){
	localStorage.removeItem('userlogin');
    window.location.href="Black_Phone.html";
}

function checklogin(){
	if(localStorage.getItem('userlogin')){
		var user = JSON.parse(localStorage.getItem('userlogin'));
		var s='';
		if(user.username=='admin' && user.password == '12345678'){
			window.location.href = "Admin.html"
		}else{
			s = /* `<div >
                    <button id = "useraccount">${user.fullname}</button>
                </div>
			    <div >
                    <button onclick="logout(\'Black Phone.html\')" id = "useraccount2">Đăng xuất</button>
                </div>
                `; */
                `<div class="header-account-user">
                    <div class="header-account-icon-user">
                        <div>
                            <i class="fa-solid fa-user"></i>
                        </div>
                    </div>
                    <div class="header-account-name-user">
                            ${user.fullname}
                    </div>
                    <div class="logout-user">
                        <button id="logout-btn" onclick="logout()">
                            <div>
                                <i class="fa-solid fa-right-from-bracket"></i>
                            </div>
                            <div>
                                Đăng xuất
                            </div>
                        </button>              
                    </div>
                </div>
                `
		}
		document.getElementById('div-sign').innerHTML = s;
	}
}
 
