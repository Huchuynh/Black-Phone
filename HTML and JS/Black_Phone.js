createProduct()
checklogin()
createAccount_local()
createBill_local()
function createAccount_local() {
    if(localStorage.getItem('user')=== null) {
        let userArray = []
        var user = {id: "admin",username: 'admin', password: '12345678', fullname: 'ADMIN', phone: '0867575163' , datesignup: '6-11-2022'};
        var user1 = {id: "KH1",username: "haotuan", password: "04082003", fullname: "Mạch Hạo Tuấn", phone: "0938446903" , datesignup: '12-11-2022'};
        var user2 = {id: "KH2",username: "huchuynh", password: "07072003", fullname: "Hu Chuynh", phone: "0996299763" , datesignup: '16-11-2022'};
        var user3 = {id: "KH3",username: "annguyen", password: "012345678", fullname: "Nguyễn Văn An", phone: "0908134820" , datesignup: '18-11-2022'};
        var user4 = {id: "KH4",username: "antran", password: "12345678", fullname: "Trần Văn An", phone: "0954123678" , datesignup: '22-11-2022'};
        var user5 = {id: "KH5",username: "vannguyen", password: "12345678", fullname: "Nguyễn Văn", phone: "0987456321" , datesignup: '25-11-2022'};
        var user6 = {id: "KH6", username: "anhuynh", password: "987654321", fullname: "Huỳnh Văn An", phone: "0986321457",datesignup: "26-11-2022"}
        var user7 = {id: "KH7",username: "tuanhuynh", password: "987654321", fullname: "Huỳnh Văn Tuấn",phone: "0947568123",datesignup: "26-11-2022"}
        userArray.push(user)
        userArray.push(user1)
        userArray.push(user2)
        userArray.push(user3)
        userArray.push(user4)
        userArray.push(user5)
        userArray.push(user6)
        userArray.push(user7)
        localStorage.setItem('user',JSON.stringify(userArray))
    }
}
function createBill_local() {
    if(localStorage.getItem('bill') === null) {
        let billarr = []
        let bill0 = {
            customer: {id: "KH1",datesignup: "12-11-2022",fullname: "Mạch Hạo Tuấn",password: "04082003",phone: "0938446903",username: "haotuan"},
            date: "23-11-2022",
            id: 0,
            info: [{id: "s08", name: "Samsung A32", quantity: "3", price: "5500000", img: "../image/samsung_a32.png"},{id: "s09", name: "Samsung A22", quantity: "3", price: "4900000", img: "../image/samsung_a22.png"}],
            status: "Đã xử lý",
            totalprice: 31200000
        }
        let bill1 = {
            customer: {id: "KH1",datesignup: "12-11-2022",fullname: "Mạch Hạo Tuấn",password: "04082003",phone: "0938446903",username: "haotuan"},
            date: "23-11-2022",
            id: 1,
            info: [{id: "x06", name: "Xiaomi 10s", quantity: "3", price: "3900000", img: "../image/xiaomi10s.png"},
            {id: "x07", name: "Xiaomi 9C", quantity: "2", price: "3200000", img: "../image/xiaomi9c.png"},
            {id: "v07", name: "Vivo Y53", quantity: "3", price: "7000000", img: "../image/vivoy53.png"},
            {id: "v04", name: "Vivo X80", quantity: "2", price: "20000000", img: "../image/vivox80.png"}],
            status: "Đã xử lý",
            totalprice: 79100000
        }
        let bill2 = {
            customer: {id: "KH1",datesignup: "12-11-2022",fullname: "Mạch Hạo Tuấn",password: "04082003",phone: "0938446903",username: "haotuan"},
            date: "23-11-2022",
            id: 2,
            info: [{id: "s08", name: "Samsung A32", quantity: "1", price: "5500000", img: "../image/samsung_a32.png"}],
            status: "Đã xử lý",
            totalprice: 5500000
        }
        let bill3 = {
            customer: {id: "KH1",datesignup: "12-11-2022",fullname: "Mạch Hạo Tuấn",password: "04082003",phone: "0938446903",username: "haotuan"},
            date: "23-11-2022",
            id: 3,
            info: [{id: "i02", name: "iPhone 14 Pro", quantity: "1", price: "30000000", img: "../image/iphone14pro.png"}],
            status: "Đã xử lý",
            totalprice: 30000000
        }
        let bill4 = {
            customer: {id: "KH1",datesignup: "12-11-2022",fullname: "Mạch Hạo Tuấn",password: "04082003",phone: "0938446903",username: "haotuan"},
            date: "23-11-2022",
            id: 4,
            info: [
                {id: "s08", name: "Samsung A32", quantity: "4", price: "5500000", img: "../image/samsung_a32.png"},               
                {id: "s04", name: "Samsung S22 Ultra", quantity: "3", price: "26000000",img: "../image/samsung_s22ultra.png"},
                {id: "s14", name: "Samsung Z Flip 4", quantity: "3", price: "29990000",img: "../image/samsung_zflip.png"},
                {id: "i07", name: "iPhone 13", quantity: "2", price: "19500000", img: "../image/iphone13.png"}],
            status: "Đã xử lý",
            totalprice: 228970000
        }
        let bill5 = {
            customer: {id: "KH2",datesignup: "16-11-2022",fullname: "Hu Chuynh",password: "07072003",phone: "0936299763",username: "huchuynh"},
            date: "23-11-2022",
            id: 5,
            info: [{id: "i07", name: "iPhone 13", quantity: "4", price: "19500000", img: "../image/iphone13.png"},{id: "i04", name: "iPhone 14", quantity: "1", price: "24000000", img: "../image/iphone14.png"}],
            status: "Đã xử lý",
            totalprice: 102000000
        }
        let bill6 = {
            customer: {id: "KH4",datesignup: "22-11-2022",username: "antran", password: "12345678", fullname: "Trần Văn An", phone: "0954123678",},
            date: "23-11-2022",
            id: 7,
            info: [{id: "i02", name: "iPhone 14 Pro", quantity: "10", price: "30000000", img: "../image/iphone14pro.png"},
            {id: "i01", name: "iPhone 14 Pro Max", quantity: "1", price: "34990000",img: "../image/iphone14promax.png"},
            {id: "s08", name: "Samsung A32", quantity: "1", price: "5500000", img: "../image/samsung_a32.png"}, 
            {id: "s10", name: "Samsung A04", quantity: "1", price: "4000000", img: "../image/samsung_a04.png"}, 
            {id: "s04", name: "Samsung S22 Ultra", quantity: "2", price: "26000000",img: "../image/samsung_s22ultra.png"}],
            status: "Đã xử lý",
            totalprice: 396490000
        }
        let bill7 = {
            customer: {id: "KH2",datesignup: "16-11-2022",fullname: "Hu Chuynh",password: "07072003",phone: "0936299763",username: "huchuynh"},
            date: "23-11-2022",
            id: 8,
            info: [{id: "i01", name: "iPhone 14 Pro Max", quantity: "2", price: "34990000",img: "../image/iphone14promax.png"},           
            {id: "v08", name: "Vivo T1", quantity: "4", price: "6200000", img: "../image/vivot1.png"},           
            {id: "v07", name: "Vivo Y53", quantity: "4", price: "7000000", img: "../image/vivoy53.png"},          
            {id: "x05", name: "Xiaomi 10", quantity: "1", price: "7000000", img: "../image/xiaomi10.png"},           
            {id: "v10", name: "Vivo Y21", quantity: "2", price: "6000000", img: "../image/vivoy21.png"},
            {id: "s05", name: "Samsung M53", quantity: "1", price: "12500000", img: "../image/samsung_m53.png"}],
            status: "Chưa xử lý",
            totalprice: 154280000
        }
        let bill8 = {
            customer: {id: "KH3",username: "annguyen", password: "012345678", fullname: "Nguyễn Văn An", phone: "0908134820",datesignup: "18-11-2022"},
            date: "24-11-2022",
            id: 9,
            info: [{id: "s08", name: "Samsung A32", quantity: "2", price: "5500000", img: "../image/samsung_a32.png"}],
            status: "Chưa xử lý",
            totalprice: 11000000
        }
        let bill9 = {
            customer: {id: "KH4",datesignup: "22-11-2022",username: "antran", password: "12345678", fullname: "Trần Văn An", phone: "0954123678",},
            date: "24-11-2022",
            id: 10,
            info: [{id: "x10", name: "Xiaomi A1", quantity: "2", price: "2100000", img: "../image/xiaomia1.png"},
            {id: "v06", name: "Vivo Y55", quantity: "3", price: "7000000", img: "../image/vivoy55.png"},
            {id: "i12", name: "iPhone SE", quantity: "2", price: "11500000", img: "../image/iphonese.png"}],
            status: "Chưa xử lý",
            totalprice: 48200000
        }
        let bill10 = {
            customer: {id: "KH3",username: "annguyen", password: "012345678", fullname: "Nguyễn Văn An", phone: "0908134820",datesignup: "18-11-2022"},
            date: "24-11-2022",
            id: 11,
            info: [{id: "s13", name: "Samsung Z Fold 4", quantity: "2", price: "38000000",img: "../image/samsung_zfold4.png"},
            {id: "x13", name: "Xiaomi Note 10s", quantity: "1", price: "5500000", img: "../image/xiaominote10.png"}],
            status: "Đã xử lý",
            totalprice: 81500000
        }
        let bill11 = {
            customer: {id: "KH2",datesignup: "16-11-2022",fullname: "Hu Chuynh",password: "07072003",phone: "0936299763",username: "huchuynh"},
            date: "24-11-2022",
            id: 12,
            info: [{id: "x11", name: "Xiaomi 12s", quantity: "2", price: "16000000", img: "../image/xiaomi12s.png"},
            {id: "s03", name: "Samsung A73", quantity: "4", price: "12000000", img: "../image/samsung_a73.png"}],
            status: "Chưa xử lý",
            totalprice: 80000000
        }
        let bill12 = {
            customer: {id: "KH2",datesignup: "16-11-2022",fullname: "Hu Chuynh",password: "07072003",phone: "0936299763",username: "huchuynh"},
            date: "24-11-2022",
            id: 13,
            info: [{id: "i08", name: "iPhone 13 Pro", quantity: "2", price: "25000000",img: "../image/iphone13promax.png"},
           {id: "i09", name: "iPhone 12", quantity: "3", price: "16500000", img: "../image/iphone12.png"},
           {id: "i11", name: "iPhone 11", quantity: "2", price: "11800000", img: "../image/iphone11.png"},
            {id: "v01", name: "Vivo V25", quantity: "4", price: "10500000", img: "../image/vivo.png"}],
            status: "Đã xử lý",
            totalprice: 165100000
        }
        let bill13 = {
            customer: {id: "KH1",datesignup: "12-11-2022",fullname: "Mạch Hạo Tuấn",password: "04082003",phone: "0938446903",username: "haotuan"},
            date: "24-11-2022",
            id: 14,
            info: [{id: "s14", name: "Samsung Z Flip 4", quantity: "4", price: "29990000",img: "../image/samsung_zflip.png"},
            {id: "s04", name: "Samsung S22 Ultra", quantity: "4", price: "26000000",img: "../image/samsung_s22ultra.png"},
            {id: "s08", name: "Samsung A32", quantity: "3", price: "5500000", img: "../image/samsung_a32.png"},
            {id: "s12", name: "Samsung A13", quantity: "1", price: "4800000", img: "../image/samsung_a13.png"},
            {id: "x08", name: "Xiaomi POCO", quantity: "2", price: "2990000", img: "../image/xiaomipoco.png"},
            {id: "i07", name: "iPhone 13", quantity: "1", price: "19500000", img: "../image/iphone13.png"}],
            status: "Chưa xử lý",
            totalprice: 270740000
        }
        let bill14 = {
            customer: {id: "KH1",datesignup: "12-11-2022",fullname: "Mạch Hạo Tuấn",password: "04082003",phone: "0938446903",username: "haotuan"},
            date: "24-11-2022",
            id: 15,
            info: [{id: "i02", name: "iPhone 14 Pro", quantity: "2", price: "30000000", img: "../image/iphone14pro.png"},
            {id: "i04", name: "iPhone 14", quantity: "2", price: "24000000", img: "../image/iphone14.png"},
            {id: "i03", name: "iPhone 14 Plus", quantity: "3", price: "27000000", img: "../image/iphone14plus.png"},
            {id: "s02", name: "Samsung A53", quantity: "2", price: "11000000", img: "../image/samsung_a53.png"},
            {id: "s06", name: "Samsung A33", quantity: "2", price: "6900000", img: "../image/samsung_a33.png"}],
            status: "Đã xử lý",
            totalprice: 224800000
        }
        let bill15 = {
            customer: {id: "KH4",datesignup: "22-11-2022",username: "antran", password: "12345678", fullname: "Trần Văn An", phone: "0954123678",},
            date: "24-11-2022",
            id: 16,
            info: [
                {id: "i12", name: "iPhone SE", quantity: "1", price: "11500000", img: "../image/iphonese.png"},
                {id: "x07", name: "Xiaomi 9C", quantity: "2", price: "3200000", img: "../image/xiaomi9c.png"},
                {id: "s10", name: "Samsung A04", quantity: "5", price: "4000000", img: "../image/samsung_a04.png"}],
            status: "Đã xử lý",
            totalprice: 37900000
        }
        let bill16 = {
            customer: {id: "KH1",datesignup: "12-11-2022",fullname: "Mạch Hạo Tuấn",password: "04082003",phone: "0938446903",username: "haotuan"},
            date: "24-11-2022",
            id: 17,
            info: [{id: "x10", name: "Xiaomi A1", quantity: "2", price: "2100000", img: "../image/xiaomia1.png"},
            {id: "x12", name: "Xiaomi 11s", quantity: "1", price: "8500000", img: "../image/xiaomi11s.png"},
            {id: "i06", name: "iPhone 13 mini", quantity: "1", price: "17000000", img: "../image/iphone13mini.png"}],
            status: "Đã xử lý",
            totalprice: 29700000
        }
        let bill17 = {
            customer: {id: "KH5",datesignup: "25-11-2022",username: "vannguyen", password: "12345678", fullname: "Nguyễn Văn", phone: "0987456321"},
            date: "25-11-2022",
            id: 18,
            info: [{id: "x01", name: "Xiaomi 12T", quantity: "2", price: "17000000", img: "../image/xiaomi12T.png"},
            {id: "i02", name: "iPhone 14 Pro", quantity: "2", price: "30000000", img: "../image/iphone14pro.png"}],
            status: "Chưa xử lý",
            totalprice: 94000000
        }
        let bill18 = {
            customer: {id: "KH5",datesignup: "25-11-2022",username: "vannguyen", password: "12345678", fullname: "Nguyễn Văn", phone: "0987456321"},
            date: "26-11-2022",
            id: 19,
            info: [{id: "i03", name: "iPhone 14 Plus", quantity: "2", price: "27000000", img: "../image/iphone14plus.png"},
            {id: "x12", name: "Xiaomi 11s", quantity: "4", price: "8500000", img: "../image/xiaomi11s.png"},
            {id: "x04", name: "Xiaomi 11T", quantity: "2", price: "10000000", img: "../image/xiaomi11T.png"},
            {id: "x11", name: "Xiaomi 12s", quantity: "1", price: "16000000", img: "../image/xiaomi12s.png"},
            {id: "s10", name: "Samsung A04", quantity: "1", price: "4000000", img: "../image/samsung_a04.png"}],
            status: "Chưa xử lý",
            totalprice: 128000000   
        }
        let bill19 = {
            customer: {id: "KH7",datesignup: "26-11-2022",username: "tuanhuynh", password: "987654321", fullname: "Huỳnh Văn Tuấn",phone: "0947568123"},
            date: "26-11-2022",
            id: 20,
            info: [{id: "x02", name: "Xiaomi 12", quantity: "1", price: "17000000", img: "../image/xiaomi12.png"},
            {id: "s09", name: "Samsung A22", quantity: "3", price: "4900000", img: "../image/samsung_a22.png"},
            {id: "i03", name: "iPhone 14 Plus", quantity: "3", price: "27000000", img: "../image/iphone14plus.png"},
            {id: "x05", name: "Xiaomi 10", quantity: "4", price: "7000000", img: "../image/xiaomi10.png"},
            {id: "i02", name: "iPhone 14 Pro", quantity: "3", price: "30000000", img: "../image/iphone14pro.png"},
            {id: "v06", name: "Vivo Y55", quantity: "3", price: "7000000", img: "../image/vivoy55.png"},
            {id: "x08", name: "Xiaomi POCO", quantity: "3", price: "2990000", img: "../image/xiaomipoco.png"}],
            status: "Đã xử lý",
            totalprice: 260670000   
        }
        
        billarr.push(bill0)
        billarr.push(bill1)
        billarr.push(bill2)
        billarr.push(bill3)
        billarr.push(bill4)
        billarr.push(bill5)
        billarr.push(bill6)
        billarr.push(bill7)
        billarr.push(bill8)
        billarr.push(bill9)
        billarr.push(bill10)
        billarr.push(bill11)
        billarr.push(bill12)
        billarr.push(bill13)
        billarr.push(bill14)
        billarr.push(bill15)
        billarr.push(bill16)
        billarr.push(bill17)
        billarr.push(bill18)
        billarr.push(bill19)

        localStorage.setItem('bill',JSON.stringify(billarr));
    }
}
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
                    alert("THÊM VÀO GIỎ HÀNG THÀNH CÔNG!")
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
                    alert("THÊM VÀO GIỎ HÀNG THÀNH CÔNG!")
                }
                else if(product[i].id === productid && inCart(product[i].id) == true){
                    alert("SẢN PHẨM ĐÃ CÓ TRONG GIỎ HÀNG !")
                }
                 
            } 
            localStorage.setItem('cart',JSON.stringify(cartArr));
        } 
        showCartTable()
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
	if (brandsearch == 'all') {
        if (priceform == '' && priceto == '') {
            showProduct(JSON.parse(localStorage.getItem('product')))
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



/*-------- */

/* DON HANG */
function buy(){
	if(localStorage.getItem('userlogin')===null){
		alert("Bạn phải đăng nhập trước khi mua sản phẩm");
        document.getElementById('cart').style.display = 'none';
        showFormLogin();
		return false;
	}
	let info = [];
    let prd
	var totalprice = 0;
	if(localStorage.getItem('cart')===null || localStorage.getItem('cart')=='[]'){
		alert("GIỎ HÀNG RỖNG! CHỌN MUA SẢN PHẨM ĐỂ THANH TOÁN")
        return false;
	}
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
			totalprice+=cartArray[i].quantity*cartArray[i].price;
            prd = {id: cartArray[i].id , name: cartArray[i].name ,quantity:cartArray[i].quantity, price: cartArray[i].price,img: cartArray[i].img}
            info.push(prd);
	}
	var customer = JSON.parse(localStorage.getItem('userlogin'));
	var date = new Date();
	var d = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
	if(localStorage.getItem('bill')===null){
		var billArray = [];
		var bill = {id: billArray.length, info: info, totalprice: totalprice, customer: customer, date: d, status: 'Chưa xử lý'};
		billArray.push(bill);
		localStorage.setItem('bill', JSON.stringify(billArray));
	}
	else{
		var billArray = JSON.parse(localStorage.getItem('bill'));
        let billId = []
        for(let i=0; i<billArray.length ;i++) {
            billId.push(billArray[i].id);
        } 
        let billid = Math.max(...billId) + 1
		var bill = {id: billid, info: info, totalprice: totalprice, customer: customer, date: d, status: 'Chưa xử lý'};
		billArray.push(bill);
		localStorage.setItem('bill', JSON.stringify(billArray));
	}	
    document.getElementById('cart').style.display = 'none';
	showCartTable();
    var text = "BẠN CÓ MUỐN THANH TOÁN KHÔNG?"
    if (confirm(text)) {
        alert("THANH TOÁN THÀNH CÔNG!")
        localStorage.removeItem('cart');
        showbill()
    }
    else 
        return true
}
function showbill(){ // sửa 2
    if(localStorage.getItem('userlogin')===null){
		alert("Bạn phải đăng nhập trước khi xem hóa đơn");
        showFormLogin();
		document.getElementById('bill').style.display = 'none'
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
                '<span class="bill_info">Mã đơn hàng</span>'+
                '<span class="bill_info">Giá</span>'+
                '<span class="bill_info">Ngày xuất đơn</span>'+
                '<span class="bill_info">Tình trạng</span>'+
                '<span class="bill_info">Chi tiết</span>'+
                '<span class="bill_info">Xóa</span>'+
            '</div>';
		for (var i = 0; i < billArray.length; i++) {
			if(user.username==billArray[i].customer.username){
               
                    s +='<div class="billcontent" >'+
                            '<div>'+billArray[i].id+'</div>'+
                            '<div>'+currency(billArray[i].totalprice)+'</div>'+
                            '<div>'+billArray[i].date+'</div>'+
                            '<div class="bill_status1">'+billArray[i].status+'</div>'+
                            '<button onclick="showBillDetail('+billArray[i].id+')" id = "btn_detail_bill" class="btn_trash_bill"><i class="fa-solid fa-circle-info"></i></button>'+
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
                alert("KHÔNG THỂ XÓA ĐƠN HÀNG ĐÃ ĐƯỢC XỬ LÝ!")
        }
        else {
            return true;
        }
}

//show bill detail
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
                            <span>Tổng cộng:</span>  ${currency(bill[i].totalprice)} 
                        </div> 
                    </div>
                </div>
            </form>`
        }
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

document.getElementById('formsignup').addEventListener('submit', createUser);
document.getElementById('formlogin').addEventListener('submit', login);
function setId_user() {
    let userArray = JSON.parse(localStorage.getItem('user'));
    var tmp = userArray[userArray.length-1].id;
    var max =parseInt(tmp.slice(2)) + 1;
    return "KH"+ max;
}
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
    var user = {id: setId_user(),username: username.value, password: password.value, fullname: name.value, phone: phone.value , datesignup: datesignup};
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
                        <div onclick="infocustomer()" id="accinfo-btn">
                            <i class="fa-solid fa-circle-info"></i>
                    
                            <span>
                                Tài khoản
                            </span>
                        </div>
                        <div id="logout-btn" onclick="logout()">
                            <i class="fa-solid fa-right-from-bracket"></i>
                            <span>
                                Đăng xuất
                            </span>
                        </div>
                    </div>
                </div>
                `
		}
		document.getElementById('div-sign').innerHTML = s;
	}
}
 
// Thong tin khach hang
function closeFormCustomer() {
    document.getElementById('forminfocustomer').style.display = 'none';
}

function infocustomer() {
    document.getElementById('forminfocustomer').style.display = 'block';
    var userlogin = JSON.parse(localStorage.getItem('userlogin'));
    var arrUser = JSON.parse(localStorage.getItem('user'));
    let s = "";
    for (let i = 0; i < arrUser.length; i++) {
        if (userlogin.username == arrUser[i].username && userlogin.password == arrUser[i].password) {
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
                                <button type="submit" class="btn btn__primary" >LƯU LẠI</button>
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
document.getElementById('forminfocustomer').addEventListener('submit', updateCustomer);

function updateCustomer(e) {
    e.preventDefault();
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
    let tempInfo = JSON.parse(localStorage.getItem('userlogin'));

    for (let i = 0; i < customerInfo.length; i++) {
        if (tempInfo.username == customerInfo[i].username && tempInfo.password == customerInfo[i].password) {
            customerInfo[i].username = username.value;
            customerInfo[i].password = password.value;
            customerInfo[i].phone = phone.value;
            customerInfo[i].fullname = fullname.value;
        }
    }
    let newInfo = tempInfo;
    newInfo.username = username.value;
    newInfo.password = password.value;
    newInfo.fullname = fullname.value;
    newInfo.phone = phone.value;

    localStorage.removeItem('user');
    localStorage.setItem('user', JSON.stringify(customerInfo));
    localStorage.removeItem('userlogin');
    localStorage.setItem('userlogin', JSON.stringify(newInfo));
    
    alert('Cập nhật thành công');

    checklogin();
    closeFormCustomer();
}