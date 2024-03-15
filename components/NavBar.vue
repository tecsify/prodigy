<template>
    <div>
        <div class="bg-gray-100">
            <nav class="
            container
            px-6
            py-8
            mx-auto
            md:flex md:justify-between md:items-center
          ">
                <div class="flex items-center justify-between">
                    <router-link to="/" class="
                text-xl
                font-bold
                text-gray-800
                md:text-2xl
                hover:text-blue-400
              " style="
              color: #030399 !important;
              font-weight: 700;
              font-size: 2rem;
              ">Tecsify
                    </router-link>
                    <!-- Mobile menu button -->
                    <div @click="showMenu = !showMenu" class="flex md:hidden">
                        <button type="button" class="
                  text-gray-800
                  hover:text-gray-400
                  focus:outline-none focus:text-gray-400
                ">
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                <path fill-rule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>


                <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                <ul :class="showMenu ? 'flex' : 'hidden'" class="
              flex-col
              mt-8
              space-y-4
              md:flex
              md:space-y-0
              md:flex-row
              md:items-center
              md:space-x-10
              md:mt-0
            ">
            <a href="/">
                    <li class="text-sm active">
                        Prodigy: Inicio
                    </li></a>
                    <a class="nav-item">
                        <li class="text-sm font-medium text-gray-600 hover:text-indigo-900 navitem">
                                                    Inicio
                    </li></a>
                    <a class="nav-item" href="https://tecsify.com/info/">
                        <li class="text-sm font-medium text-gray-600 hover:text-indigo-900 navitem">
                                                    Sobre Nosotros
                    </li></a>
                    <a class="nav-item" href="https://tecsify.com/blog/">
                        <li class="text-sm font-medium text-gray-600 hover:text-indigo-900 navitem">
                                                    Blog
                    </li></a>
                    <a class="nav-item" href="https://tecsify.com/blog/portal">
                        <li class="text-sm font-medium text-gray-600 hover:text-indigo-900 navitem">
                                                    Portal Tecsify
                    </li></a>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showMenu: false,
        };
    },
};
</script>

<style>
.active {
    color: #030399 !important;
    font-weight: 500;
    font-size: 1rem;
}

.navitem {
    font-weight: 500;
    font-size: 1rem;
}
</style>