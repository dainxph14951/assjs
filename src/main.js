import Navigo from "navigo";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import NewsDetail from "./pages/NewsDetail";
import DK from "./pages/dangKy";
import DN from "./pages/dangNhap";
import DashBoardPage from "./pages/admin/dashboard";
import AddNewsPage from "./pages/admin/news/add";
import AdminNewsPage from "./pages/admin/news";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("content").innerHTML = content;
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
    "/admin/dashboard": () => {
        print(DashBoardPage.render());
    },
    "/admin/news": () => {
        print(AdminNewsPage.render());
    },
    "/admin/news/add": () => {
        print(AddNewsPage.render());
    },
});

router.resolve();