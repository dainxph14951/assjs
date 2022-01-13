import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import NewsDetail from "./pages/NewsDetail";
import DK from "./pages/dangKy";
import DN from "./pages/dangNhap";

// eslint-disable-next-line import/prefer-default-export
export const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("content").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/dangky": () => {
        print(DK.render());
    },
    "/dangnhap": () => {
        print(DN.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(NewsDetail.render(id));
    },
});

router.resolve();