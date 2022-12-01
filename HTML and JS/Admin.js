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
                s+= `
                <div class="productlist-content-prd"  id="${item.id}">
                    <div class="productlist-content-prd-id">
                        <span>${item.id}</span>
                    </div>
                    <div class="productlist-content-prd-img">
                        <div>
                            <img src="${item.img}">
                        </div>
                    </div>
                    <div class="productlist-content-prd-name">
                        <span>${item.name}</span>
                    </div>
                    <div class="productlist-content-prd-brand">
                        <span>${item.brand}</span>
                    </div>
                    <div class="productlist-content-prd-price">
                        ${currency(item.price)}
                    </div>
                    <div class="productlist-content-prd-btn">
                        <div>
                            <button type="button" onclick="showProductFix('${item.id}')">
                                <i class="fa-sharp fa-solid fa-gear"></i>
                            </button>
                        </div>
                        <div>
                            <button type="button" onclick="deleteProduct('${item.id}')">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>
                        
                    </div>
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
            lienket+='<div class="pageNumber">'+i+'</div>';
        }
        document.getElementById("page").innerHTML=lienket;
    }
    renderProduct1()
    displayPanigation1()
    changePage1()
    pageActive()
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
                    <input type="number" id="prd-price" placeholder="Giá" value="${product[i].price}" required min=0>
                </div>
                <div>
                    <p>Ảnh: </p>
                    <input type="file" id="prd-img" value="${product[i].img}" required>
                </div>  
            </div>  
            <div class="product-fix-form-button">
                <div class="update-product">
                    <button type="submit" id="update-product-btn">Cập nhật</button>
                </div>
            </div>                 
        </form>
        `
        updateProduct(productid)
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
			}
		}   
        showProduct(tmpArr)
	}
    else
        showProduct(JSON.parse(localStorage.getItem('product')))
}
function search2(){
	var brandsearch = document.getElementById('brandsearch').value;
	var priceform = document.getElementById('priceform1').value;
	var priceto = document.getElementById('priceto1').value;
    var arrProduct = JSON.parse(localStorage.getItem('product'));
	if (brandsearch == 'all') {
        if (priceform == '' && priceto == '') {
            showProduct(arrProduct)
        }
        else {
            let tmpArr1 = []
            for(var i = 0; i < arrProduct.length; i++){
                if (parseInt(arrProduct[i].price) >= parseInt(priceform) && parseInt(arrProduct[i].price) <= parseInt(priceto)) {
                    tmpArr1.push(arrProduct[i])
                } 
            }
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
        showProduct(tmpArr2)
    }
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
        if(name == "" || screen == "" ||camera == "" ||storage == "" ||chip == "" ||origin == "" ||price == ""||img == "") {
                alert("KHÔNG ĐƯỢC ĐỂ TRỐNG DỮ LIỆU!")
        }
        else {
            if(confirm("XÁC NHẬN CẬP NHẬT SẢN PHẨM?")) {
                localStorage.setItem('product',JSON.stringify(product))
                alert("CẬP NHẬT SẢN PHẨM THÀNH CÔNG !")
                window.location.reload()
            }
            else 
                return true
        }
        
    })
}
function deleteProduct(productid) {
        let flag = false
        let product = JSON.parse(localStorage.getItem('product'))
        for(let i = 0 ; i < product.length ; i++) {
            if(product[i].id === productid) {
                product.splice(i,1);
                flag = true
            }
        }
        if(flag == true) {
            localStorage.setItem('product',JSON.stringify(product))
            document.getElementById('product-fix').style.display='none'
            if(confirm("Xác nhận xóa sản phẩm ?")) {
                alert("XÓA SẢN PHẨM THÀNH CÔNG !")
                window.location.reload()
            }
            else 
                return true
        }    
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
        if(name == "" || screen == "" ||camera == "" ||storage == "" ||chip == "" ||origin == "" ||price == ""||s == "") {
            alert("KHÔNG ĐƯỢC ĐỂ TRỐNG DỮ LIỆU!")
        }
        else {
            if(confirm("XÁC NHẬN THÊM SẢN PHẨM?")) {
                localStorage.setItem('product',JSON.stringify(product))
                document.getElementById("addProduct-form").style.display = 'none'
                alert("THÊM SẢN PHẨM THÀNH CÔNG !")
                window.location.reload()
            }
            else 
                return true
        }
    })
}

/* DANH SÁCH ĐƠN HÀNG */
showBillList()
function showBillList() {
    document.getElementById("date-from").value = ""
    document.getElementById("date-to").value = ""
    document.getElementById("bill-status").value = ""
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
    let status = document.getElementById("bill-status").value
    if(d1 == "" && d2 =="" && status == "")
        showBillList()
    else
        billFilter()
}
function parseYMD(string) {
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
    let status = document.getElementById("bill-status").value

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
        for(let i = 0 ; i < bill.length ; i++) {
            for(let j = 0 ; j < filtereddate.length ; j++ ) {
                if(parseYMD(bill[i].date) == filtereddate[j]) {
                    billArr.push(bill[i])
                    break
                }
            }
        }
        if(status=="")
            showBillList1(billArr)
        else
            billFilterStatus(billArr)
    }
}
function billFilterStatus(billarr) {
    let bill = JSON.parse(localStorage.getItem('bill'))
    let bill1 = billarr
    let d1 = document.getElementById("date-from")
    let d2 = document.getElementById("date-to")
    let status = document.getElementById("bill-status").value
    if(d1.value == "" && d2.value == ""){
        if(status == "true") {
            let status1 = []
            for(let i=0 ; i<bill.length ; i++) {
                if(bill[i].status == "Đã xử lý") {
                    status1.push(bill[i])
                }
            }
            showBillList1(status1)
        }
        else {
            let status2 = []
            for(let i=0 ; i<bill.length ; i++) {
                if(bill[i].status == "Chưa xử lý") {
                    status2.push(bill[i])
                }
            }
            showBillList1(status2)
        }
    }
    else {
        if(status == "true") {
            let status3 = []
            for(let i=0 ; i<bill1.length ; i++) {
                if(bill1[i].status == "Đã xử lý") {
                    status3.push(bill1[i])
                }
            }
            showBillList1(status3)
        }
        else {
            let status4 = []
            for(let i=0 ; i<bill1.length ; i++) {
                if(bill1[i].status == "Chưa xử lý") {
                    status4.push(bill1[i])
                }
            }
            showBillList1(status4)
        }
    }
}
// DANH SÁCH KHÁCH HÀNG
var x= true;
function showPass4() {
    if (x) {
        document.getElementById('password_acc').type = 'text';
        document.getElementById('eyeopen_acc').style.display = 'block';
        document.getElementById('eyeclose_acc').style.display = 'none';
        x = false;

    }
    else {
        document.getElementById('password_acc').type = 'password';
        document.getElementById('eyeopen_acc').style.display = 'none';
        document.getElementById('eyeclose_acc').style.display = 'block';
        x= true;

    }
}
showCustomerList();
function showCustomerList() {
    let customer = JSON.parse(localStorage.getItem('user'));
    let s = '';
    for (let i = 1 ; i < customer.length ; i++) {
        s +=`
            <tr onclick="infocustomer('${customer[i].id}')">
                <td style="width: 5%;">${customer[i].id}</td>
                <td style="width: 20%;">${customer[i].fullname}</td>
                <td style="width: 15%;">${customer[i].username}</td>
                <td style="width: 20%;">${customer[i].password}</td>
                <td style="width: 20%;">${customer[i].phone}</td>
                <td style="width: 10%;">${customer[i].datesignup}</td>
                <td style="width: 10%"><i onclick = "deleteCustomer('${customer[i].id}')" class="delete_customer fa-solid fa-trash"></i></td>
            </tr>`
        }
             
    document.getElementById('customerlistperform').innerHTML = s;
}
function deleteCustomer(userID) {
    var text = "Bạn có muốn xóa khách hàng không?";
    if (confirm(text)) {
        let userArray = JSON.parse(localStorage.getItem('user'));
        for(let i = 1 ; i < userArray.length ; i++) {
            if(userArray[i].id === userID) {
                userArray.splice(i,1);
                flag =true
            }
        }
        localStorage.setItem('user',JSON.stringify(userArray));
        showCustomerList();
    }
    else {
        return true;
    }
}
function closeFormCustomer() {
    document.getElementById('forminfocustomer').style.display = 'none';
}
function infocustomer(userID) {
    document.getElementById('forminfocustomer').style.display = 'block';
    var arrUser = JSON.parse(localStorage.getItem('user'));
    let s = "";
    for (let i = 1; i < arrUser.length; i++) {
        if (userID === arrUser[i].id) {
            s += 
            `
            <div class="modal">
                <div class="modal_overlay"></div>

                <div class="modal_body">
                        <!-- Authen form -->
                    <div class="auth_form">
                        <div class="auth_form__container">
                            <div class="auth_form_header">
                                <h3 class="auth_form__heading">Thông tin khách hàng</h3>
                            </div>

                            <div class="auth_form__form">
                                <div class="auth_form__group">                                    
                                    <input id="fullname_acc" type="text" value="${arrUser[i].fullname}" class="auth_form__input" placeholder="">
                                    <div id="fullnameerror_acc">Tên không được để trống</div>
                                </div>
                                <div class="auth_form__group">                                   
                                    <input id="numberphone_acc" type="text" value="${arrUser[i].phone}" class="auth_form__input" placeholder="">
                                    <div id="phoneerror_acc">Số điện thoại không được để trống</div>
                                </div>
                                <div class="auth_form__group">                                 
                                    <input id="username_acc" type="text" value="${arrUser[i].username}" class="auth_form__input" placeholder="">
                                    <div id="usernameerror_acc">Tên đăng nhập không được để trống</div>
                                </div>
                                <div class="auth_form__group">                                    
                                    <input id="password_acc" type="password" value="${arrUser[i].password}" class="auth_form__input" placeholder="">
                                    <a onclick="showPass4()" id="eyeclose_acc"><i class="fa-regular fa-eye-slash pass_icon"></i></a>
                                    <a onclick="showPass4()" id="eyeopen_acc"><i class="fa-regular fa-eye pass_icon"></i></a>
                                    <div id="passerror_acc">Mật khẩu không được để trống</div>
                                </div>
                            </div>

                            <div class="auth_form__controls">
                                <button type="button" class="btn btn_nomal auth_form__control_back" onclick="closeFormCustomer()">THOÁT</button>
                                <button type="button" class="btn btn__primary" onclick="updateCustomer('${arrUser[i].id}')">LƯU LẠI</button>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
            `
        }
    }
    document.getElementById('forminfocustomer').innerHTML = s;
}
function updateCustomer(userID) {
    let username = document.getElementById('username_acc');
    let password = document.getElementById('password_acc');
    let fullname = document.getElementById('fullname_acc');
    let phone = document.getElementById('numberphone_acc');
    var flag = false;

    if (fullname.value.length === 0) {
        document.getElementById('fullnameerror_acc').style.display = 'block';
        document.getElementById('fullname_acc').style.border = '1px solid red';
        fullname.focus();
        flag = true;
    }
    else 
            {
                let ten_regex = /^[AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+ [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+(?: [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]*)*/
                if (!ten_regex.test(fullname.value))
                {
                    document.getElementById('fullnameerror_acc').style.display = 'block';
                    document.getElementById('fullnameerror_acc').innerHTML= 'Tên không hợp lệ';
                    document.getElementById('fullname_acc').style.border = '1px solid red';
                    flag = true;
}
                else {
                    document.getElementById('fullname_acc').style.border = '1px solid black';
                    document.getElementById('fullnameerror_acc').style.display = 'none';
                } 
                
            }
    
    // Phần kiểm tra số điện thoại người dùng
    if (phone.value.length === 0) {
        document.getElementById('phoneerror_acc').style.display = 'block';
        document.getElementById('numberphone_acc').style.border = '1px solid red';
        phone.focus();
        flag = true;
    }
    else
            {
                let phone_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
                if (!phone_regex.test(phone.value))
                {
                    document.getElementById('phoneerror_acc').style.display = 'block';
                    document.getElementById('phoneerror_acc').innerHTML= 'Số điện thoại không hợp lệ';
                    document.getElementById('numberphone_acc').style.border = '1px solid red';
                    flag = true;
                }
                else {
                    document.getElementById('phoneerror_acc').style.display = 'none';
                    document.getElementById('numberphone_acc').style.border = '1px solid black';
                }
                
            }
    
    // Phần kiểm  tra tên đăng nhập người dùng
    if (username.value.length === 0) {
        document.getElementById('usernameerror_acc').style.display = 'block';
        document.getElementById('username_acc').style.border = '1px solid red';
        username.focus();
        flag = true;
    }
    else {
        document.getElementById('usernameerror_acc').style.display = 'none';
        document.getElementById('username_acc').style.border = '1px solid black';

    }
    
    // Phần kiểm tra mật khẩu người dùng
    if (password.value.length === 0) {
        document.getElementById('passerror_acc').style.display = 'block';
        document.getElementById('password_acc').style.border = '1px solid red';
        password.focus();
        flag = true;
    }
    else
        if (password.value.length < 8) {
            document.getElementById('passerror_acc').style.display = 'block';
            document.getElementById('passerror_acc').innerHTML = 'Mật khẩu phải đủ 8 kí tự';
            document.getElementById('password_acc').style.border = '1px solid red';
            flag = true;
        }
        else {
            document.getElementById('passerror_acc').style.display = 'none';
            document.getElementById('password_acc').style.border = '1px solid black';

        }

    if (flag == true) return true;

    let customerInfo = JSON.parse(localStorage.getItem('user'));

    for (let i = 0; i < customerInfo.length; i++) {
        if (userID == customerInfo[i].id) {
            customerInfo[i].username = username.value;
            customerInfo[i].password = password.value;
            customerInfo[i].phone = phone.value;
            customerInfo[i].fullname = fullname.value;
        }
    }
    localStorage.removeItem('user');
    localStorage.setItem('user', JSON.stringify(customerInfo));
    
    alert('Cập nhật thành công');
    showCustomerList();
    closeFormCustomer();
}
/* THỐNG KÊ */
function dateFilter_statistic(date) {
    let d1 = document.getElementById("date-from1").value
    let d2 = document.getElementById("date-to1").value
    return date>= d1 && date<=d2
}
function statisticFilter() {
    let bill = JSON.parse(localStorage.getItem('bill'))
    let dates = []
    let billArr = []
    let d1 = document.getElementById("date-from1")
    let d2 = document.getElementById("date-to1")
    if(d1.value > d2.value && d2.value != "") {
        alert("SAI THỨ TỰ NGÀY !") 
        d1.focus()
        d2.focus()
    }
    else { 
        for(let i = 0 ; i < bill.length ; i++) {
            dates.push(parseYMD(bill[i].date)) 
        }
        let filtereddate = dates.filter(dateFilter_statistic)
        for(let i = 0 ; i < bill.length ; i++) {
            for(let j = 0 ; j < filtereddate.length ; j++ ) {
                if(parseYMD(bill[i].date) == filtereddate[j]) {
                    billArr.push(bill[i])
                    break
                }
            }
        }
    }
    statisticFilter_Brand(billArr)
}
function statisticFilter_Brand(billarr) {
    let brand = document.getElementById('statistic-brand-filter') .value
    let bill = billarr
    let tmpPrd = []
    for(let i = 0 ; i < bill.length ; i++) {
        for(let j = 0 ; j < bill[i].info.length ;j++ )
        tmpPrd.push(bill[i].info[j])  
    }
    for(let i = 0; i < tmpPrd.length-1 ; i++) {
        for(let j = i+1 ; j < tmpPrd.length ; j++) {           
            if(tmpPrd[i].id === tmpPrd[j].id) {
                tmpPrd[i].quantity = parseInt(tmpPrd[i].quantity) + parseInt(tmpPrd[j].quantity)
                tmpPrd.splice(j,1) 
            }
        }
    }
    if(brand === "iphone") {
        let s1=""
        let iphone = []
        for(let i = 0 ; i < tmpPrd.length ; i++) {
            if(tmpPrd[i].id[0] === 'i') {
                iphone.push(tmpPrd[i])
            }
        }
        let totalprice = 0;
        for(let i = 0 ; i < iphone.length ; i++) {
            s1+= `
            <div class="statistic-content-prd">
                <div class="statistic-content-prd-id">
                    <span>${iphone[i].id}</span>
                </div>
                <div class="statistic-content-prd-name">
                    <div>
                        <img src="${iphone[i].img}" alt="">
                    </div>
                    <span>${iphone[i].name}</span>
                </div>
                <div class="statistic-content-prd-quantity">
                    <span>${iphone[i].quantity}</span>
                </div>
                <div class="statistic-content-price">
                    ${currency(parseInt(iphone[i].quantity)  * parseInt(iphone[i].price))}
                </div>
            </div> 
            `
            totalprice += parseInt(iphone[i].quantity)  * parseInt(iphone[i].price)
        }
        document.getElementById('statistic-perform').innerHTML = s1
        document.getElementById('statistic-totalprice').innerHTML = currency(totalprice)
    }
    else if(brand === "samsung") {
        let s2=""
        let samsung = []
        for(let i = 0 ; i < tmpPrd.length ; i++) {
            if(tmpPrd[i].id[0] === 's') {
                samsung.push(tmpPrd[i])
            }
        }
        let totalprice = 0;
        for(let i = 0 ; i < samsung.length ; i++) {
            s2+= `
            <div class="statistic-content-prd">
                <div class="statistic-content-prd-id">
                    <span>${samsung[i].id}</span>
                </div>
                <div class="statistic-content-prd-name">
                    <div>
                        <img src="${samsung[i].img}" alt="">
                    </div>
                    <span>${samsung[i].name}</span>
                </div>
                <div class="statistic-content-prd-quantity">
                    <span>${samsung[i].quantity}</span>
                </div>
                <div class="statistic-content-price">
                    ${currency(parseInt(samsung[i].quantity)  * parseInt(samsung[i].price))}
                </div>
            </div> 
            `
            totalprice += parseInt(samsung[i].quantity)  * parseInt(samsung[i].price)
        }
        document.getElementById('statistic-perform').innerHTML = s2
        document.getElementById('statistic-totalprice').innerHTML = currency(totalprice)
    }
    else if(brand === "xiaomi") {
        let s3 = ""
        let xiaomi = []
        for(let i = 0 ; i < tmpPrd.length ; i++) {
            if(tmpPrd[i].id[0] === 'x') {
                xiaomi.push(tmpPrd[i])
            }
        }
        let totalprice = 0;
        for(let i = 0 ; i < xiaomi.length ; i++) {
            s3+= `
            <div class="statistic-content-prd">
                <div class="statistic-content-prd-id">
                    <span>${xiaomi[i].id}</span>
                </div>
                <div class="statistic-content-prd-name">
                    <div>
                        <img src="${xiaomi[i].img}" alt="">
                    </div>
                    <span>${xiaomi[i].name}</span>
                </div>
                <div class="statistic-content-prd-quantity">
                    <span>${xiaomi[i].quantity}</span>
                </div>
                <div class="statistic-content-price">
                    ${currency(parseInt(xiaomi[i].quantity) * parseInt(xiaomi[i].price))}
                </div>
            </div> 
            `
            totalprice += parseInt(xiaomi[i].quantity) * parseInt(xiaomi[i].price)
        }
        document.getElementById('statistic-perform').innerHTML = s3
        document.getElementById('statistic-totalprice').innerHTML = currency(totalprice)
    }
    else if (brand === "vivo"){
        let s4=""
        let vivo = []
        for(let i = 0 ; i < tmpPrd.length ; i++) {
            if(tmpPrd[i].id[0] === 'v') {
                vivo.push(tmpPrd[i])
            }
        }
        let totalprice = 0;
        for(let i = 0 ; i < vivo.length ; i++) {
            s4+= `
            <div class="statistic-content-prd">
                <div class="statistic-content-prd-id">
                    <span>${vivo[i].id}</span>
                </div>
                <div class="statistic-content-prd-name">
                    <div>
                        <img src="${vivo[i].img}" alt="">
                    </div>
                    <span>${vivo[i].name}</span>
                </div>
                <div class="statistic-content-prd-quantity">
                    <span>${vivo[i].quantity}</span>
                </div>
                <div class="statistic-content-price">
                    ${currency(parseInt(vivo[i].quantity) * parseInt(vivo[i].price))}
                </div>
            </div> 
            `
            totalprice += parseInt(vivo[i].quantity) * parseInt(vivo[i].price)
        }
        document.getElementById('statistic-perform').innerHTML = s4
        document.getElementById('statistic-totalprice').innerHTML = currency(totalprice)
    }
    else {
        let s = ""
        let totalprice = 0;
        for(let i = 0 ; i < tmpPrd.length ; i++) {
            s+= `
            <div class="statistic-content-prd">
                <div class="statistic-content-prd-id">
                    <span>${tmpPrd[i].id}</span>
                </div>
                <div class="statistic-content-prd-name">
                    <div>
                        <img src="${tmpPrd[i].img}" alt="">
                    </div>
                    <span>${tmpPrd[i].name}</span>
                </div>
                <div class="statistic-content-prd-quantity">
                    <span>${tmpPrd[i].quantity}</span>
                </div>
                <div class="statistic-content-price">
                    ${currency(parseInt(tmpPrd[i].quantity) * parseInt(tmpPrd[i].price))}
                </div>
            </div> 
            `
            totalprice += parseInt(tmpPrd[i].quantity) * parseInt(tmpPrd[i].price)
        }
        document.getElementById('statistic-perform').innerHTML = s
        document.getElementById('statistic-totalprice').innerHTML = currency(totalprice)
    }
}
function statisticFilter_Brand1() {
    let brand = document.getElementById('statistic-brand-filter') .value
    let bill = JSON.parse(localStorage.getItem('bill'))
    let tmpPrd = []
    for(let i = 0 ; i < bill.length ; i++) {
        for(let j = 0 ; j < bill[i].info.length ;j++ )
        tmpPrd.push(bill[i].info[j])  
    }
    for(let i = 0; i < tmpPrd.length-1 ; i++) {
        for(let j = i+1 ; j < tmpPrd.length ; j++) {           
            if(tmpPrd[i].id === tmpPrd[j].id) {
                tmpPrd[i].quantity = parseInt(tmpPrd[i].quantity) + parseInt(tmpPrd[j].quantity)
                tmpPrd.splice(j,1) 
            }
        }
    }
    if(brand === "iphone") {
        let s1=""
        let iphone = []
        for(let i = 0 ; i < tmpPrd.length ; i++) {
            if(tmpPrd[i].id[0] === 'i') {
                iphone.push(tmpPrd[i])
            }
        }
        let totalprice = 0;
        for(let i = 0 ; i < iphone.length ; i++) {
            s1+= `
            <div class="statistic-content-prd">
                <div class="statistic-content-prd-id">
                    <span>${iphone[i].id}</span>
                </div>
                <div class="statistic-content-prd-name">
                    <div>
                        <img src="${iphone[i].img}" alt="">
                    </div>
                    <span>${iphone[i].name}</span>
                </div>
                <div class="statistic-content-prd-quantity">
                    <span>${iphone[i].quantity}</span>
                </div>
                <div class="statistic-content-price">
                    ${currency(parseInt(iphone[i].quantity)  * parseInt(iphone[i].price))}
                </div>
            </div> 
            `
            totalprice += parseInt(iphone[i].quantity)  * parseInt(iphone[i].price)
        }
        document.getElementById('statistic-perform').innerHTML = s1
        document.getElementById('statistic-totalprice').innerHTML = currency(totalprice)
    }
    else if(brand === "samsung") {
        let s2=""
        let samsung = []
        for(let i = 0 ; i < tmpPrd.length ; i++) {
            if(tmpPrd[i].id[0] === 's') {
                samsung.push(tmpPrd[i])
            }
        }
        let totalprice = 0;
        for(let i = 0 ; i < samsung.length ; i++) {
            s2+= `
            <div class="statistic-content-prd">
                <div class="statistic-content-prd-id">
                    <span>${samsung[i].id}</span>
                </div>
                <div class="statistic-content-prd-name">
                    <div>
                        <img src="${samsung[i].img}" alt="">
                    </div>
                    <span>${samsung[i].name}</span>
                </div>
                <div class="statistic-content-prd-quantity">
                    <span>${samsung[i].quantity}</span>
                </div>
                <div class="statistic-content-price">
                    ${currency(parseInt(samsung[i].quantity)  * parseInt(samsung[i].price))}
                </div>
            </div> 
            `
            totalprice += parseInt(samsung[i].quantity)  * parseInt(samsung[i].price)
        }
        document.getElementById('statistic-perform').innerHTML = s2
        document.getElementById('statistic-totalprice').innerHTML = currency(totalprice)
    }
    else if(brand === "xiaomi") {
        let s3 = ""
        let xiaomi = []
        for(let i = 0 ; i < tmpPrd.length ; i++) {
            if(tmpPrd[i].id[0] === 'x') {
                xiaomi.push(tmpPrd[i])
            }
        }
        let totalprice = 0;
        for(let i = 0 ; i < xiaomi.length ; i++) {
            s3+= `
            <div class="statistic-content-prd">
                <div class="statistic-content-prd-id">
                    <span>${xiaomi[i].id}</span>
                </div>
                <div class="statistic-content-prd-name">
                    <div>
                        <img src="${xiaomi[i].img}" alt="">
                    </div>
                    <span>${xiaomi[i].name}</span>
                </div>
                <div class="statistic-content-prd-quantity">
                    <span>${xiaomi[i].quantity}</span>
                </div>
                <div class="statistic-content-price">
                    ${currency(parseInt(xiaomi[i].quantity) * parseInt(xiaomi[i].price))}
                </div>
            </div> 
            `
            totalprice += parseInt(xiaomi[i].quantity) * parseInt(xiaomi[i].price)
        }
        document.getElementById('statistic-perform').innerHTML = s3
        document.getElementById('statistic-totalprice').innerHTML = currency(totalprice)
    }
    else if (brand === "vivo"){
        let s4=""
        let vivo = []
        for(let i = 0 ; i < tmpPrd.length ; i++) {
            if(tmpPrd[i].id[0] === 'v') {
                vivo.push(tmpPrd[i])
            }
        }
        let totalprice = 0;
        for(let i = 0 ; i < vivo.length ; i++) {
            s4+= `
            <div class="statistic-content-prd">
                <div class="statistic-content-prd-id">
                    <span>${vivo[i].id}</span>
                </div>
                <div class="statistic-content-prd-name">
                    <div>
                        <img src="${vivo[i].img}" alt="">
                    </div>
                    <span>${vivo[i].name}</span>
                </div>
                <div class="statistic-content-prd-quantity">
                    <span>${vivo[i].quantity}</span>
                </div>
                <div class="statistic-content-price">
                    ${currency(parseInt(vivo[i].quantity) * parseInt(vivo[i].price))}
                </div>
            </div> 
            `
            totalprice += parseInt(vivo[i].quantity) * parseInt(vivo[i].price)
        }
        document.getElementById('statistic-perform').innerHTML = s4
        document.getElementById('statistic-totalprice').innerHTML = currency(totalprice)
    }
    else {
        let s = ""
        let totalprice = 0;
        for(let i = 0 ; i < tmpPrd.length ; i++) {
            s+= `
            <div class="statistic-content-prd">
                <div class="statistic-content-prd-id">
                    <span>${tmpPrd[i].id}</span>
                </div>
                <div class="statistic-content-prd-name">
                    <div>
                        <img src="${tmpPrd[i].img}" alt="">
                    </div>
                    <span>${tmpPrd[i].name}</span>
                </div>
                <div class="statistic-content-prd-quantity">
                    <span>${tmpPrd[i].quantity}</span>
                </div>
                <div class="statistic-content-price">
                    ${currency(parseInt(tmpPrd[i].quantity) * parseInt(tmpPrd[i].price))}
                </div>
            </div> 
            `
            totalprice += parseInt(tmpPrd[i].quantity) * parseInt(tmpPrd[i].price)
        }
        document.getElementById('statistic-perform').innerHTML = s
        document.getElementById('statistic-totalprice').innerHTML = currency(totalprice)
    }
}
showStatisticlist()
function showStatisticlist() {
    let bill = JSON.parse(localStorage.getItem('bill'))
    let tmpPrd = []
    let s = ""
    for(let i = 0 ; i < bill.length ; i++) {
        for(let j = 0 ; j < bill[i].info.length ;j++ )
        tmpPrd.push(bill[i].info[j])  
    }
    for(let i = 0; i < tmpPrd.length-1 ; i++) {
        for(let j = i+1 ; j < tmpPrd.length ; j++) {
            if(tmpPrd[i].id === tmpPrd[j].id) {
                tmpPrd[i].quantity = parseInt(tmpPrd[i].quantity) + parseInt(tmpPrd[j].quantity)
                tmpPrd.splice(j,1); 
            }
        }
    }
    let totalprice = 0;
    for(let i = 0 ; i < tmpPrd.length ; i++) {
        s+= `
        <div class="statistic-content-prd">
            <div class="statistic-content-prd-id">
                <span>${tmpPrd[i].id}</span>
            </div>
            <div class="statistic-content-prd-name">
                <div>
                    <img src="${tmpPrd[i].img}" alt="">
                </div>
                <span>${tmpPrd[i].name}</span>
            </div>
            <div class="statistic-content-prd-quantity">
                <span>${tmpPrd[i].quantity}</span>
            </div>
            <div class="statistic-content-price">
                ${currency(parseInt(tmpPrd[i].quantity)  * parseInt(tmpPrd[i].price) )}
            </div>
        </div> 
        `
        totalprice += parseInt(tmpPrd[i].quantity)  * parseInt(tmpPrd[i].price)
    }
    document.getElementById('statistic-perform').innerHTML = s
    document.getElementById('statistic-totalprice').innerHTML = currency(totalprice) 
}
document.getElementById("statistic-brand-filter").addEventListener("change",function() {
    let d1 = document.getElementById("date-from1")
    let d2 = document.getElementById("date-to1")
    if(d1.value == "" && d2.value == "") {
        statisticFilter_Brand1()
    }
    else {
        statisticFilter()
    }
})
document.getElementById("statistic-filter-btn").addEventListener("click", function() {
    let d1 = document.getElementById("date-from1")
    let d2 = document.getElementById("date-to1")
    if(d1.value == "" && d2.value == "") {
        statisticFilter_Brand1()
    }
    else {
        statisticFilter()
    }
})
/*-----   DANG XUAT  ----- */
function logout(){
	localStorage.removeItem('userlogin');
    window.location.href="Black_Phone.html";
}






 
