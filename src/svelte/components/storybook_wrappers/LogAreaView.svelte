<!-- A consumer for the LogArea component for storybook -->
<script lang="ts">
    import LogArea, { LogLine } from '../LogArea.svelte';

    export let logLines = [] as LogLine[];
</script>

<div class="center">
    <div class="storybook-view">
        <LogArea {logLines} />
    </div>
</div>

<style lang="scss">
    .storybook-view {
        height: 10em;
        min-width: 10em;
        max-width: 70%;
    }
    .center {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>
