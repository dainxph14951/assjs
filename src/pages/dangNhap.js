const DN = {
    render() {
        return /* html */`
            <div class="max-w-5xl mx-auto">
                <h1>Trang Đăng Nhập</h1>

                <form>
                <label class="block">
                  <span class="block text-sm font-medium text-gray-700">Username</span>
                  <!-- Using form state modifers, the classes can be identical for every input -->
                  <input type="text" value="tbone" disabled class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                  "/>
                </label>
                <!-- ... -->
              </form>
            </div>
            
        `;
    },
};
export default DN;