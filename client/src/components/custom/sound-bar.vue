<template>
    <div id="bars">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
</template>




<style>
#bars {
    height: 7px;
    position: relative;
    transform: translateY(50%);
    transform: translateX(-3px);


    /* left: 50%; */
    /* margin: -30px 0 0 -20px; */
    /* position: absolute; */

}

.bar {
    background-color: #1ed75f;
    bottom: 1px;
    height: 2px;
    position: absolute;

    width: 2.5px;
    animation: sound 0ms -800ms linear infinite alternate-reverse;
}

@keyframes sound {
    0% {
        height: 3px;
    }



    100% {
        height: 17px;
    }
}

.bar:nth-child(1) {
    left: 1px;
    animation-duration: 364ms;
}

.bar:nth-child(2) {
    left: 5px;
    animation-duration: 443ms;
}

.bar:nth-child(3) {
    left: 9px;
    animation-duration: 455ms;
}

.bar:nth-child(4) {
    left: 13px;
    animation-duration: 415ms;
}

.bar:nth-child(5) {
    left: 16px;
    animation-duration: 465ms;
}

.bar:nth-child(6) {
    left: 17px;
    animation-duration: 485ms;
}

.bar:nth-child(7) {
    left: 15px;
    animation-duration: 485ms;
}

.bar:nth-child(8) {
    left: 17px;
    animation-duration: 419ms;
}

.bar:nth-child(9) {
    left: 20px;
    animation-duration: 487ms;
}

.bar:nth-child(10) {
    left: 37px;
    animation-duration: 342ms;
}
</style>