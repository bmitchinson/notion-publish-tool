<!-- A consumer for the LogArea component for storybook -->
<script lang="ts">
    import LogArea, { LogLine } from '../LogArea.svelte';

    export let logLines = [] as LogLine[];
</script>

<div class="storybook-view">
    <LogArea {logLines} />
</div>

<style lang="scss">
    .storybook-view {
        width: 30em;
        height: 10em;
    }
</style>
