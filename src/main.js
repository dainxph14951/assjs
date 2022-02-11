import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/about";
import DaoTao from "./pages/daotao";
import SinhVien from "./pages/sinhvien";
import TuyenSinh from "./pages/tuyensinh";
import HomePage from "./pages/home";
import NewsDetail from "./pages/NewsDetail";
import DK from "./pages/dangKy";
import DN from "./pages/dangNhap";

// eslint-disable-next-line import/prefer-default-export
export const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("content").innerHTML = await content.render(id);
    document.getElementById("footer").innerHTML = Footer.render();
    if (content.afterRender) content.afterRender();
};

router.on({
    "/": () => {
        print(HomePage);
    },
    "/about": () => {
        print(AboutPage);
    },
    "/daotao": () => {
        print(DaoTao);
    },
    "/sinhvien": () => {
        print(SinhVien);
    },
    "/tuyendung": () => {
        print(TuyenSinh);
    },
    "/dangky": () => {
        print(DK);
    },
    "/dangnhap": () => {
        print(DN);
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(NewsDetail, id);
    },
});

router.resolve();

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