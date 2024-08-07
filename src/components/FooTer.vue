<template>
    <div class="footer bg-black">
        <div class="max-w-4xl">
            <img class="img-fluid " src="@/assets/NORDIC ROSE (1).png" alt="">
            <p class="text-center title_footer">Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit. Duis eu velit tempus 
                 erat egestas efficitur. In hac habitasse platea dictumst.
                  Fusce a nunc eget ligula suscipit finibus. </p>
        </div>
    </div>
  </template>
  
  <script>
  // import { RouterLink } from 'vue-router';
  export default {
    name: 'FooTer',
  }
  </script>
  
  <style scoped>
.max-w-4xl,.img-fluid{
    margin: 0 auto;
}
.img-fluid{
    padding-top: 50px;
}
.title_footer{
    width: 60%;
    margin: 0 auto;
    padding-bottom: 50px;
}
</style>
  