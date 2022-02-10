import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import NewList from "../components/newsList";

const HomePage = {
    async render() {
        return /* html */`
            ${Header.render()}
            <div class="max-w-5xl mx-auto">
                <div class="banner">
                   ${Banner.render()}
                </div>
                <div class="news">
                    ${await NewList.render()}
                </div>
            </div>
            ${Footer.render()}
        `;
    },
};
export default HomePage;
// callback sử lý bất đồng bộ chuyển bất đồng bộ sang dồng bộ

// function loadScript(src, callback){
//     let script = document.createElement("script");
//     script.src= src;
//     script.onload = () => {
// callback(null, script)
//     }
//     script.onerror = () => {
//             callback("Loi roi")
//     }
//     document.head.append(script);
// }

// loadScript('html://abc.com.index.js', function (error, script) {
//  if(erro){
//      console.log(error);
//  }else {
//      console.log('script', script)
//  }
// }
// });

// const toTinh = new Promise((resolve, reject) => {
//     const status = true;
//     setTimeout(() => {
//         if (status) {
//             resolve("Gật Đầu");
//         } else {
//             reject("lắc đầu");
//         }
//     }, 3000);
// });

// toTinh
//  result nhận giá trị từ resolve trả về gán vào result, then là phương thức của Promise
// .then((result) => console.log(result))
// .then(() => console.log("XXX"))
// .then((error) => console.log(error));

// async chờ
// const prinA = async () => {
//     const result = await render();
//     console.log("result", result);
//     result.push(5);
//     console.log("result", result);
// };
// printA();

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