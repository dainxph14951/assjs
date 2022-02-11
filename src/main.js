import Navigo from "navigo";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import NewsDetail from "./pages/NewsDetail";
import DK from "./pages/dangKy";
import DN from "./pages/dangNhap";
import DashBoardPage from "./pages/admin/dashboard";
import AddNewsPage from "./pages/admin/news/add";
import AdminNewsPage from "./pages/admin/news";
import NewListAdmin from "./pages/AdminPost";
import EditNewsPage from "./pages/admin/news/edit";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
    document.getElementById("content").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};

router.on({
    "/": () => {
        print(HomePage);
    },
    "/about": () => {
        print(AboutPage);
    },
    "/dangky": () => {
        print(DK);
    },
    "/dangnhap": () => {
        print(DN);
    },
    "/news/:id": ({ data }) => {
        print(NewsDetail, data.id);
    },
    "/admin/dashboard": () => {
        print(DashBoardPage);
    },
    "/admin/news": () => {
        print(AdminNewsPage);
    },
    "/admin/news/add": () => {
        print(AddNewsPage);
    },
    "/admin/news/:id/edit": () => {
        print(EditNewsPage);
    },
    "/admin/news/list": () => {
        print(NewListAdmin);
    },
});

router.resolve();

// callback : 1 hàm được truyền vào 1 hàm khác như 1 đối số
// sync, async: Đồng bộ và bất đồng bộ trong javascript

// const a = 10;
// const b = 20;

// function display(result){
//     document.querySelector('#app').innerHTML = result;
// }

// function sum(a,b, callback){
//     callback(a + b);
// }
// sum(a, b, display);

// function loadScript(src, callback) {
//     const script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//         callback(null, script);
//     };
//     script.onerror = () => {
//         callback("Loi roi");
//     };
//     document.head.append(script);
// }

// callback in callback
// loadScript('https://abc.com/index1.js', function(error, script){
//     loadScript('https://abc.com/index2.js', function(error, script){
//         loadScript('https://abc.com/index3.js', function(error, script){
//             loadScript('https://abc.com/index4.js', function(error, script){
//                 console.log('finished')
//             })
//         })
//     })
// });

// es6 - promise: là một đối tượng đặc biệt, xử lý bất đồng bộ

// const render = () => new Promise((resolve, reject) => {
//     let status = false;
//     setTimeout(function(){
//         if(status){
//             // lấy dữ liệu từ database
//             resolve([1,2,3,4])
//         } else {
//             reject("Lắc đầu")
//         }
//     }, 3000)
// });

// // render()
// //     .then((result) => {
// //         result.push(5)
// //         return result
// //     })
// //     .then(data => console.log(data))
// //     .catch(error => console.log(error))

// // async/await: cú pháp mới es8, xử lý bất đồng bộ

// const printA = async () => {
//     try {
//         const result = await render();
//         result.push(5);
//         console.log('result', result);
//     } catch (error) {
//         console.log(error)
//     }
// }
// printA();