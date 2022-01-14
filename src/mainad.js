import FooterAdd from "./admin/components/footer";
import Header from "./admin/components/header";
import News from "./admin/news/index";
import addNews from "./admin/news/add-new";
import editNews from "./admin/news/edit-new";
import pageAdd from "./admin/dashboard/home";

import { router } from "./main";

const print = (dashboard) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("content").innerHTML = dashboard;
    document.getElementById("footer").innerHTML = FooterAdd.render();
};
router.on({
    "/admin/dashboard": () => {
        print(pageAdd.render());
    },
    "/admin/news": () => {
        print(News.render());
    },
    "/admin/add": () => {
        print(addNews.render());
    },
    "/admin/news/edit/:id": ({ data }) => {
        const { id } = data;
        print(editNews.render(id));
    },

});

router.resolve();