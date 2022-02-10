import FooterAdd from "./admin/components/footer";
import Header from "./admin/components/header";
import addNews from "./admin/news/add-new";
import News from "./admin/news/index";
import editNews from "./admin/news/edit-new";
import pageAdd from "./admin/dashboard/home";

import { router } from "./main";

const print = async (dashboard, id) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("content").innerHTML = await dashboard.render();
    document.getElementById("footer").innerHTML = FooterAdd.render();
};
router.on({
    "/admin/dashboard": () => {
        print(pageAdd);
    },
    "/admin/news": () => {
        print(News);
    },
    "/admin/add": () => {
        print(addNews);
    },
    "/admin/news/edit/:id": ({ data }) => {
        const { id } = data;
        print(editNews, id);
    },

});

router.resolve();