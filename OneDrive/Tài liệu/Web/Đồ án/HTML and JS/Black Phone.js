createProduct()

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
    {   name : "Xiaomi 12T", price : "17000000", origin : "China", img : "../image/xiaomi12T.webp", brand : "xiaomi",id : "x01",
        info : { screen : "6.6 inch",camera : "50.0 MP + 12.0 MP + 10.0 MP",storage : "128GB",chip : "Snapdragon 8 Gen 1" }
    },
    {
        name : "Samsung A32",price : "5500000",origin : "Korea",img : "../image/samsung_a32.webp",brand : "samsung",id : "s08",
        info : { screen : "6.4 inch",camera : "64 MP + 8 MP + 5 MP + 5 MP",storage : "128GB",chip : "MediaTek Helio G80" }
    },
    {   name : "Xiaomi 12",price : "17000000",origin : "China",img : "../image/xiaomi12.webp",brand : "xiaomi",id : "x02",
        info : { screen : "6.6 inch",camera : "50.0 MP + 12.0 MP + 10.0 MP",storage : "128GB",chip : "Snapdragon 8 Gen 1"}
    },
    {
        name : "Samsung S22",price : "20000000",origin : "Korea",img : "../image/samsung_s22.webp",brand : "samsung",id : "s01",
        info : {screen : "6.6 inch",camera : "50.0 MP + 12.0 MP + 10.0 MP",storage : "128GB",chip : "Snapdragon 8 Gen 1"}
    },
    {
        name : "Samsung A53",price : "11000000",origin : "Korea",img : "../image/samsung_a53.webp",brand : "samsung",id : "s02",
        info : {screen : "6.5 inch",camera : "64.0 MP + 12.0 MP + 5.0 MP + 5.0 MP",storage : "256GB",chip : "Exynos 1280"},
    },
    {
        name : "iPhone 14 Pro Max",price : "35000000",origin : "Mỹ",img : "../image/iphone14promax.webp",brand : "iphone",
        id : "i01",info : { screen : "6.7 inch",camera : "48.0 MP + 12.0 MP",storage : "128GB",chip : "Apple A16 Bionic"}
    },
    {   name : "Samsung A22", price : "4900000",origin : "Korea",img : "../image/samsung_a22.webp",brand : "samsung",id : "s09",
        info : { screen : "6.4 inch",camera : "48 MP + 8 MP + 2 MP + 2 MP",storage : "128GB",chip : "MediaTek MT6769V" }
    },
    {   name : "iPhone 14 Pro", price : "30000000",origin : "Mỹ",img : "../image/iphone14pro.webp",brand : "iphone",id : "i02",
        info : { screen : "6.1 inch",camera : "48.0 MP + 12.0 MP",storage : "128GB",chip : "Apple A16 Bionic"}
    },
    {   name : "iPhone 14 Plus",price : "27000000",origin : "Mỹ",img : "../image/iphone14plus.webp",brand : "iphone",id : "i03",
        info : {screen : "6.7 inch",camera : "12.0 MP + 12.0 MP",storage : "128GB",chip : "Apple A15 Bionic"}
    },
    {   name : "Samsung A33",price : "6900000",origin : "Korea",img : "../image/samsung_a33.webp",brand : "samsung",id : "s06",
        info : {screen : "6.4 inch",camera : "48 MP + 8 MP + 5 MP + 2 MP",storage : "128GB",chip : "Exynos 1280"}
    },
    {   name : "Xiaomi 11",price : "6400000",origin : "China",img : "../image/xiaomi11.webp",brand : "xiaomi",id : "x03",
        info : {screen : "6.4 inch",camera : "50.0 MP + 8.0 MP + 2.0 MP + 2.0 MP",storage : "64GB",chip : "Snapdragon 680"}, 
    },
    {   name : "iPhone 14",price : "24000000",origin : "Mỹ",img : "../image/iphone14.webp",brand : "iphone",id : "i04",
        info : {screen : "6.1 inch",camera : "12.0 MP + 12.0 MP",storage : "128GB",chip : "Apple A15 Bionic"}
    },
    {   name : "iPhone 13 Pro Max",price : "28000000",origin : "Mỹ",img : "../image/iphone13promax.png",brand : "iphone",id : "i05",
        info : {screen : "6.7 inch",camera : "12.0 MP + 12.0 MP + 12.0 MP",storage : "128GB",chip : "Apple A15 Bionic"}
    },
    {   name : "Vivo Y01",price : "2800000",origin : "Taiwan",img : "../image/vivoy01.webp",brand : "vivo",id : "v12",
        info : {screen : "6.5 inch",camera : "8 MP",storage : "32GB",chip : "MediaTek Helio G80"}
    },
    {   name : "Xiaomi 11T",price : "10000000",origin : "China",img : "../image/xiaomi11T.webp",brand : "xiaomi",id : "x04",
        info : {screen : "6.6 inch",camera : "108 MP + 8 MP + 5 MP",storage : "128GB",chip : "MediaTek Dimensity 1200"}, 
    },
    {   name : "iPhone 13 mini",price : "17000000",origin : "Mỹ",img : "../image/iphone13mini.png",brand : "iphone",id : "i06",
        info : {screen : "5.4 inch",camera : "12.0 MP + 12.0 MP",storage : "128GB",chip : "Apple A15 Bionic"}
    },
    {   name : "Samsung S22 Ultra",price : "26000000",origin : "Korea",img : "../image/samsung_s22ultra.webp",brand : "samsung", id : "s04",
        info : {screen : "6.5 inch",camera : "108 MP + 12.0 MP + 10.0 MP +10.0 MP",storage : "128GB",chip : "Snapdragon 8 Gen 1"}
    },
    {   name : "Vivo Y02",price : "3300000",origin : "Taiwan",img : "../image/vivoy02.webp",brand : "vivo",id : "v11",
        info : {screen : "6.5 inch",camera : "8 MP",storage : "32GB",chip : "MediaTek Helio G80"}
    },
    {   name : "iPhone 13",price : "19500000",origin : "Mỹ",img : "../image/iphone13.png",brand : "iphone",id : "i07",
        info : {screen : "6.1 inch",camera : "12.0 MP + 12.0 MP",storage : "128GB",chip : "Apple A15 Bionic"}
    },
    {   name : "iPhone 12 mini",price : "15000000",origin : "Mỹ",img : "../image/iphone12.jpg",brand : "iphone",id : "i10",
        info : {screen : "5.4 inch",camera : "12.0 MP + 12.0 MP",storage : "256GB",chip : "Apple A14 Bionic"}
    },
    {   name : "Xiaomi POCO",price : "3000000",origin : "China",img : "../image/xiaomipoco.webp",brand : "xiaomi",id : "x08",
        info : {screen : "6.7 inch",camera : "13 MP + 2 MP", storage : "64GB",chip : "JLQ JR510"}
    },
    {   name : "iPhone 13 Pro",price : "25000000",origin : "Mỹ",img : "../image/iphone13promax.png",brand : "iphone",id : "i08",
        info : {screen : "6.1 inch",camera : "12.0 MP + 12.0 MP + 12.0 MP",storage : "128GB",chip : "Apple A15 Bionic"}
    },
    {   name : "Vivo Y21",price : "6000000",origin : "Taiwan",img : "../image/vivoy21.webp",brand : "vivo",id : "v10",
        info : {screen : "6.5 inch",camera : "50 MP + 2 MP",storage : "128GB",chip : "MediaTek Helio G80"}
    },
    {   name : "Xiaomi 10",price : "7000000",origin : "China",img : "../image/xiaomi10.webp",brand : "xiaomi",id : "x05",
        info : {screen : "6.6 inch",camera : "108 MP + 8 MP + 5 MP + 2 MP",storage : "128GB",chip : "Snapdragon 732G"}, 
    },
    {   name : "Vivo Y22",price : "6000000",origin : "Taiwan",img : "../image/vivoy22.webp",brand : "vivo",id : "v09",
        info : {screen : "6.5 inch",camera : "50 MP + 2 MP",storage : "128GB",chip : "Snapdragon 680"}
    },
    {   name : "iPhone 12",price : "16500000",origin : "Mỹ",img : "../image/iphone12.jpg",brand : "iphone",id : "i09",
        info : {screen : "6.1 inch",camera : "12.0 MP + 12.0 MP",storage : "64GB",chip : "Apple A14 Bionic"}
    },
    {   name : "Samsung A03",price : "2600000",origin : "Korea",img : "../image/samsung_a03.webp",brand : "samsung",id : "s11",
        info : {screen : "6.5 inch",camera : "48 MP + 2 MP",storage : "32GB",chip : "Unisoc T606"}
    },
    {   name : "Vivo T1",price : "6200000",origin : "Taiwan",img : "../image/vivot1.webp",brand : "vivo",id : "v08",
        info : {screen : "6.5 inch",camera : "50 MP + 2 MP",storage : "128GB",chip : "Snapdragon 680"}
    },
    {   name : "Xiaomi 10s",price : "3900000",origin : "China",img : "../image/xiaomi10s.webp",brand : "xiaomi",id : "x06",
        info : {screen : "6.5 inch",camera : "50 MP + 8 MP + 5 MP + 2 MP",storage : "128GB",chip : "MediaTek Helio G88"}, 
    },
    {   name : "Vivo Y53",price : "7000000",origin : "Taiwan",img : "../image/vivoy53.webp",brand : "vivo",id : "v07",
        info : {screen : "6.5 inch",camera : "64 MP + 2 MP + 2 MP",storage : "128GB",chip : "MediaTek Helio G80"}
    },
    {   name : "Xiaomi 11s",price : "8500000",origin : "China",img : "../image/xiaomi11s.webp",brand : "xiaomi",id : "x12",
        info : {screen : "6.5 inch",camera : "64 MP + 8 MP +5 MP",storage : "128GB",chip : "Snapdragon 778G"}, 
    },
    {   name : "Samsung M53",price : "12500000",origin : "Korea",img : "../image/samsung_m53.webp",brand : "samsung",id : "s05",
        info : {screen : "6.7 inch",camera : "108 MP + 8 MP + 2 MP +2 MP",storage : "256GB",chip : "MediaTek Dimensity 900 5G"}
    },
    {   name : "iPhone 11",price : "11800000",origin : "Mỹ",img : "../image/iphone11.png",brand : "iphone",id : "i11",
        info : {screen : "6.1 inch",camera : "12.0 MP + 12.0 MP", storage : "64GB",chip : "Apple A13 Bionic"}
    },
    {   name : "Vivo Y55",price : "7000000",origin : "Taiwan",img : "../image/vivoy55.webp",brand : "vivo",id : "v06",
        info : {screen : "6.4 inch",camera : "50 MP + 2 MP + 2 MP",storage : "128GB",chip : "Snapdragon 680"}
    },
    {   name : "Xiaomi 9C",price : "3200000",origin : "China",img : "../image/xiaomi9c.webp",brand : "xiaomi",id : "x07",
        info : {screen : "6.5 inch",camera : "13 MP + 2 MP + 2 MP",storage : "128GB",chip : "MediaTek Helio G88"} 
    },
    {   name : "Samsung A04",price : "4000000",origin : "Korea",img : "../image/samsung_a04.webp",brand : "samsung",id : "s10",
        info : {screen : "6.5 inch",camera : "50 MP + 2 MP + 2 MP", storage : "64GB",chip : "Exynos 850"}
    },
    {   name : "Vivo V23",price : "12000000",origin : "Taiwan",img : "../image/vivov23.webp",brand : "vivo",id : "v05",
        info : {screen : "6.4 inch",camera : "64 MP + 8 MP + 2 MP",storage : "128GB",chip : "MediaTek Dimensity 920 "}
    },
    {   name : "Xiaomi 12s",price : "16000000",origin : "China",img : "../image/xiaomi12s.webp",brand : "xiaomi",id : "x11",
        info : {screen : "6.5 inch",camera : "50 MP + 13 MP +5 MP",storage : "256GB",chip : "Snapdragon 8 Gen 1"}
    },
    {   name : "iPhone SE",price : "11500000",origin : "Mỹ",img : "../image/iphonese.jpeg",brand : "iphone",id : "i12",
        info : {screen : "4.7 inch",camera : "12.0 MP", storage : "64GB",chip : "Apple A15 Bionic"}
    },
    {   name : "Vivo Y15",price : "3200000",origin : "Taiwan",img : "../image/vivoy15.webp",brand : "vivo",id : "v03",
        info : {screen : "6.6 inch",camera : "13 MP + 2 MP", storage : "32GB",chip : "Snapdragon 8 Gen 1"}
    },
    {   name : "Samsung A13",price : "4800000",origin : "Korea",img : "../image/samsung_a13.webp",brand : "samsung",id : "s12",
        info : {screen : "6.6 inch",camera : "50 MP + 5 MP + 2 MP + 2 MP",storage : "128GB",chip : "Exynos 850"}
    },
    {   name : "Vivo X80",price : "20000000",origin : "Taiwan",img : "../image/vivox80.webp",brand : "vivo",id : "v04",
        info : {screen : "6.7 inch",camera : "50 MP + 12 MP + 12 MP",storage : "256GB",chip : "MediaTek Dimensity 9000"}
    },
    {   name : "Xiaomi 9A",price : "2300000",origin : "China",img : "../image/xiaomi9a.webp",brand : "xiaomi",id : "x09",
        info : {screen : "6.5 inch",camera : "13 MP", storage : "32GB",chip : "MediaTek Helio G25"}
    },
    {   name : "Vivo V25",price : "10500000",origin : "Taiwan",img : "../image/vivo.webp",brand : "vivo",id : "v01",
        info : {screen : "6.6 inch",camera : "50.0 MP + 12.0 MP + 10.0 MP",storage : "128GB",chip : "Snapdragon 8 Gen 1"}
    },
    {   name : "Samsung A23",price : "7000000",origin : "Korea",img : "../image/samsung_a23.webp",brand : "samsung",id : "s07",
        info : {screen : "6.4 inch",camera : "50 MP + 5 MP + 2 MP + 2 MP",storage : "128GB",chip : "Snapdragon 695 5G"}
    },
    {   name : "Vivo V25e",price : "10500000",origin : "Taiwan",img : "../image/vivov25e.webp",brand : "vivo",id : "v02",
        info : {screen : "6.6 inch",camera : "50.0 MP + 12.0 MP + 10.0 MP",storage : "128GB",chip : "Snapdragon 8 Gen 1"}
    },
    {   name : "Xiaomi A1",price : "2100000",origin : "China",img : "../image/xiaomia1.webp",brand : "xiaomi",id : "x10",
        info : {screen : "6.5 inch",camera : "8 MP", storage : "32GB",chip : "MediaTek MT6761 "}
    },
    {   name : "Samsung A73",price : "12000000",origin : "Korea",img : "../image/samsung_a73.webp",brand : "samsung",id : "s03",
        info : {screen : "6.7 inch",camera : "108.0 MP + 12.0 MP + 5.0 MP + 5.0 MP",storage : "128GB",chip : "Snapdragon 778G"}
    }
        ]
        localStorage.setItem('product',JSON.stringify(product))
    }
}

let cartArr = []
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


/* showProduct_classified()
function showProduct_classified() {
    const Ipcategory = document.getElementById("Ip-category")
    const Sscategory = document.getElementById("Samsung-category")
    const Xmcategory = document.getElementById("Xiaomi-category")
    const Vvcategory = document.getElementById("Vivo-category")
    const ProductPerform = document.getElementById("product-perform") 
    Ipcategory.addEventListener("click" , function() {
    let listItems=""
    for(let i = 0 ; i < product.length ; i++) {
        if(product[i].brand === "iphone") {
            listItems += `
                <div class="col p-2 t-3 m-6"  onclick="showProductDetail('${product[i].id}')" id="${product[i].id}">
                    <a class="home_product_iteam" href="#" >
                        <img src="${product[i].img}" alt="" class="home_product_iteam_img">
                        <h4 class="home_product_iteam_name">
                            ${product[i].name}
                        </h4>
                        <div class="home_produc_iteam_price">
                            <span class="home_product_price_curent">${product[i].price}</span>
                        </div>
                        
                        <div class="home_product_iteam_origin">
                            <span class="home_product_iteam_origin_name">${product[i].origin}</span>
                        </div>
                    </a>
                </div>
                    `
                }
    }   
    ProductPerform.innerHTML = listItems
})
    Sscategory.addEventListener("click" , function() {
    let listItems = ""
    for(let i = 0 ; i < product.length ; i++) {
        if(product[i].brand === "samsung") {
            listItems+= `
            <div class="col p-2 t-3 m-6" onclick="showProductDetail('${product[i].id}')" id="${product[i].id}">
                <a class="home_product_iteam" href="#" >
                    <img src="${product[i].img}" alt="" class="home_product_iteam_img">
                    <h4 class="home_product_iteam_name" id="product-name">
                        ${product[i].name}
                    </h4>
                    <div class="home_produc_iteam_price">
                        <span class="home_product_price_curent">${product[i].price}</span>
                    </div>

                    <div class="home_product_iteam_origin">
                        <span class="home_product_iteam_origin_name">${product[i].origin}</span>
                    </div>
                </a>
            </div>
        `
        }
    }    
    ProductPerform.innerHTML = listItems
})

    Xmcategory.addEventListener("click" , function () {
    let listItems = ""
    for(let i = 0 ; i < product.length ; i++) {
        if(product[i].brand === "xiaomi") {
            listItems+= `
            <div class="col p-2 t-3 m-6" onclick="showProductDetail('${product[i].id}')" id="${product[i].id}">
                <a class="home_product_iteam" href="#" >
                    <img src="${product[i].img}" alt="" class="home_product_iteam_img">
                    <h4 class="home_product_iteam_name" id="product-name">
                        ${product[i].name}
                    </h4>
                    <div class="home_produc_iteam_price">
                        <span class="home_product_price_curent">${product[i].price}</span>
                    </div>

                    <div class="home_product_iteam_origin">
                        <span class="home_product_iteam_origin_name">${product[i].origin}</span>
                    </div>
                </a>
            </div>
        `
        }
    }    
    ProductPerform.innerHTML = listItems
})

    Vvcategory.addEventListener("click" , function () {
    let listItems = ""
    for(let i = 0 ; i < product.length ; i++) {
        if(product[i].brand === "vivo") {
            listItems+= `
            <div class="col p-2 t-3 m-6" onclick="showProductDetail('${product[i].id}')" id="${product[i].id}">
                <a class="home_product_iteam" href="#" >
                    <img src="${product[i].img}" alt="" class="home_product_iteam_img">
                    <h4 class="home_product_iteam_name" id="product-name">
                        ${product[i].name}
                    </h4>
                    <div class="home_produc_iteam_price">
                        <span class="home_product_price_curent">${product[i].price}</span>
                    </div>

                    <div class="home_product_iteam_origin">
                        <span class="home_product_iteam_origin_name">${product[i].origin}</span>
                    </div>
                </a>
            </div>
        `
        }
    }    
    ProductPerform.innerHTML = listItems
})
} */
/* showProduct()
function showProduct(){
	var url = document.location.href;
	var temp = url.split("?");
	var s='';
	var arrProduct = JSON.parse(localStorage.getItem('product'));
	if(temp[1] == '' || temp[1] == undefined || temp[1].search('all') == 0){
		if(temp[1]=='' || temp[1]==undefined){
			temp = 'all&0';
		}
		else{
			temp = temp[1];
		}
		var temp2 = temp.split("&");
		var vitri = parseInt(temp2[1]);
        console.log(vitri);
		var sotrang=0,dem=0;
		for(var i=vitri;i<arrProduct.length;i++){
			s+=`<div class="col p-2-4 t-6 m-12">
            <a class="home_product_iteam" href="#" onclick="showProductDetail(${arrProduct[i].id})">
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
        </div> `
			dem++;
			if(dem==10)
				break;
		}
		sotrang=Math.ceil(arrProduct.length/10);
		var lienket='';
		for(var i = 1;i<=sotrang;i++){
			vitri=(i-1)*10;
			var a ='<a class="pagination_iteam_link" href="Black phone.html?all&'+vitri+'">'+i+'</a>';
			lienket+='<li class="pagination_iteam pagination_iteam_active">' + a + '</li>';
		}
		document.getElementById('pagination').innerHTML=lienket;
	}
	else{
		temp = temp[1];
        console.log(temp);
		var temp2 = temp.split("&");
		var brand = temp2[0];
		var vitri = temp2[1];
		var sotrang=0,dem=0;
		var arrtempt=[];
		for(var i=0; i<arrProduct.length;i++){
			if(brand==arrProduct[i].brand.toLowerCase())
				arrtempt.push(arrProduct[i]);
		}
		for(var i=vitri;i<arrtempt.length;i++){
			s+=`<div class="col p-2-4 t-6 m-12">
            <a class="home_product_iteam" href="#" onclick = "showProductDetail(${arrtempt[i].id})">
                <img src="${arrtempt[i].img}" alt="" class="home_product_iteam_img">
                <h4 class="home_product_iteam_name">
                    ${arrtempt[i].name}
                </h4>
                <div class="home_product_iteam_price">
                    <span class="home_product_price_curent">${currency(arrtempt[i].price)}</span>
                </div>
                                    
                <div class="home_product_iteam_origin">
                    <span class="home_product_iteam_origin_name">${arrtempt[i].origin}</span>
                </div>
    
            </a>
        </div> `;
			dem++;
			if(dem==10)
				break;
		}
		sotrang=Math.ceil(arrtempt.length/10);
		var lienket='';
		for(var i = 1;i<=sotrang;i++){
			vitri=(i-1)*10;
var a ='<a class="pagination_iteam_link" href="Black phone.html?'+brand+'&'+vitri+'">'+i+'</a>';
			lienket+='<li class="pagination_iteam  pagination_iteam_active">' + a + '</li>';
		}
		document.getElementById('pagination').innerHTML=lienket;
	}
	document.getElementById('product-perform').innerHTML=s;
} */
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
    if(cartArr == null) return false
    for(let i=0;i<cartArr.length;i++) {
        if(cartArr[i].id == productid) {
            return true         
        }
    }
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
        Add()
        closeProductDetail()
    })  
}
function Add(){
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
    document.getElementById('cart-total').innerHTML = `TỔNG TIỀN:&nbsp <span> ${currency(total)} </span>`
    if(cartArr.length == 0) {
        document.getElementById('showCart').innerHTML = `<p>GIỎ HÀNG ĐANG RỖNG</p>`
    }
}  
function updateCart(value,productid) {
    for (var i = 0; i < cartArr.length; i++) {
        if(cartArr[i].id === productid){
            cartArr[i].quantity = value;
        }
    } 
    Add()
}
function closeProductDetail() {
    document.getElementById("product-detail").style.display="none"
}
function deleteCartProduct(productid) {
    for(let i = 0 ; i < cartArr.length ; i++) {
        if(cartArr[i].id === productid) {
            cartArr.splice(i,1);
        }
    }
    Add()
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
            for(let i=0;i<4;i++) {
            s += `
                    <div class="col p-3 t-3 m-6" onclick="showProductDetail('${tmpArr[i].id}')" id="${tmpArr[i].id}">
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
        let tmpArr1 = []
		for(var i = 0; i < arrProduct.length; i++){
			if (parseInt(arrProduct[i].price) >= parseInt(priceform) && parseInt(arrProduct[i].price) <= parseInt(priceto)) {
				/* s+=`
                <div class="col p-3 t-6 m-12 product-animation" onclick="showProductDetail('${arrProduct[i].id}')" id="${arrProduct[i].id}">
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
                tmpArr1.push(arrProduct[i])
			}
		}
        getFirstPageItems(tmpArr1)
        showProduct(tmpArr1)
    }
	else {
        let tmpArr2 = []
		for(var i = 0; i < arrProduct.length; i++){
            if (brandsearch === arrProduct[i].brand.toLowerCase() && parseInt(arrProduct[i].price)>=parseInt(priceform) && parseInt(arrProduct[i].price) <= parseInt(priceto)) {
			    tmpArr2.push(arrProduct[i])
                /* s+=`
                <div class="col p-3 t-6 m-12" onclick="showProductDetail('${arrProduct[i].id}')" id="${arrProduct[i].id}">
                    <a class="home_product_iteam" href="#" >
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
        getFirstPageItems(tmpArr2)
        showProduct(tmpArr2)
    }
    document.getElementById('product-perform').innerHTML = s;
}



/*-------- */

/* LIEN HE */
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
/* ------------- */

/* TAI KHOAN */
let account = [{name : "admin",pwd : "123"}]

document.getElementById('signin-btn').addEventListener("click",function(){
    let accName = document.getElementById("uname").value
    let accPwd = document.getElementById("psw").value
    if(accName == "admin" && accPwd == "123")
        window.location.href = "Admin.html"
})

 
