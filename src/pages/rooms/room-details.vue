<template>

      <div class="flex flex-row w-full h-screen ">
          <div class="user-stories w-1/3 bg-slate-200 ">
          
                <div class="story flex my-5">
                    <button class=" bg-blue-500 px-3 h-7 mx-3 text-sm text-white font-bold"> Import / Export </button>
                    <button v-on:click="openModal" class=" bg-blue-500 px-3 h-7 mx-3 text-sm text-white font-bold"> Add story </button>
                    <!-- <button class=" bg-blue-500 px-3 h-7 mx-3 text-white font-bold">  </button> -->
                </div>

                <!-- User Story card -->
                <div class=" h-5/6 overflow-auto hidescroll ">
                    <div v-on:click="fetchMarks(story.id)" v-for="story in storiesInRoom" :key="story.id" class="story h-26 bg-white flex flex-col px-3 py-2 mx-2 my-1">
                    <div class="flex">
                        <div class="title text-left text-sm uppercase font-bold">{{story.title}}</div>
                        <div class="di flex-grow"></div>
                        <button 
                        class="  px-3 text-xs text-white font-bold"
                        :class="story.current_session ? 'bg-slate-300' : 'bg-blue-500' "
                        :disabled="story.current_session"
                        v-on:click="startSession(story.id)"
                        > Start session </button>
                    </div>
                    <div class="description text-left text-xs text-slate-500 line-clamp-2 mt-2">{{story.description}}</div>
                    <div class="flex mt-2">
                        <div class="text-xs mt-auto px-3 py-0.5  font-bold bg-red-300 text-red-900">{{"pendding"}}</div>
                        <div class="di flex-grow"></div>
                        <a class=" text-red-700 mx-2 hover:cursor-pointer text-xs ">Delete</a>
                        <a class=" text-blue-700 mx-2 hover:cursor-pointer text-xs ">Tasks</a>
                        <a class=" text-blue-700 mx-2 hover:cursor-pointer text-xs ">Details</a>
                    </div>
                </div>
            </div>

          </div>
          <div class=" flex-grow basis-2 ">

               <div class="story  flex flex-row-reverse my-5">
                    <button class=" bg-blue-500 px-3 h-7 mx-3 text-sm text-white font-bold"> Finalise </button>
                    <button class=" bg-blue-500 px-3 h-7 mx-3 text-sm text-white font-bold"> Show Marks </button>
                    <button class=" bg-blue-500 px-3 h-7 mx-3 text-sm text-white font-bold"> Refresh </button>
                    <button v-on:click="openInviteUserModal()" class=" bg-blue-500 px-3 h-7 mx-3 text-sm text-white font-bold"> Invite </button>
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
            <div class="evaluation ml-5">
                    <div v-on:click="openEvalModal(mark.id)" v-for="mark in currentMarks" :key="mark" class=" w-36 rounded-xl bg-white mx-3 my-5 flex flex-col p-3 shadow-xl">
                        <div v-if="mark.mark == undefined" class="mark font-bold text-6xl">#</div>
                        <!-- <div v-else class="mark font-bold text-6xl">{{mark.mark}}</div> -->
                        <div v-else class="mark font-bold text-6xl">{{mark.mark == 0 ? '#' : mark.mark}}</div>
                        <div class="mark font-bold text-sm text-left">Dev: {{mark.evaluator__username}}</div>
                        <div 
                        class="mark text-xs text-left font-bold "
                        :class=" mark.mark == 0 ? 'text-amber-500' : 'text-green-500'"
                        >
                        {{ mark.mark == 0 ? 'Waiting evaluation...' : mark.mark == undefined ? 'Locked' : 'Evaluated!'}}</div>
                    </div>
            </div>
            


          </div>
            <AddUSerStoryModal :open="getopen" @cancelModal="openModal" @storyAdded="fetch" :roomId="id" />
            <InviteUser :open="getInviteUser" @cancelModal="openInviteUserModal" @storyAdded="fetch" :room_id="id" />
            <EvaluateStory :open="getopeeval" :mark_id="getSelectedMarkId" @evaluated="fetchMarks(this.selected_story)" @cancelModal="openEvalModal" />
      </div>

</template>

<script>
import AddUSerStoryModal from './add_user_story.vue'
import EvaluateStory from './evaluate_story.vue'
import InviteUser from './invite_users.vue'
import { ExclamationIcon } from "@heroicons/vue/outline";

export default {

    props: ['id'],

    components: {
        AddUSerStoryModal,
        EvaluateStory,
        ExclamationIcon,
        InviteUser
    },
    data() {
        return {
            open: false,
            open_eval: false,
            open_invite_user: false,
            seleted_mark_id: undefined,
            selected_story: undefined,
        }
    },
    
    computed: {
        storiesInRoom(){
            return this.$store.state.rooms.storiesInRoom
        },
        currentMarks(){
            return this.$store.state.marks.current_marks
        },
        getInviteUser(){
            return this.open_invite_user
        },
        getopeeval(){
            return this.open_eval
        },
        getSelectedMarkId(){
            return this.seleted_mark_id;
        },
        getopen(){
            return this.open;
        }
    },
    mounted() {
        this.fetch();
        this.fetchMembers();
    },

    methods: {
        async fetch(){
            await this.$store.dispatch('fetchStoriesInRoom', this.id)
        },
        async fetchMembers(){
            await this.$store.dispatch('fetchMembersInRoom', this.id)
        },
        openEvalModal(id){
            this.seleted_mark_id = id
            this.open_eval = !this.open_eval
        },
        openModal(){
            this.open = !this.open
        },
        openInviteUserModal(){
            this.open_invite_user = !this.open_invite_user
        },
        async fetchMarks(id){
            this.selected_story = id
            await this.$store.dispatch('fetchCurrentMarks', id)
        },
        
        async startSession(id){
            this.selected_story = id
            await this.$store.dispatch('startSession', id)
            await this.fetch()
            await this.$store.dispatch('fetchCurrentMarks', id)

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
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.evaluation {
    display: flex;
    flex-wrap: wrap;
    align-content:flex-start;
    justify-content:flex-start;
}
</style>