<template>
    <div class="popup">
        <div class="popup-inner">
            <slot></slot>
            <button class="popup-close" @click="togglePopup()">
                Close
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NodePopUp',
    props: ['togglePopup'],
    setup() {

    },
}
</script>

<style>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.733);

    display: flex;
    align-items: center;
    justify-content: center;

}

.popup-inner {
    background: #fff;
    padding: 32px;
}
</style>