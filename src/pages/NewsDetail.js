import data from "../data";

const NewsDetail = {
    render(id) {
        const found = data.find((element) => element.id === id);

        return `<div class="max-w-5xl mx-auto">
            <h1>${found.title}</h1>
            <img class="max-w-5xl mx-auto" src="${found.img}" />
            <p>${found.desc}</p>
        </div>`;
    },
};
export default NewsDetail;