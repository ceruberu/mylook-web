<template>
  <div class="uploadModal">
    <div class="formHeader">Upload your photo</div>
    <form class="uploadForm" @submit.prevent="submitPhoto">
      <input ref="myPhoto" type="file" id="getPhoto" accept="image/*" @change="handlePhoto">
      <label v-if="!this.file" class="dropzone" for="getPhoto">
        Drop Here or Click
      </label>
      <div class="imageContainer" v-if="this.file" >
        <div class="imageWrapper">
          <img :src="file" class="previewImage" v-bind:style="{maxWidth: `calc((100vh - 175px) * ${this.aspectRatio})` }" />
            <div class="removeButton" @click="handleRemove"> 
              X
              <div class="removeTooltip"> Remove </div>
          </div> 
        </div>
      
      </div>
      <button v-if="this.file" id="submitButton" class="submitButton" type="submit" />
    </form>
  </div>
</template>

<script>
const _URL = window.URL || window.webkitURL;

export default {
  data () {
    return {
      file: '',
      aspectRatio: null,
    }
  },
  methods: {
    handlePhoto(event){
      const newFile = event.target.files[0];
      const fileURL = _URL.createObjectURL(newFile);
      this.file = fileURL;

      if(this.file){
        const checkImage = new Image();
        checkImage.onload = function(){
          console.log(this.width);
          console.log(this.height);
          console.log(this.aspectRatio);
          this.aspectRatio = this.width / this.height
          console.log(this.aspectRatio);
        };
        checkImage.src = fileURL;
      }

    },
    handleRemove() {
      this.file = '';
    },
    submitPhoto() {

    }
  }

}

</script>


<style>
.uploadModal {
  max-width: 700px;
  padding: 10px;
}

#getPhoto {
  display: none;
}

.formHeader {
  display: flex;
  flex: 0 0 60px;
  justify-content: center;
  align-items: center;
}

.uploadForm {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
    overflow: auto; /*<< added */
}

.dropzone {
  display: flex;
  height: 100%;
  border: 1px solid #ddd;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  margin: 20%;
  border: 1px dashed black;
}

.imageContainer {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%; 
  height: calc(100% - 40px);
  padding: 10px;
}

.imageWrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.previewImage {
  max-width: 100%;
  max-height: 100%;
}

.imageWrapper:hover .removeButton {
  display: flex;
  justify-content: center;
  align-items: center;
}

.removeButton:hover {
  display: flex;
  justify-content: center;
  align-items: center;
}

.submitButton {
  flex: 0 0 40px;
}

.removeButton {
  display: none;
  flex-direction: row-reverse;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  color: white;
  background-color: rgba(0,0,0,.5);
  cursor: pointer;
}

.removeButton:hover .removeTooltip {
  display: flex;
  justify-content: center;
  align-items: center;
}

.removeTooltip {
  display: none;
  position: absolute;
  border-bottom: 1px dotted black;
  right: 105%;
  background-color: rgba(0,0,0,.5);
  padding: 6px;
  border-radius: 6px;
}

</style>