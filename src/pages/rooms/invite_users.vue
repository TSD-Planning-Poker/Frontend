<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div
          class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <!-- This element is to trick the browser into centering the modal contents. -->
          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle w-1/3"
            >
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="">
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle
                      as="h3"
                      class="text-lg leading-6 font-medium text-gray-900"
                    >
                      Invite Users
                    </DialogTitle>
                    <div class="mt-2 flex flex-col">
                       <!-- ================================================================================================================================ -->
                      
                      <Listbox as="div" v-model="selected" class="mt-5">
                        <ListboxLabel
                          class="block text-sm font-medium text-gray-700"
                        >
                          Send to
                        </ListboxLabel>
                        <div class="mt-1 mr-12 relative">
                          <ListboxButton
                            class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <span class="flex items-center">
                              <span class="ml-3 block truncate">{{
                                selected.username
                              }}</span>
                            </span>
                            <span
                              class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
                            >
                              <SelectorIcon
                                class="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            </span>
                          </ListboxButton>

                          <transition
                            leave-active-class="transition ease-in duration-100"
                            leave-from-class="opacity-100"
                            leave-to-class="opacity-0"
                          >
                            <ListboxOptions
                              class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                            >
                              <div class="">
                                <ListboxOption
                                as="template"
                                v-for="person in allUsers"
                                :key="person.id"
                                :value="person"
                                v-slot="{ active, selected }"
                              >
                                <li
                                  :class="[
                                    active
                                      ? 'text-white bg-indigo-600'
                                      : 'text-gray-900',
                                    'cursor-default select-none relative py-2 pl-3 pr-9',
                                  ]"
                                >
                                  <div class="flex items-center">
                                    <span
                                      :class="[
                                        selected
                                          ? 'font-semibold'
                                          : 'font-normal',
                                        'ml-3 block truncate',
                                      ]"
                                    >
                                      {{ person.username }}
                                    </span>
                                  </div>

                                  <span
                                    v-if="selected"
                                    :class="[
                                      active ? 'text-white' : 'text-indigo-600',
                                      'absolute inset-y-0 right-0 flex items-center pr-4',
                                    ]"
                                  >
                                    <CheckIcon
                                      class="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </li>
                              </ListboxOption>
                              </div>
                            </ListboxOptions>
                          </transition>
                        </div>
                      </Listbox>
                    <!-- =========================================================================================== -->

                      <!-- =========================================================================================== -->

                      <!-- This is an example component -->
                      <div class=" w-full mt-4">
                        <div
                          class="p-4 max-w-md bg-white rounded-lg border shadow-md "
                        >
                          <div class="flex justify-between items-center mb-4">
                            <h3
                              class="text-xl font-bold leading-none text-gray-900"
                            >
                              Room Members
                            </h3>
                            <!-- <a
                              href="#"
                              class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >
                              View all
                            </a> -->
                          </div>
                          <div class="flow-root">
                            <ul
                              role="list"
                              class="divide-y divide-gray-200 dark:divide-gray-700"
                            >
                              <li v-for="member in members" :key="member" class="pt-3 pb-0 sm:pt-4">
                                <div class="flex items-center space-x-4">
                                  <div class="flex-shrink-0">
                                    <img
                                      class="w-8 h-8 rounded-full"
                                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                      alt="Thomas image"
                                    />
                                  </div>
                                  <div class="flex-1 min-w-0">
                                    <p
                                      class="text-sm font-medium text-gray-900 truncate"
                                    >
                                      {{member.username}}
                                    </p>
                                    <p
                                      class="text-sm text-gray-500 truncate dark:text-gray-400"
                                    >
                                      {{member.email ? member.email : "No email"}}
                                    </p>
                                  </div>
                                  <div
                                    class="inline-flex items-center text-xs font-semibold text-gray-900"
                                  >
                                    {{member.is_superuser ? "Admin" : "Developer"}}
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>

                      </div>

                     
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
              >
                <button
                  type="button"
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="InviteUser()"
                >
                  Invite
                </button>
                <button
                  type="button"
                  class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="$emit('cancelModal')"
                  ref="cancelButtonRef"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";

import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

export default {
  components: {
    Dialog,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    SelectorIcon,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  },
  
  created() {
    this.$store.dispatch('allUsers')
  },

  computed: {
    allUsers(){
      return this.$store.state.users.all_users
    },
    
    members() {
      return this.$store.state.rooms.membersInRoom;
    },
  },
  props: ["open", "room_id"],
  data() {
    return {
      mark: 0,
      
      selected: {
        id: 0,
        username: "No User",
        },
    };
  },

  methods: {
    sendTrigger() {
      this.$emit("onCancel");
    },
    async InviteUser(){
      
      await this.$store.dispatch("inviteUser", {
        to_user: this.selected.id,
        room: this.room_id,
      });
    },

    async updateMark() {
      await this.$store.dispatch("updateMark", {
        id: this.mark_id,
        mark: this.mark,
      });
      this.$emit("evaluated");
    },
  },
};
</script>

<style></style>
