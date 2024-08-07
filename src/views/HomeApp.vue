<template>
    <section class="container">
        <img src="@/assets/banner.png" class="img-fluid" alt="...">
        <div class=" div text-center text-3xl font-bold max-w-md">A few words about this blog platform, Ghost, and how
            this site was made</div>
        <hr>
        <div class="text-center text-3xl font-bold">All articles</div>
        <div class="row align-items-start max-w-3xl ">
            <div class="col-6 pt-5">
                <img src="@/assets/Rectangle12.png" class="img-thumbnail" alt="...">
                <div class="text-center max-w-64"><a href="http://" class="text-center ">Here are some things you should know regarding how we work </a> </div>
            </div>
            <div class="col-6 pt-5">
                <img src="@/assets/Rectangle13.png" class="img-thumbnail" alt="...">
                <div class="text-center max-w-64"><a href="http://" class="text-center ">Here are some things you should know regarding how we work </a> </div>
            </div>
            <div class="col-6 pt-5">
                <img src="@/assets/Rectangle14.png" class="img-thumbnail" alt="...">
                <div class="text-center max-w-64"><a href="http://" class="text-center ">Here are some things you should know regarding how we work </a> </div>
            </div>
            <div class="col-6 pt-5">
                <img src="@/assets/Rectangle12.png" class="img-thumbnail" alt="...">
                <div class="text-center max-w-64"><a href="http://" class="text-center ">Here are some things you should know regarding how we work </a> </div>
            </div>
            <div class="col-6 pt-5">
                <img src="@/assets/Rectangle13.png" class="img-thumbnail" alt="...">
                <div class="text-center max-w-64"><a href="http://" class="text-center ">Here are some things you should know regarding how we work </a> </div>
            </div>
            <div class="col-6 pt-5">
                <img src="@/assets/Rectangle14.png" class="img-thumbnail" alt="...">
                <div class="text-center max-w-64"><a href="http://" class="text-center ">Here are some things you should know regarding how we work </a> </div>
            </div>
        </div>
    </section>

</template>

<script>
export default {
    name: 'HomeApp'
}
</script>

<style scoped>
.container {
    max-width: 1000px;
    margin: 0 auto;
}

.img-fluid {
    margin: 30px auto;
}

hr {
    width: 50%;
    margin: 15px auto;
}

.div,.max-w-3xl {
    margin: 0 auto;
}
.col-6{
    text-align: -webkit-center;
}
.row{
    margin-bottom: 20px;
}
</style>