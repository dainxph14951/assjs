const DK = {
    render() {
        return /* html */`
            <div class="max-w-5xl mx-auto">
                <h1>TRANG ĐĂNG KÝ</h1>
                <div>
                <div class="py-4">
                <img src="https://caodang.fpt.edu.vn/wp-content/uploads/logo-3.png" class="mx-auto" />
               </div>
            <div class="mt-10 sm:mt-0">
                <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                    <div class="shadow overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                            <label for="first-name" class="block text-sm font-medium text-gray-700">Tên</label>
                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="last-name" class="block text-sm font-medium text-gray-700">Họ Tên Đệm</label>
                            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>

                        <div class="col-span-6 sm:col-span-4">
                            <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                            <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="gioiTinh" class="block text-sm font-medium text-gray-700">Giới Tính</label>
                            <select id="gioiTinh" name="gioiTinh" autocomplete="gioiTinh" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option>Giới tính của bạn ?</option>
                            <option>Nam</option>
                            <option>Nữ</option>
                            <option>Khách</option>
                            </select>
                        </div>

                        <div class="col-span-6">
                            <label for="street-address" class="block text-sm font-medium text-gray-700">Địa Chỉ</label>
                            <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>
                        </div>
                        
                        <div class="col-span-6 sm:col-span-4">
                            <label for="email-address" class="block text-sm font-medium text-gray-700">Tên Tài Khoản</label>
                            <input type="text" name="acc" id="acc" autocomplete="acc" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>
                        <div class="col-span-6 sm:col-span-4">
                        <label for="email-address" class="block text-sm font-medium text-gray-700">Mật Khẩu</label>
                        <input type="password" name="pass" id="pass" autocomplete="pass" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                         </div>
                         <div class="col-span-6 sm:col-span-4">
                         <label for="email-address" class="block text-sm font-medium text-gray-700">Xác Nhận Lại Mật Khẩu</label>
                         <input type="password" name="passac" id="passac" autocomplete="passac" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                          </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Đăng Ký
                        </button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>

        `;
    },
};
export default DK;