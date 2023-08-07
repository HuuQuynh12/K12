// Kiểu nguyên thuỷ
// 1.String: chuỗi và cú pháp viết bằng '', "", ``
// 2.Number: kiểu số
// 3.NaN: kiểu không phải là số
// 4.null: kiểu giá trị được khai báo nhưng chưa gán giá trị
// 5.undefined: Kiểu dữ liệu chưa được khai báo và giá trị chưa có định dạng
// 6.boolean: Kiểu logic trả về true || false
// + typeof: check kiểu dữ liệu trong JS
// + Ép kiểu Number: Number(giá trị)
// + Ép kiểu String:
// 1: biến + .toString()
// 2: Kiểu dữ liệu + string
// Toán tử: +, -, *, /
// Viết tắt toán tử: var A = 10, A = A + 200 -> A += 200
// X++ = X + 1
// X-- = X -1
// Toán tử so sánh: <, <=, >, >=, == so sánh về value, === so sánh cả value và typeof, != khác
// Toán từ 3 ngôi: cú pháp biến = (phép so sánh) ? giá trị trả ra true : giá trị trả ra false
// True: Array, Object, string, number khác 0
// False: 0, string trỗng, null, undefined, NAN
// ||, &&, !=
// var C = A || B // A ? A : B
// var C = A && B // A ? B : A

// Kiểu đối tượng:
// Array: cú pháp [], đánh index từ 0 đến hết, độ dài Array cú pháp là length
// Object: đối tượng
// Funtion: hàm thực thi code và tái sử dụng logic
// Cú pháp: function Tên (){ code }
// Return: Trả ra kết quả cuối cùng của function
// Param: Phần tử được truyền vào function
// hosting: chạy trc khai báo
// Vòng lặp:
//  + while(Điều kiện){ Thực thi code}
//  + do While: thực thi code 1 lần kể cả sai điều kiện
//  + for(điểm bắt đầu chạy, điều kiện check, thực thị mỗi khi lặp 1 lần){ // code}
//  + for in: lặp các phần tử trong Array
//  + fon in: lặp các phần tử Obj

// Array: Mảng chứa các phần tử
// Cú pháp: var tên_biến = [], đánh index từ 0 đến hết

// Object: đối tượng - theo cặp key - value
// Thêm một cặp key - value vào obj => obj.key tên muốn đặt = phần tử thêm vào
// Truy vấn Obj.key - Obj.['key']

// function: ham - chia logic - tai su dung
// cú pháp: function Ten_function(){ thuc thi code}
// hosting
// return: trả ra kết quả cuối cùng
// param: phẩn tử truyền vào bên trong function

// vong lap
// while:while(dieu kien check){ thuc thi code }
// do while: do{thuc thi code} while(dieu kien check)
// for: for(diem bat dau; dieu kien check; buoc nhay)
// for in: in cac phan tu trong mang hoac obj

// if else: check
// switch case

// method string
// substring(vị trí bắt đầu, vị trí kết thúc): lấy phần tử của chuỗi
// indexOf: tìm kiếm vị trí kí tự trong chuỗi
// replace: thay thế ký tự trong chuỗi
// split: tách các phần tử thành 1 array
// trim: xoá khoảng trắng
// toUpperCase: viết hoa
// toLowerCase: viết thương

// method array - manh cua JS
// toString: chuyển arr thành string

// Đảo và sắp xếp
// reverse: dao nguoc cac phan tu
// sort(function(after, before){return after - before}): method sap xep

// Lặp các phần tử
// forEach - tháo tác trực tiếp với arr gốc
// map - tra ra mot mang moi

// Lọc
// filter: loc cac phan rtu array

// Them, sua, xoa
// Get, post, put, delete
// push: them phan tu vao cuoi array
// pop: xoa phan tu cuoi cung - lay duoc ra phan tu xoa
// unshift: them phan tu o dau array
// shift: xoa phan tu o dau - lay duoc ra phan tu xoa
// ----- Thao tac truc tiep den array goc
// slice: lay phan tu theo vi tri
// splice: them phan tu vao vi tri

// tìm kiếm, check
// find: tim kiem phan tu || tra ra phan tu do || undefined
// indexOf: tim kiem vi tri phan tu || dung thi tra ra vi tri, sai thi tra ra -1
// includes: tra ra true || false -> kiem tra phan tu

// Date
// new Date: lay thoi gian, ngay, thang, nam hien tai
// new Date(string): dinh dang nam - thang - ngay

// lay ra
// getDate() : lay ngay (1-31)
// getDay(): lay ngay trong tuan (0-6)
// getFullYear: lay nam day du (YYYY)
// getYear: lay nam 2 so cuoi (YY)
// getHours: lay so gio (0-23)
// getMiliSeconds: lay mili giay (0-999)
// getMinuted: lay so phet (0-59)
// getMoth: lay thang (0-11)
// getSeconds: lay giay(0-59)
// getTime: thoi gian duoc covert sang dang miliseconds

// setDate: set ngay
// setMonth: set thang
// setFullYear: set year

// Math
// abs: tra gia tuyet doi
// random: tra ve so ngau nhieu || nhan them phan tu thi no se tra ra so ngau nhieu den do
// ceil: lam tron thanh so nguyen len
// floor: lam tron thanh so nguyen xuong

// DOM

// get element
// tagName: lay ten the => lay theo arr
// ById: lay chi 1 id dau ten
// ByclassName: lay element theo class => lay theo arr
// querySelectorAll: lay element all: ten the, #id, .class => lay theo arr

// get and set attribute
// getAttribute("Ten_attribute"): lay ra value atrribute
// setAttribute("Ten_attribute","Gia_tri"): set value atrribte

// them, sua, xoa
// append("noi dung"): them vao cuoi element
// createElement: tao element
// createAttribute: tao ra atrribute
// setAttributeNode: setAtrtibute vao element
// remove: xoa element

// text
// innerText: lay text trong element
// set: innerText = "gia_tri"

// html
// innerHTML: lay html
// set: innerHTML = "gia tri HTML"

//CSS
// get: element.style.ten_thuoc_tinh_css: get thuoc tinh css
// set: element.style.ten_thuoc_tinh_css = gia tri
// style inline

// class
// them class: elemenent.classList.add("ten_class"): add class vao element
// xoa class: elemenent.classList.remove("ten_class"): xoa class o elemenent

// Event: Hanh vi
// chuot
// elemenet.addEventListenner("Ten_su_kien", function_thuc_thi): lap trinh hanh vi nguoi dung
// click: hanh vi click chuot
// change: hanh vi thay doi
// mouseover: di chuyen chuot vao vung duoc chon
// mousedown: click chuot xuong
// mouseup: nhay chuot len
// contextmenu: chuot phai
// preventDefault: su kien mac cua trang web
// stopPropagation: chan noi bot cua cha
// window: phuong thuc tac voi trinh duyen
// innerWidth: chieu rong
// innerHeight: chieu cao

// keo tha drop - drag
// draggable:true cho ke
// dragStart: bat dau keo
// dragEnd: ket thuc keo
// drop: nhan tha
// dragover: tha muc tieu || khi kéo qua một phần tử khác

// thao tac voi ban phim
// keydown: nhan phim xuong
// keyup: nhap phim len

// callback:
// function truyen vao mot doi so function
// doi thao trc xong moi xu ly thao tac sau

// dong bo - bat dong bo
// dong bo js la don luong tu tren xuong duoi - xu ly cong viec phai cho doi
// bat dong bo xu ly cong trong trang thai sleep:
// setTimeout, setInterval, asyn await, fetch data - xu ly cong viec khac ma khong phai cho doi
// promise: xu bat dong bo va la 1 loi hua bat buoc phai tra ra thanh cong hay thai bai
// promise.all: xu bat dong bo nhieu function promise
// va tat ca promise function tra res thi promise.all tra then
// 1 trong promise function tra rej thi promise.all tra catch

// fetch data - call API cua JS

// Async - Await
// Async - khai bao ham bat dong bo
// Await - tam dung thuc hien ham asyn

let peopleArray = [
  {
    name: "John Doe",
    age: 30,
    address: "123 Main St, City",
    hobbies: ["Đọc sách", "Du lịch"],
  },
  {
    name: "Jane Smith",
    age: 25,
    address: "456 Park Ave, Town",
    hobbies: ["Nấu ăn", "Chơi piano"],
  },
  {
    name: "Bob Johnson",
    age: 40,
    address: "789 Broadway, Village",
    hobbies: ["Đi bộ", "Xem phim"],
  },
];

let table = document.querySelector("table");

function renderHTML() {
  let tableHTML = `
  <thead>
    <th>Name</th>
    <th>Age</th>
    <th>Address</th>
    <th>Hobbies</th>
    <th>Active</th>
  </thead>
  <tbody>
  ${peopleArray
    .map(function (item, index) {
      return `
    <tr>
      <td>${item.name}</td>
      <td>${item.age}</td>
      <td>${item.address}</td>
      <td>${item.hobbies.join(", ")}</td>
      <td>
        <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onclick="openEdit(${index})"
        >
          Edit
        </button>
        <button onclick="deleteFunction(${index})">Delete</button>
      </td>
    </tr>
    `;
    })
    .join("")}
  </tbody>
  `;
  table.innerHTML = tableHTML;
}

let name = document.getElementById("name-add");
let age = document.getElementById("age-add");
let address = document.getElementById("address-add");
let hobbies = document.getElementById("hobbies-add");
let indexEdit;

function checkFunction() {
  let data = {
    name: name.value,
    age: age.value,
    address: address.value,
    hobbies: [hobbies.value],
  };
  if (indexEdit === 0 || indexEdit) {
    peopleArray[indexEdit] = data;
  } else {
    peopleArray.push(data);
  }
  renderHTML();
  let close = document.getElementById("close-modal-add");
  close.click();
}

function openAdd() {
  indexEdit = "";
  name.value = "";
  age.value = "";
  address.value = "";
  hobbies.value = "";
}

function openEdit(index) {
  indexEdit = index;
  name.value = peopleArray[index].name;
  age.value = peopleArray[index].age;
  address.value = peopleArray[index].address;
  hobbies.value = peopleArray[index].hobbies.join(", ");
}

function deleteFunction(index) {
  peopleArray.splice(index, 1);
  renderHTML();
}

renderHTML();
