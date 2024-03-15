<template>
  <div class="crop-image-dialog">
    <VueCropper v-if="showCropper" ref="cropper" class="image-container" :src="chosenImage" :guides="true"
      :background="false" :view-mode="3" drag-mode="move" :auto-crop-area="0.8"></VueCropper>

  </div>
</template>

<script>
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';

export default {
  name: "CvCropper",
  components: {
    VueCropper,
  },
  props: {
    chosenImage: {
      default: null,
    },
  },
  data() {
    return {
      showCropper: false,
      imageFileType: null,
    }
  },
  methods: {
    async initCropper(imageFileType) {
      this.showCropper = true;
      this.imageFileType = imageFileType;
      await new Promise(resolve => setTimeout(resolve, 50));
      this.$refs.cropper.replace(this.chosenImage);
      this.$refs.cropper.setAspectRatio(1);
      this.esconderFotoCropper("hide")
    },


    async resetCropper() {
      this.showCropper = false;
    },

    async cropChosenImage() {
      const croppedImageData = this.$refs.cropper.getCroppedCanvas().toDataURL(this.imageFileType);
      this.$emit('onCrop', croppedImageData);
      this.resetCropper();
      this.esconderFotoCropper("show");
    },
    simularClicEnCrop() {
      // Find and click crop button
      this.cropChosenImage();
    },

    async esconderFotoCropper(tipo) {
      let photoElement = document.getElementById('v-avatar');
      let cropbutton = document.getElementById('cropbutton');

      // Verificar si el elemento existe
      if (photoElement && cropbutton) {
        if (tipo == "hide") {
          photoElement.style.display = 'none';
          cropbutton.style.display = 'block';

        } else {
          photoElement.style.display = 'block';
          cropbutton.style.display = 'none';


        }
      }
    },


  },
}
</script>

<style scoped>
.crop-image-dialog {
  position: relative;
  max-width: 25rem;
  /* Ancho máximo */
  max-height: 25rem;
  /* Alto máximo */
  overflow: auto;
  /* Agrega scroll si la imagen es más grande que el contenedor */
}

.image-container {
  width: 100%;
  /* Ocupa todo el ancho del contenedor */
  height: auto;
  /* Ajusta la altura automáticamente para mantener la relación de aspecto */
}

@media only screen and (max-width: 768px) {
  .crop-image-dialog {
    max-width: calc(70vw - 20px);
    /* Ajusta el ancho máximo del modal */
    max-height: calc(70vh - 20px);
    /* Ajusta el alto máximo del modal */
  }
}
</style>
