<template>
  <div
    class="bg-gray-100 dark:bg-gray-800 h-screen overflow-y-hidden overflow-x-auto relative flex items-start justify-start flex-nowrap"
  >
    <!-- Основной блок слева с навигационным меню -->
    <div class="flex-none h-screen hidden lg:block lg:w-28 shadow-lg bg-gray-700 shadow-gray-500">
      <div class="flex items-center justify-center pt-8">
        <span class="relative">
          <span
            class="block absolute -inset-1 -skew-y-3 bg-sky-700 shadow-md shadow-gray-700"
            aria-hidden="true"
          ></span>
          <span class="relative text-white font-semibold font-mono text-xl px-1">Дело</span>
        </span>
      </div>

      <div class="bg-gray-600 mt-8 w-8 h-[0.1rem] mx-auto"></div>

      <nav class="mt-7">
        <router-link to="/documents">
          <a
            class="text-gray-300 flex flex-col rounded-md items-center justify-center p-2 m-3 transition-colors duration-200 bg-gray-600"
            href="#"
          >
            <span class="text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <span class="mx-2 text-xs font-normal">Документы</span>
          </a>
        </router-link>

        <router-link to="/documents">
          <a
            class="text-gray-400 flex flex-col rounded-md items-center p-2 m-3 transition-colors duration-200 justify-center hover:text-gray-300 hover:bg-gray-600"
            href="#"
          >
            <span class="text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fill-rule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <span class="mx-2 text-xs font-normal">Задачи</span>
          </a>
        </router-link>

        <a
          class="text-gray-400 flex flex-col rounded-md items-center p-2 m-3 transition-colors duration-200 justify-center hover:text-gray-300 hover:bg-gray-600"
          href="#"
        >
          <span class="text-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <span class="mx-4 text-xs font-normal">Статистика</span>
        </a>
      </nav>
    </div>

    <!-- Основной блок справа с заголовком и основным контентом -->
    <div class="flex-grow shrink-0 w-[58rem]">
      <header class="w-full mt-1 h-16 z-40 flex items-center justify-between">
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
            <h1 class="text-gray-600 text-2xl font-semibold">Документы</h1>
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
              class="origin-top-right absolute right-0 py-1 mt-2 w-32 rounded-md shadow-md bg-white ring-1 ring-black ring-opacity-5"
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

      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
export default {

}
</script>