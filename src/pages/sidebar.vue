<template>
    <div class="min-h-screen flex">
        <div class="py-12 px-10 w-1/5">
            <div class="flex space-2 items-center border-b-2 pb-4">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                        <circle cx="29" cy="29" r="26.5" stroke="#0B6CFF" stroke-opacity="0.72" stroke-width="5" />
                        <path
                            d="M22.6435 32V13.0909H30.1037C31.5379 13.0909 32.7597 13.3648 33.7692 13.9126C34.7786 14.4543 35.5481 15.2083 36.0774 16.1747C36.6129 17.1349 36.8807 18.2429 36.8807 19.4986C36.8807 20.7543 36.6098 21.8622 36.0682 22.8224C35.5265 23.7827 34.7417 24.5305 33.7138 25.0661C32.692 25.6016 31.4548 25.8693 30.0021 25.8693H25.2472V22.6655H29.3558C30.1252 22.6655 30.7592 22.5331 31.2578 22.2685C31.7625 21.9976 32.138 21.6252 32.3842 21.1513C32.6366 20.6712 32.7628 20.1203 32.7628 19.4986C32.7628 18.8707 32.6366 18.3229 32.3842 17.8551C32.138 17.3812 31.7625 17.0149 31.2578 16.7564C30.7531 16.4917 30.1129 16.3594 29.3374 16.3594H26.6413V32H22.6435Z"
                            fill="#F27604" />
                        <path
                            d="M22.6435 44V25.0909H30.1037C31.5379 25.0909 32.7597 25.3648 33.7692 25.9126C34.7786 26.4543 35.5481 27.2083 36.0774 28.1747C36.6129 29.1349 36.8807 30.2429 36.8807 31.4986C36.8807 32.7543 36.6098 33.8622 36.0682 34.8224C35.5265 35.7827 34.7417 36.5305 33.7138 37.0661C32.692 37.6016 31.4548 37.8693 30.0021 37.8693H25.2472V34.6655H29.3558C30.1252 34.6655 30.7592 34.5331 31.2578 34.2685C31.7625 33.9976 32.138 33.6252 32.3842 33.1513C32.6366 32.6712 32.7628 32.1203 32.7628 31.4986C32.7628 30.8707 32.6366 30.3229 32.3842 29.8551C32.138 29.3812 31.7625 29.0149 31.2578 28.7564C30.7531 28.4917 30.1129 28.3594 29.3374 28.3594H26.6413V44H22.6435Z"
                            fill="#0B6CFF" fill-opacity="0.72" />
                    </svg>
                </div>
                <div class="ml-3">
                    <h1 class="text-3xl text-left font-bold text-indigo-600">App</h1>
                    <p class="text-center text-sm text-indigo-600 mt-1 font-serif">
                        Planning poker
                    </p>
                </div>
            </div>

            <div class="mt-8">
                <ul class="space-y-10">
                    <li>
                        <router-link to="/"
                            class="flex items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 mr-4 text-gray-400 hover:text-indigo-600 transition duration-200"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                            Dashboard
                        </router-link>
                    </li>
                    <li>
                        <router-link to="rooms"
                            class="flex items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 mr-4 text-gray-400 hover:text-indigo-600 transition duration-200"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>

                            Rooms
                        </router-link>
                    </li>
                    <li>
                        <router-link to="tasks"
                            class="flex items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200"
                            hover:text-indigo-600>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 mr-4 text-gray-400 hover:text-indigo-600 transition duration-200"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            Tasks
                        </router-link>
                    </li>

                    <li>
                        <router-link to="users" href="/users"
                            class="flex items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200"
                            hover:text-indigo-600>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 mr-4 text-gray-400 hover:text-indigo-600 transition duration-200"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Users
                        </router-link>
                    </li>

                    <li>
                        <a href="#"
                            class="flex items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200"
                            hover:text-indigo-600>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 mr-4 text-gray-400 hover:text-indigo-600 transition duration-200"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Settings</a>
                    </li>
                </ul>
            </div>
            <div class="flex mt-20 space-x-4 items-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-gray-400 hover:text-indigo-600 transition duration-200" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                </div>
                <a href="#"
                    class="block font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">Logout</a>
            </div>
        </div>
        <div class="bg-indigo-50 flex-grow py-12 px-10">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
