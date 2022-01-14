import data from "../data";
import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";

const NewsDetail = {
    render(id) {
        const found = data.find((element) => element.id === id);

        return `<div class="max-w-5xl mx-auto">
        ${Header.render()}
        <div class="banner">
        ${Banner.render()}
         </div>
            <h1>${found.title}</h1>
            <img src="${found.img}" />
            <p>${found.desc}</p>
        </div>
        ${Footer.render()}`;
    },
};
export default NewsDetail;