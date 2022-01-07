const productList = [
    {
        id: 1,
        topic: "Vinh danh 295 học sinh FPT",
        content: "Tối ngày 16/6/2018 cao đẳng FPT Folytechnic Hà Nội Đã tổ chức lễ vinh danh 'Ong vàng FPL' tuyển dụng 296 cá nhân tập thể có thành tích xuất sắc trong học tập",
        img: "images/img1.jpg",
    }, // product
    {
        id: 2,
        topic: "Sinh viên khối ngành kinh tế học cách chạm vào cảm xúc",
        content: "Với sự tham gia của các chuyên gia trng linh vực kinh doanh, chương trình đã thu hút",
        img: "images/img2.jpg",
    },
    // product
    {
        id: 3,
        topic: "Sinh Viên FPT Polytecnic trải nghiệm thực tế tại Mường Thanh luxury",
        content: "với triết lý đào tạo 'thực hành- thực nghiệm' cao đẳng FPT poly Đà Nẵng thường xuyên tổ chức cho sinh viên thăm quan các đơn vị doanh nghiệm  ",
        img: "images/img3.jpg",
    },
];
const productElement = document.querySelector("#products");
const state = {
    products: [],
};

const getProduct = () => {
    state.products = productList;
};
const template = (s) => s.products
    .map(
        (product) => `<div class="border p-4 rounded shadow">
          <img src="${product.img}" alt="" class="mx-auto"/>
          <h3><a href="" class="font-bold block my-3 text-orange-600">${product.topic}</a></h3>
          <span class="text-black-500">${product.content}</span>
        </div>`,
    )
    .join("");
const render = () => {
    getProduct();
    productElement.innerHTML = template(state);
};
render();

// const newsList = [
//     {
//         id: 1,
//         title: "Vinh danh 295 học sinh FPT",
//         contents: "Tối ngày 16/6/2018 cao đẳng FPT Folytechnic Hà Nội Đã tổ chức lễ vinh danh 'Ong vàng FPL' tuyển dụng 296 cá nhân tập thể có thành tích xuất sắc trong học tập",
//         img: "images/img1.jpg",
//     },
//     {
//         id: 2,
//         title: "Vinh danh 295 học sinh FPT",
//         contents: "Tối ngày 16/6/2018 cao đẳng FPT Folytechnic Hà Nội Đã tổ chức lễ vinh danh 'Ong vàng FPL' tuyển dụng 296 cá nhân tập thể có thành tích xuất sắc trong học tập",
//         img: "images/img1.jpg",
//     },
//     {
//         id: 3,
//         title: "Vinh danh 295 học sinh FPT",
//         contents: "Tối ngày 16/6/2018 cao đẳng FPT Folytechnic Hà Nội Đã tổ chức lễ vinh danh 'Ong vàng FPL' tuyển dụng 296 cá nhân tập thể có thành tích xuất sắc trong học tập",
//         img: "images/img1.jpg",
//     },
// ];
// const newsElement = document.querySelector("#newss");
// if (newsElement) {
//     const result = newsElement
//         .map(function (new) {
// //         return `<div class="border p-4 rounded shadow">
// //         //     <img src="${new.img}" alt="" />
// //         //     <h3><a href="" class="font-bold block my-3">${new.title}</a></h3>
// //         //     <span class="text-red-500">${new.contents}</span>
// //         //   </div>`;
//     }).join("");
// //     newsElement.innerHTML = result;
// }