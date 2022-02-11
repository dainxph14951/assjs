import axios from "axios";
import NavAdmin from "../../../components/NavAdmin";
import { getAll } from "../../../api/posts";

const AdminNewsPage = {
    async render() {
        const response = await getAll(); // chờ axios lấy dự liệu gán gtri vào
        return /* html */`
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex-1 min-w-0">
                        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                            Quản lý tin tức
                        </h2>
                        </div>
                        <div class="mt-5 flex lg:mt-0 lg:ml-4">
                        <a href="/admin/news/add" class="sm:ml-3">
                            <button type="button"
                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Thêm mới
                            </button>
                        </a>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="px-4 py-6 sm:px-0">
                    <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
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
                        <a href="/admin/news/${post.id}/edit">Edit</a>
                        </td>
                        <td>
                        <button data-id="${post.id}" class="btn">Delete</button>
                        </td>
                    </tr>
            `).join("")}
                    </tbody>
                  </table>
                    
                    
                    </div>
                    </div>
                </div>
            </main>
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
export default AdminNewsPage;