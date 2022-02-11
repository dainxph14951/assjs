import { get } from "../api/posts";
import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";

const NewsDetail = {
    async  render(id) {
        const { data } = await get(id);

        return `<div class="max-w-5xl mx-auto">
        ${Header.render()}
        <div class="banner">
        ${Banner.render()}
         </div>
            <h1>${data.title}</h1>
            <img src="${data.img}" />
            <p>${data.desc}</p>
        </div>
        ${Footer.render()}`;
    },
};
export default NewsDetail;