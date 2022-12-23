<script lang="ts">
    import { fade } from 'svelte/transition';
    export let isOpen: boolean;

    export const openModal = () => {
        isOpen = true;
    };
    const closeModal = () => {
        isOpen = false;
    };

    const keyPressed = (event) => {
        if (event.key === 'Escape') closeModal();
    };
</script>

<svelte:window on:keydown={keyPressed} />
<div
    transition:fade
    class="fullscreen"
    style="display: {isOpen ? 'block' : 'none'}"
>
    <div class="modal-col-flex-container">
        <div class="modal-row-flex-container" on:mousedown|self={closeModal}>
            <div class="modal-box">
                <slot />
                <button class="close-btn" on:click={closeModal}>x</button>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .fullscreen {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 10;
        background-color: rgba(52, 52, 52, 0.8);
        filter: none;
    }
    .modal-col-flex-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 20;
        opacity: 1;
    }
    .modal-row-flex-container {
        width: 100%;
        height: 100%;
        display: flex;
        max-height: min(30em, 70%);
        justify-content: center;
        z-index: 20;
    }
    .modal-box {
        background-color: white;
        margin: 2.5em;
        padding: 2.5em;
        max-width: 35em;
        position: relative;
        max-height: 90%;
        overflow: scroll;
        overflow-x: hidden;
    }
    .close-btn {
        position: absolute;
        z-index: 21;
        top: 1em;
        right: 1.2em;
    }
</style>
