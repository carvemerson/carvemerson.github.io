<script setup>
</script>

<template>
    <header class="my-2 border-bottom">
        <div class="container pt-2 pb-4">
            <div class="row justify-content-center">
                <div class="col-12 d-flex justify-content-center align-items-center">
                    <span class="head-char"> E </span>
                    <span class="fs-4 ml">Emerson Carvalho</span>
                </div>
            </div>
        </div>
    </header>

    <div class="container mt-5">
        <div class="row">
            <div class="col-12 col-sm-6 text-center text-sm-end">
                <img src="/images/person.png" class="img-fluid img-rounded">
            </div>

            <div class="col-12 mt-3 col-sm-6 mt-sm-0">
                <div class="container">
                    <h3> About me </h3>
                    <p>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. sed euismod, diam quis
                        tincidunt aliquam, quam libero tincidunt mauris, quis lacinia nisl nunc eu
                        sapien. nulla facilisi. donec euismod, diam quis tincidunt aliquam, quam libero
                        tincidunt mauris, quis lacinia nisl nunc eu sapien. nulla facilisi. donec
                        euismod, diam quis tincidunt aliquam, quam libero tincidunt mauris, quis lacinia
                        nisl nunc eu sapien. nulla facilisi. donec euismod, diam quis tincidunt aliquam,
                        quam libero tincidunt mauris, quis lacinia nisl nunc eu sapien. nulla facilisi.
                        donec euismod, diam quis tincidunt aliquam, quam libero tincidunt mauris, quis.
                    </p>
                </div>
            </div>
        </div>
    </div>


    <div class="container mt-5">
        <div class="row">
            <div class="col-12 col-sm-6 mt-5 mt-sm-0 d-flex gap-2">
                <i class="bi bi-envelope skill-icon"></i>
                <div>
                    <div> <strong>Email</strong></div>
                    <div> carvemerson@gmail.com </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.head-char {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #000;
    color: #fff;
    font-size: 25px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
}

.img-rounded {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
}

.skill-icon {
    font-size: 30px;
}
</style>
