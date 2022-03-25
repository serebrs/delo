<template>
  <header class="w-full mt-1 mb-4 h-16 z-40 flex items-center justify-between">
    <div class="flex mx-6">
      <div class="block lg:hidden mr-6">
        <button class="p-2 rounded-full bg-white shadow text-gray-500 text-md">
          <svg
            width="20"
            height="20"
            class="text-gray-400"
            fill="currentColor"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"
            />
          </svg>
        </button>
      </div>

      <div>
        <h1 class="text-gray-600 text-2xl font-semibold">{{ title }}</h1>
      </div>
    </div>

    <div class="mx-4 flex items-center justify-end space-x-4">
      <button
        class="flex p-2 items-center rounded-full text-gray-400 hover:text-green-700 bg-white shadow text-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <span class="w-1 h-8 rounded-lg bg-gray-200"></span>

      <!-- Профиль -->
      <router-link to="/login">
        <a href="#">
          <img
            alt="Профиль"
            src="https://www.tailwind-kit.com/images/person/1.jpg"
            class="object-cover rounded-full h-10 w-10"
          />
        </a>
      </router-link>
      <!-- Dropdown menu -->
      <div class="relative">
        <!-- Кнопка с меню-->
        <button class="flex items-center text-gray-500 text-sm">
          Админ
          <svg
            width="20"
            height="20"
            class="ml-2 text-gray-400"
            fill="currentColor"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"
            />
          </svg>
        </button>

        <!-- Выпадающее меню -->
        <div
          class="z-50 origin-top-right absolute right-0 py-1 mt-2 w-32 rounded-md shadow-md bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            <div class="flex flex-row justify-start items-center">
              <div class="flex-none w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="grow">Профиль</div>
            </div>
          </a>

          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            <div class="flex flex-row justify-start items-center">
              <div class="flex-none w-6 justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
              </div>
              <div class="grow">Выйти</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>