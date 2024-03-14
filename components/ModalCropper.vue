<template>
    <div>


        <div v-if="showModalCropper"
            class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
            <div class="relative w-auto my-6 mx-auto max-w-3xl">
                <!--content-->
                <div
                    class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <!--header-->
                    <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h5 class="text-2xl font-semibold">
                            {{ titulo }}
                        </h5>
                        <button
                            class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            v-on:click="toggleModalCropper()">
                            <span
                                class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                            </span>
                        </button>
                    </div>
                    <!--body-->
                    <div class="relative p-6 flex-auto">

                        <div>
                            <div class="mt-5" id="v-avatar" style="margin-top: 1rem;">
                                <img style="width:100% ;max-height:15rem;" :src="avatarImage" />
                            </div>
                        </div>

                        <VueCropper ref="VueCropper" :chosenImage="chosenImage"
                            @onReset="$refs.filePickerField.value = null" @onCrop="(croppedImage) => {
            avatarImage = croppedImage, updatePhoto(croppedImage);
        }" />
                    </div>
                    <!--footer-->
                    <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                            class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button" v-on:click="toggleModalCropper()">
                            Close
                        </button>
                        <button
                            class="text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button" id="cropbutton" @click.prevent="cropImageButton">
                            Crop
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showModalCropper" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
</template>



<script>
import VueCropper from './CvCropper.vue'; // Ajusta la ruta según la ubicación de tu componente

export default {
    components: {
        VueCropper,
    },
    data() {
        return {
            showModalCropper: false,
            chosenImage: null,
            avatarImage: null,
        }
    },
    methods: {
        toggleModalCropper: function () {

            this.showModalCropper = !this.showModalCropper;
        },
        cropImageButton() {
            // Emit event to inform CvCropper to crop image
            this.$refs.VueCropper.simularClicEnCrop();
        },

        async launchCropper(file) {
            this.chosenImage = await this.toBase64(file);
            this.$refs.VueCropper.initCropper(file.type);
        },

        async getPh() {
            return this.chosenImage;
        },

        async toBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
            });
        },

        updatePhoto(croppedImagex) {
            this.$emit('update-avatar-image', croppedImagex);
        },
        sendImageToParent() {
            return this.avatarImage;
        },
    },

    props: {
        titulo: String,
    }
}



</script>

<style></style>