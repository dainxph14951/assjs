import axios from "axios";

const NewListAdmin = {
    async render() {
        const response = await axios.get("https://5e79b4b817314d00161333da.mockapi.io/posts"); // chờ axios lấy dự liệu gán gtri vào
        return /* html */`
        <h2 class="font-semibold text-2xl uppercase my-4">Quản Lý Tin Tức</h2>            
        <div class="grid grid-cols-3 gap-8">

        <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Image</th>
            <th>Title</th>
            <th>decs</th>
          </tr>
        </thead>
        <tbody>
        ${response.data.map((post, index) => `
        <tr>
        <td>${index + 1}</td>
            <td href="/news/${post.id}">
                <img src="${post.img}" alt="" width="50" />
            </td>
            <td class="my-3"><a href="/news/${post.id}" class="font-semibold text-lg text-orange-500 ">${post.title}</a></td>
            <td>
            <button data-id="${post.id}" class="btn">Delete</button>
            </td>
        </tr>
`).join("")}
        </tbody>
      </table>

        </div>
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn Có Chắc Chắn Không");
                if (confirm) {
                    axios.delete(`https://5e79b4b817314d00161333da.mockapi.io/posts/${id}`);
                }
            });
        });
    },
};
export default NewListAdmin;