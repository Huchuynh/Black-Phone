//createProduct()
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
/* function createProduct() {
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
} */

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
                <div class="col p-2-4 t-3 m-6" onclick="showProductFix('${item.id}')" id="${item.id}">
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
    let product = JSON.parse(localStorage.getItem('product'))
    let tmp = []
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

// HIEN THI CHINH SUA SAN PHAM //

function showProductFix (productid) {
    let product = JSON.parse(localStorage.getItem('product'))
    const product_fix = document.getElementById("product-fix")
    document.getElementById('product-fix').style.display='block'
    for(let i=0 ; i< product.length ; i++) {
        if(product[i].id === productid) {
            product_fix.innerHTML = `
            <form class="product-fix-form">
            <div class="product-fix-form-header">
                <span onclick="document.getElementById('product-fix').style.display='none'" class="close" id="close" >&times;</span>
                <h2>Thông tin sản phẩm</h2>
            </div>
            <div class="product-fix-form-content">
                <div>
                    <p>ID: </p> 
                    <input type="text" id="prd-id" placeholder="ID" value="${product[i].id}" required readonly>
                </div>
                <div>
                    <p>Tên sản phẩm: </p>
                    <input type="text" id="prd-name" placeholder="Tên sản phẩm" value="${product[i].name}" required>
                </div>
                <div>
                    <p>Màn hình: </p>
                    <input type="text" id="prd-screen" placeholder="Màn hình" value="${product[i].info.screen}" required>
                </div>
                <div>
                    <p>Camera: </p>
                    <input type="text" id="prd-camera" placeholder="Camera" value="${product[i].info.camera}" required>
                </div>
                <div>
                    <p>Bộ nhớ: </p>
                    <input type="text" id="prd-storage" placeholder="Bộ nhớ" value="${product[i].info.storage}" required>
                </div>
                <div>
                    <p>Chip: </p>
                    <input type="text" id="prd-chip" placeholder="Chip" value="${product[i].info.chip}" required>
                </div>
                <div>
                    <p>Hãng: </p>
                    <input type="text" id="prd-brand" placeholder="Hãng" value="${product[i].brand}" readOnly>
                </div>
                <div>
                    <p>Xuất xứ: </p>
                    <input type="text" id="prd-origin" placeholder="Xuất xứ" value="${product[i].origin}" required>
                </div>
                <div>
                    <p>Giá: </p>
                    <input type="text" id="prd-price" placeholder="Giá" value="${product[i].price}" required>
                </div>
                <div>
                    <p>Ảnh: </p>
                    <input type="file" id="prd-img" value="${product[i].img}" required>
                </div>  
            </div>  
            <div class="product-fix-form-button">
                <div class="delete-product" id="delete-product-btn">
                    <button type="button" id="delete-product-btn">Xóa sản phẩm</button>
                </div>
                <div class="update-product">
                    <button type="submit" id="update-product-btn">Cập nhật</button>
                </div>
            </div>                 
        </form>
        `
        updateProduct(productid)
        deleteProduct(productid)
        }
    }
    
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
                    <div class="col p-2-4 t-3 m-6" onclick="showProductFix('${tmpArr[i].id}')" id="${tmpArr[i].id}">
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
                        <div class="col p-2-4 t-3 m-6" onclick="showProductFix('${tmpArr[i].id}')" id="${tmpArr[i].id}">
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

/* -------- THEM SUA XOA SAN PHAM --------- */
function updateProduct (productid) {
    document.getElementById('update-product-btn').addEventListener("click",function () {
        let id = document.getElementById("prd-id").value
        let name = document.getElementById("prd-name").value
        let screen = document.getElementById("prd-screen").value
        let camera = document.getElementById("prd-camera").value
        let storage = document.getElementById("prd-storage").value
        let chip = document.getElementById("prd-chip").value
        let brand = document.getElementById("prd-brand").value
        let origin = document.getElementById("prd-origin").value
        let price = document.getElementById("prd-price").value
        let img = document.getElementById("prd-img").value
        let s = img.split("\\")
        
        let product = JSON.parse(localStorage.getItem('product'))
        for(let i=0 ; i< product.length ; i++) {
            if(product[i].id === productid) {
                product[i].id = id
                product[i].name = name
                product[i].info.screen = screen
                product[i].info.camera = camera 
                product[i].info.storage = storage
                product[i].info.chip = chip 
                product[i].brand = brand
                product[i].origin = origin
                product[i].price = price
                product[i].img = "../image/" + s[2]
            }
        }
        localStorage.setItem('product',JSON.stringify(product))
        alert("CẬP NHẬT SẢN PHẨM THÀNH CÔNG !")
    })
}

function deleteProduct(productid) {
    document.getElementById("delete-product-btn").addEventListener("click",function() {
        document.getElementById('alertbox').style.display = 'block'
        document.getElementById('alertbox-btn').addEventListener("click",function() {
            let flag = false
            let product = JSON.parse(localStorage.getItem('product'))
            for(let i = 0 ; i < product.length ; i++) {
                if(product[i].id === productid) {
                    product.splice(i,1);
                    flag = true
                }
            }
            localStorage.setItem('product',JSON.stringify(product))
            if(flag == true) {
                document.getElementById('product-fix').style.display='none'
                document.getElementById('alertbox').style.display = 'none'
                alert("XÓA SẢN PHẨM THÀNH CÔNG !")
            }
        })
    })
}

function checkinfoaddproduct(tmpPrd) {
    let flag = false 
    if(tmpPrd.brand[0] != tmpPrd.id[0]) {
        document.getElementById("branderror").style.display = 'block'
        document.getElementById("branderror").innerHTML = 'ID sản phẩm này không thuộc hãng vừa nhập'
        document.getElementById("addprd-brand").style.border = '2px solid red'
        document.getElementById("addprd-brand").focus()
        return false
    }
    else {
        document.getElementById("branderror").style.display = 'none'
        document.getElementById("addprd-brand").style.border = 'unset'
    }
    let product = JSON.parse(localStorage.getItem('product'))
    for(let i = 0 ; i < product.length ; i++ ) {
        if(tmpPrd.id == product[i].id) {
            document.getElementById("iderror").style.display = 'block'
            document.getElementById("iderror").innerHTML = 'ID đã tồn tại'
            document.getElementById("addprd-id").style.border = '2px solid red'
            document.getElementById("addprd-id").focus()
            return false
        }
       
        flag = true
    }
    document.getElementById("iderror").style.display = 'none'
    document.getElementById("addprd-id").style.border = 'unset'
    return flag
}
addProduct()
function setId_addProduct() {
    let product = JSON.parse(localStorage.getItem('product'))
    let brand = document.getElementById("addprd-brand").value
    let arrId = []
    let id_num
    for(let i = 0 ; i < product.length ; i++) {
        if(product[i].brand == brand) {
            id_num = parseInt((product[i].id).slice(1))
            arrId.push(id_num)
        }
    }
    let tmp = Math.max(...arrId) + 1
    document.getElementById("addprd-id").value = brand[0] + tmp
}
function addProduct() {
    let product = JSON.parse(localStorage.getItem('product')) 
    setId_addProduct()
    document.getElementById("add-product-btn").addEventListener("click", function () {
        let id = document.getElementById("addprd-id").value
        let name = document.getElementById("addprd-name").value
        let screen = document.getElementById("addprd-screen").value
        let camera = document.getElementById("addprd-camera").value
        let storage = document.getElementById("addprd-storage").value
        let chip = document.getElementById("addprd-chip").value
        let brand = document.getElementById("addprd-brand").value
        let origin = document.getElementById("addprd-origin").value
        let price = document.getElementById("addprd-price").value
        let s= document.getElementById("addprd-img").value
        let s1 = s.split("\\")
        let img = "../image/" + s1[2]


        let tmpPrd = {name,price,origin,img,brand,id,
                     info : {screen,camera,storage,chip}}
        if(checkinfoaddproduct(tmpPrd)) {
            product.push(tmpPrd)
            localStorage.setItem('product',JSON.stringify(product))
            document.getElementById("addProduct-form").style.display = 'none'
            alert("THÊM SẢN PHẨM THÀNH CÔNG !")
        }
        else {
            alert("THÊM SẢN PHẨM THẤT BẠI !")
        }
    })
}

/* DANH SÁCH ĐƠN HÀNG */
showBillList()
function showBillList() {
    document.getElementById("date-from").value = ""
    document.getElementById("date-to").value = ""
    let bill = JSON.parse(localStorage.getItem('bill'))
    let s = ""
    for(let i = 0 ; i < bill.length ; i++) {
        s+= `
            <tr onclick="showBillDetail(${bill[i].id})">
                <td style="width: 25%;">${bill[i].id}</td>
                <td style="width: 25%;">${bill[i].customer.fullname}</td>
                <td style="width: 25%;">${bill[i].date}</td>
                <td style="width: 25%;">${bill[i].status}</td>
            </tr>
        `
    }
    document.getElementById('bill-list-perform').innerHTML = s
}
function showBillList1(billArr) {
    let s = ""
    for(let i = 0 ; i < billArr.length ; i++) {
        s+= `
            <tr onclick="showBillDetail(${billArr[i].id})">
                <td style="width: 25%;">${billArr[i].id}</td>
                <td style="width: 25%;">${billArr[i].customer.fullname}</td>
                <td style="width: 25%;">${billArr[i].date}</td>
                <td style="width: 25%;">${billArr[i].status}</td>
            </tr>
        `
    }
    document.getElementById('bill-list-perform').innerHTML = s
}
function showtableinbill(billid) {
    let bill = JSON.parse(localStorage.getItem('bill'))
    let s= ''
    for(let i = 0 ; i < bill.length ; i++) {
        if(bill[i].id == billid)
        for(let j = 0 ; j < bill[i].info.length ; j++)
            s+=`
                <tr>
                    <td style="width: 12.5%;">${bill[i].info[j].id}</td>
                    <td style="width: 25%;">${bill[i].info[j].name}</td>
                    <td style="width: 12.5%;">${bill[i].info[j].quantity}</td>
                    <td style="width: 25%;">${currency(bill[i].info[j].price) }</td>
                    <td style="width: 25%;">${currency(bill[i].info[j].quantity * bill[i].info[j].price) }</td>
                </tr>  `
    }
    return s 
}
function showBillDetail(billid) {
    document.getElementById('bill-list-detail').style.display='block'
    let bill = JSON.parse(localStorage.getItem('bill'))
    for(let i = 0 ; i < bill.length ; i++) {
        if(bill[i].id == billid) {
            document.getElementById('bill-list-detail').innerHTML =
                `<form>
                <div class="bill-list-detail-header">
                    <span onclick="document.getElementById('bill-list-detail').style.display='none'" class="close" id="close" >&times;</span>
                    <h2>Thông tin đơn hàng</h2>
                </div>
                <div class="bill-list-detail-content">
                    <div class="bill-list-detail-content-1">
                        <div>
                            <span>Mã đơn hàng:</span>  ${bill[i].id}
                        </div>
                        <div>
                            <span>Tên khách hàng:</span>  ${bill[i].customer.fullname}
                        </div>
                        <div>
                            <span>Số điện thoại:</span> ${bill[i].customer.phone}
                        </div>
                        <div>
                            <span>Ngày xuất đơn:</span>  ${bill[i].date}
                        </div>
                    </div>
                    
                    <div class="bill-list-detail-content-2">
                        <table>
                            <tr>
                                <th style="width: 12.5%;">Mã sản phẩm</th>
                                <th style="width: 25%;">Tên sản phẩm</th>
                                <th style="width: 12.5%;">Số lượng</th>
                                <th style="width: 25%;">Đơn giá</th>
                                <th style="width: 25%;">Thành tiền</th>
                            </tr>
                            ${showtableinbill(billid)}
                        </table>
                    </div>
                    <div class="bill-list-detail-content-3">
                        <div>
                            <span>Tổng cộng:</span> ${currency(bill[i].totalprice) }
                        </div> 
                        <div>
                             <label class="switch">
                                <input type="checkbox" id="switch-el"  onchange="setBillStatus(${billid})">
                                <span class="slider round"></span>
                            </label>
                            &nbsp;&nbsp;&nbsp;
                            <p id="status">${bill[i].status}</p>  
                            <span>Tình trạng:</span>
                        </div>
                    </div>
                </div>
            </form>`
            let switchEl = document.getElementById('switch-el')
            if(bill[i].status == "Chưa xử lý") {
                switchEl.checked = false
                document.getElementById("status").style.color = "red"
            }
            else {
                switchEl.checked = true
                document.getElementById("status").style.color = "green"
            }
            break
        }
    }
}
function setBillStatus(billid) {
    let switchEl = document.getElementById('switch-el')
    let bill = JSON.parse(localStorage.getItem('bill'))
    if(switchEl.checked == true) {
        for(let i = 0 ; i < bill.length ; i++) {
            if(bill[i].id == billid) 
            {
                bill[i].status = "Đã xử lý"
                document.getElementById("status").innerHTML = "Đã xử lý"
                document.getElementById("status").style.color = "green"
            }
        }
    }
    else {
        for(let i = 0 ; i < bill.length ; i++) {
            if(bill[i].id == billid) 
            {
                bill[i].status = "Chưa xử lý"
                document.getElementById("status").innerHTML = "Chưa xử lý"
                document.getElementById("status").style.color = "red"
            }
        }
    }
    localStorage.setItem('bill',JSON.stringify(bill))
    //showBillList()
    billFilter()
}
function parseYMD(string) {
    let date = new Date()
    let arr = string.split("-")
    return arr[2] + "-" + arr[1] + "-" + arr[0] 
}
function dateFilter(date) {
    let d1 = document.getElementById("date-from").value
    let d2 = document.getElementById("date-to").value
    return date>= d1 && date<=d2
}
function billFilter() {
    let bill = JSON.parse(localStorage.getItem('bill'))
    let dates = []
    let billArr = []
    let d1 = document.getElementById("date-from")
    let d2 = document.getElementById("date-to")
    if(d1.value > d2.value && d2.value != "") {
        alert("SAI THỨ TỰ NGÀY !") 
        d2.focus()
    }
    else { 
        for(let i = 0 ; i < bill.length ; i++) {
            dates.push(parseYMD(bill[i].date)) 
        }
        let filtereddate = dates.filter(dateFilter)
        console.log(filtereddate)
        for(let i = 0 ; i < bill.length ; i++) {
            for(let j = 0 ; j < filtereddate.length ; j++ ) {
                if(parseYMD(bill[i].date) == filtereddate[j]) {
                    billArr.push(bill[i])
                    break
                }
            }
        }
        console.log(billArr)
        showBillList1(billArr)
    }
    
}
/*-----   DANG XUAT  ----- */
function logout(){
	localStorage.removeItem('userlogin');
    window.location.href="Black_Phone.html";
}






 
