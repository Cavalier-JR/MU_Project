<template>
    <div class="headers">
        <div class="titlebg">
            <img src="../../assets/login/top.png" alt=""/>
        </div>
        <div class="title">
            <img src="../../assets/login/party.png" alt=""/>
            <img src="../../assets/login/title.png" alt=""/>
        </div>
    </div>
</template>

<script>
export default {
    name:'Header',
    data(){
        return{

        }
    }
}
</script>

<style>
.titlebg{
    position: absolute;
    top: 0rem;
    left: 4rem;
    width: 247.6rem;
    height: 13.2rem;
    text-align: center;
    z-index: 1;
}
.title{
    position: absolute;
    top: 0.5rem;
    left: -2rem;
    width: 254.6rem;
    text-align: center;
    z-index: 2;
}
</style>