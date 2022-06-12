<template>

    <div class="flex flex-row w-full h-screen ">
        <div class="user-stories w-1/3 bg-slate-200 ">

            <div class="story flex my-5">
                <!-- exportUserStories -->
                <button @click="openModalExport" class=" bg-blue-500 px-3 h-7 mx-3 text-sm text-white font-bold">
                    Export </button>
                  <button @click="openModalImport" class=" bg-blue-500 px-3 h-7 mx-3 text-sm text-white font-bold">
                    Import </button>
                <button v-on:click="openModal" class=" bg-blue-500 px-3 h-7 mx-3 text-sm text-white font-bold"> Add
                    story </button>
                <!-- <button class=" bg-blue-500 px-3 h-7 mx-3 text-white font-bold">  </button> -->
            </div>
            <!-- <a id="exportLink" :href="`http://localhost:8000/static/${exportUrl}`" style="visibility: hidden"></a> -->


            <!-- User Story card -->
            <div class=" h-5/6 overflow-auto hidescroll ">
                <div v-on:click="fetchMarks(story.id); " v-for="story in storiesInRoom" :key="story.id"
                    class="story h-26 bg-white flex flex-col px-3 py-2 mx-2 my-1">

                    <div class="flex">
                        <div class="title text-left text-sm uppercase font-bold">{{ story.title }}</div>
                        <div class="di flex-grow"></div>
                        <button class="  px-3 text-xs text-white font-bold"
                            :class="story.current_session ? 'bg-slate-300' : 'bg-blue-500'"
                            :disabled="story.current_session" v-on:click="startSession(story.id)"> Start session
                        </button>
                    </div>
                    <div class="description text-left text-xs text-slate-500 line-clamp-2 mt-2">{{ story.description }}
                    </div>
                    <div class="flex mt-2">
                        <div class="text-xs mt-auto px-3 py-0.5  font-bold "
                            :class="story.completed ? 'bg-green-300 text-green-900' : story.evaluated ? 'bg-amber-300 text-amber-900' : 'bg-red-300 text-red-900'">
                            {{ story.completed ? "Completed" : story.evaluated ? "Evaluated" : "Pendding" }}
                        </div>
                        <div class="di flex-grow"></div>
                        <a @click="openDelete(story.id)" class=" text-red-700 mx-2 hover:cursor-pointer text-xs ">Delete</a>
                    </div>
                </div>
            </div>

        </div>

        <div class=" flex-grow basis-2 ">

            <div class="flex flex-col">
                <room-alert v-if="selected_story != undefined && getSelectedStoryStatus != 'pendding'"
                    :status="getSelectedStoryStatus" />
                <div class="story  flex flex-row-reverse my-5">
                    <button v-on:click="openFinailiseModal()"
                        class=" bg-blue-500 px-3 h-7 mx-3 text-sm text-white font-bold"> Finalise </button>
                    <button class=" bg-blue-500 px-3 h-7 mx-3 text-sm text-white font-bold"> Show Marks </button>
                    <button class=" bg-blue-500 px-3 h-7 mx-3 text-sm text-white font-bold"> Refresh </button>
                    <button v-on:click="openInviteUserModal()"
                        class=" bg-blue-500 px-3 h-7 mx-3 text-sm text-white font-bold"> Invite </button>
                </div>

            </div>


            <!-- {{currentMarks}} Somthing -->

            <!-- <div class="nostoryselected bg-white flex justify-center w-full h-full">
                   <div
                    class="m-auto flex-shrink-0 flex flex-col items-center justify-center w-full h-36 "
                  >
                    <ExclamationIcon
                      class="h-20 w-20 text-red-300"
                      aria-hidden="true"
                    />
                    
                  <div class="txt">User story not selected</div>
                  </div>
              </div> -->
            <div class="evaluation ml-5 mb-40">
                <div v-on:click="openEvalModal(mark.id)" v-for="mark in currentMarks" :key="mark"
                    class=" w-36 rounded-xl bg-white mx-3 my-5 flex flex-col p-3 shadow-xl">
                    <div v-if="mark.mark == undefined" class="mark font-bold text-6xl">#</div>
                    <!-- <div v-else class="mark font-bold text-6xl">{{mark.mark}}</div> -->
                    <div v-else class="mark font-bold text-6xl">{{ mark.mark == 0 ? '#' : mark.mark }}</div>
                    <div class="mark font-bold text-sm text-left">Dev: {{ mark.evaluator__username }}</div>
                    <div class="mark text-xs text-left font-bold "
                        :class="mark.mark == 0 ? 'text-amber-500' : 'text-green-500'">
                        {{ mark.mark == 0 ? 'Waiting evaluation...' : mark.mark == undefined ? 'Locked' : 'Evaluated!'
                        }}
                    </div>
                </div>

            </div>


            <div v-show="selected_story" class="ml-40 mr-40 mt-10 bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start justify-center ">

                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 class="text-lg leading-6 font-medium text-gray-900 text-center">
                            Add New Task
                        </h3>
                        <div class="mt-2 flex flex-col ">
                            <input type="text" v-model="taskTitle" class=" w-96 border-2 rounded-sm px-2 py-1 mt-2"
                                placeholder="Task title" />
                            <input type="text" v-model="taskDesc" class=" w-96 border-2 rounded-sm px-2 py-1 mt-2"
                                placeholder="Task Description" />
                        </div>
                    </div>
                </div>
                <div class="mt-10 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button type="button"
                        class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                        @click="addTask()">
                        Add Task
                    </button>
                    <button type="button"
                        class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        @click="$emit('cancelModal')" ref="cancelButtonRef">
                        Cancel
                    </button>

                </div>
                <div class="mt-10">
                    <div v-for="task in currentTasks" :key="task"
                        class=" rounded-lg bg-gray-100 m-2 mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 class="text-lg leading-6  font-medium text-gray-900 text-center">
                            {{ task.title }}
                            <span class="text-lg pt-2 pb-2  text-gray-500 text-center">
                                - {{ task.description }}
                            </span>
                        </h3>


                    </div>
                </div>
            </div>
        </div>
        <AddUSerStoryModal :open="getopen" @cancelModal="openModal" @storyAdded="fetch" :roomId="id" />
        <DeleteUserStory :open="getopendelete" @cancelModal="openDelete" @storyDeleted="fetchDeleteStory" :storyId="storyId" />
        <ImportFileModal :open="getopenimport" @cancelModal="openModalImport" @fileImported="fetch" :roomId="id" />
        <ExportFileModal :open="getopenexport" @cancelModal="openModalExport" :roomId="id" />
        <InviteUser :open="getInviteUser" @cancelModal="openInviteUserModal" @storyAdded="fetch" :room_id="id" />
        <EvaluateStory :open="getopeeval" :mark_id="getSelectedMarkId" @evaluated="fetchMarks(this.selected_story)"
            @cancelModal="openEvalModal" />
        <FinaliseStory :open="open_finalise_story" :story_id="getSelectedStoryId"
            @evaluated="fetchMarks(this.selected_story)" @cancelModal="openFinailiseModal" />
    </div>

</template>

<script>
import AddUSerStoryModal from './add_user_story.vue'
import DeleteUserStory from './delete_user_story.vue'
import ImportFileModal from './import_file.vue'
import ExportFileModal from './export_file.vue'
import EvaluateStory from './evaluate_story.vue'
import InviteUser from './invite_users.vue'
import FinaliseStory from './finalise_story.vue'
import RoomAlert from './room_alert.vue'
import { ExclamationIcon } from "@heroicons/vue/outline";

export default {

    props: ['id'],

    components: {
        AddUSerStoryModal,
        DeleteUserStory,
        ImportFileModal,
        ExportFileModal,
        EvaluateStory,
        FinaliseStory,
        InviteUser,
        RoomAlert,
        ExclamationIcon,
    },
    data() {
        return {
            open: false,
            open_eval: false,
            open_invite_user: false,
            seleted_mark_id: undefined,
            selected_story: undefined,
            open_finalise_story: false,
            taskTitle: "",
            taskDesc: "",
            open_import: false,
            open_export: false,
            open_delete: false,
            storyId: -1,
        }
    },

    computed: {
        storiesInRoom() {
            return this.$store.state.rooms.storiesInRoom
        },
        currentMarks() {
            return this.$store.state.marks.current_marks
        },
        currentTasks() {
            return this.$store.state.tasks.current_tasks
        },
        getSelectedStoryStatus() {
            var stories = this.$store.state.rooms.storiesInRoom
            var selected = stories.find(story => story.id == this.selected_story)
            if (selected.completed) {
                return 'completed'
            } else if (selected.evaluated) {
                return 'evaluated'
            } else {
                return 'pendding'
            }
        },
        getSelectedStoryId() {
            return this.selected_story
        },
        getInviteUser() {
            return this.open_invite_user
        },
        getOpenFinaliseStory() {
            return this.open_finalise_story
        },
        getopeeval() {
            return this.open_eval
        },
        getSelectedMarkId() {
            return this.seleted_mark_id;
        },
        getopendelete(){
            return this.open_delete;
        },
        getopen() {
            return this.open;
        },
        getopenimport(){
            return this.open_import;
        },
        getopenexport(){
            return this.open_export;
        },
        // exportUrl() {
        //     return this.$store.state.stories.exportUrl
        // }

    },
    mounted() {
        this.fetch();
        this.fetchMembers();
    },

    methods: {
        async fetch() {
            await this.$store.dispatch('fetchStoriesInRoom', this.id)
        },
        async fetchDeleteStory(){
            this.selected_story = undefined
            this.open_delete = false;
            this.fetch();
        },
        async fetchMembers() {
            await this.$store.dispatch('fetchMembersInRoom', this.id)
        },
        async fetchTasksInUserStory() {
            await this.$store.dispatch('fetchCurrentTasks', this.selected_story)
        },
        // async exportUserStories() {
        //     await this.$store.dispatch('exportUserStoriesSingleRoom', { delimiter: '!', id: this.id })
        //     document.getElementById("exportLink").click();
        // },
        async importUserStories(){
            await this.$store.dispatch('importUserStoriesSingleRoom', { delimiter: '!', id: this.id })
        },
        openEvalModal(id) {
            this.seleted_mark_id = id
            this.open_eval = !this.open_eval
        },
        openDelete(id){
            this.storyId = id
            this.open_delete = !this.open_delete;
        },
        openModal() {
            this.open = !this.open
        },
        openModalImport(){
            this.open_import = !this.open_import
        },
        openModalExport(){
            this.open_export = !this.open_export
        },
        openNewTaskModal() {
            this.openNewTask = !this.openNewTask
        },
        openFinailiseModal() {
            this.open_finalise_story = !this.open_finalise_story
        },
        openInviteUserModal() {
            this.open_invite_user = !this.open_invite_user
        },
        async fetchMarks(id) {
            this.selected_story = id
            await this.$store.dispatch('fetchCurrentMarks', id)
            this.fetchTasksInUserStory()
            await this.fetch()
        },

        async startSession(id) {
            this.selected_story = id
            await this.$store.dispatch('startSession', id)
            await this.fetch()

        },

        async addTask() {
            console.log(this.selected_story)
            try {
                await this.$store.dispatch('AddTask', {
                    title: this.taskTitle,
                    description: this.taskDesc,
                    user_story: this.selected_story
                })
                this.taskTitle = ""
                this.taskDesc = ""
                this.fetchTasksInUserStory()
            } catch {

            }
        }
    },

}
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.hidescroll::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hidescroll {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}

.evaluation {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
}
</style>