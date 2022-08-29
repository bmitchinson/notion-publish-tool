<script lang="ts">
    import { fade } from 'svelte/transition';
    export let text: string;
</script>

<div transition:fade class="tooltip">
    <div class="tooltip-box">
        {text}
    </div>
    <div class="tooltip-arrow">
        <div class="tooltip-arrow-outline" />
        <div class="tooltip-arrow-inside" />
    </div>
</div>

<style lang="scss">
    @import '../colors.scss';

    .tooltip {
        position: absolute;
        z-index: 10;
        bottom: 90%;
        transition: opacity 400ms;
        opacity: 0;
    }

    .tooltip-box {
        border: 2px solid white;
        border-radius: 2px;
        padding: 8px 16px;
        color: white;
        max-width: 9em;
    }
    .tooltip-arrow {
        position: relative;
        left: 43%;
    }
    .tooltip-arrow-outline {
        position: relative;
        width: 0;
        height: 0;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-top: 9px solid white;
    }
    .tooltip-arrow-inside {
        position: relative;
        width: 0;
        height: 0;
        top: -0.75em;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-top: 9px solid $background-grey;
    }
</style>
