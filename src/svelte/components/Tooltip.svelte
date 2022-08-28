<script lang="ts">
    export let text: string;
</script>

<div>
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
        position: fixed;
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
        top: -0.15em;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-top: 9px solid $background-grey;
    }
</style>
