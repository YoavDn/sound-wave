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
    height: 10px;
    position: relative;
    transform: translateY(50%);
    transform: translateX(-3px);


    /* left: 50%; */
    /* margin: -30px 0 0 -20px; */
    /* position: absolute; */

}

.bar {
    background-color: #1ed760;
    bottom: 1px;
    height: 2px;
    position: absolute;

    width: 3px;
    animation: sound 0ms -800ms linear infinite alternate;
}

@keyframes sound {
    0% {
        height: 3px;
    }

    100% {
        height: 20px;
    }
}

.bar:nth-child(1) {
    left: 1px;
    animation-duration: 474ms;
}

.bar:nth-child(2) {
    left: 5px;
    animation-duration: 433ms;
}

.bar:nth-child(3) {
    left: 9px;
    animation-duration: 407ms;
}

.bar:nth-child(4) {
    left: 13px;
    animation-duration: 458ms;
}

.bar:nth-child(5) {
    left: 16px;
    animation-duration: 400ms;
}

.bar:nth-child(6) {
    left: 13px;
    animation-duration: 427ms;
}

.bar:nth-child(7) {
    left: 15px;
    animation-duration: 441ms;
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
    animation-duration: 442ms;
}
</style>