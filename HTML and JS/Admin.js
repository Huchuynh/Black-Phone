//createProduct()
// HOME PAGE //



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
    pageActive()
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
        brand_categoryActive()
    })
    Sscategory.addEventListener("click" , function() {
        tmp=product.filter(function(product){
            return product.brand == "samsung"
        })
        showProduct(tmp)
        brand_categoryActive()
    })
    Xmcategory.addEventListener("click" , function() {
        tmp=product.filter(function(product){
            return product.brand == "xiaomi"
        })
        showProduct(tmp)
        brand_categoryActive()
    })
    Vvcategory.addEventListener("click" , function() {
        tmp=product.filter(function(product){
            return product.brand == "vivo"
        })
        showProduct(tmp)
        brand_categoryActive()
    })
}

function pageActive() {
    let pages = document.querySelectorAll(".pagenumber")
    pages.forEach(page => {
        page.addEventListener('click',() => {
            pages.forEach(page => {
                page.classList.remove('page_active')
            })
            page.classList.add('page_active')
        }) 
    });
}
brand_categoryActive()
function brand_categoryActive() {
    let brands = document.querySelectorAll(".brand_category")
    brands.forEach(brand => {
        brand.addEventListener('click',() => {
            brands.forEach(brand => {
                brand.classList.remove('brand_category_active')
            })
            brand.classList.add('brand_category_active')
        }) 
    });
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
            product.push(tmpPrd)
            localStorage.setItem('product',JSON.stringify(product))
            document.getElementById("addProduct-form").style.display = 'none'
            alert("THÊM SẢN PHẨM THÀNH CÔNG !")
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
                    <td style="width: 12.33%;">${j+1}</td>
                    <td style="width: 12.33%;">${bill[i].info[j].id}</td>
                    <td style="width: 21%;">${bill[i].info[j].name}</td>
                    <td style="width: 12.33%;">${bill[i].info[j].quantity}</td>
                    <td style="width: 21%;">${currency(bill[i].info[j].price) }</td>
                    <td style="width: 21%;">${currency(bill[i].info[j].quantity * bill[i].info[j].price) }</td>
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
                                <th style="width: 12.33%;">Số thứ tự</th>
                                <th style="width: 12.33%;">Mã sản phẩm</th>
                                <th style="width: 21%;">Tên sản phẩm</th>
                                <th style="width: 12.33%;">Số lượng</th>
                                <th style="width: 21%;">Đơn giá</th>
                                <th style="width: 21%;">Thành tiền</th>
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
    let d1 = document.getElementById("date-from").value
    let d2 = document.getElementById("date-to").value
    if(d1 == "" && d2 =="")
        showBillList()
    else
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
        d1.focus()
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
// Khach hang
showCustomerList();
function showCustomerList() {
    let customerInfo = JSON.parse(localStorage.getItem('user'));
    let s = '';

    for (let i = 0; i < customerInfo.length; i++) {
        s+=
        `
            <tr>
                <th style="width: 20%">${customerInfo[i].fullname}</th>
                <th style="width: 20%">${customerInfo[i].username}</th>
                <th style="width: 20%">${customerInfo[i].password}</th>
                <th style="width: 20%">${customerInfo[i].phone}</th>
                <th style="width: 20%">${customerInfo[i].datesignup}</th>
            </tr>
        `
    }
    document.getElementById('customer-list-perform').innerHTML = s;
}
/*-----   DANG XUAT  ----- */
function logout(){
	localStorage.removeItem('userlogin');
    window.location.href="Black_Phone.html";
}






 
