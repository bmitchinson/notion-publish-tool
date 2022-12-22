<script lang="ts" context="module">
    export enum LogLineLevel {
        Info = 'info',
        Error = 'error',
        Success = 'success',
    }
    interface LogLine {
        unixTime: number;
        level: LogLineLevel;
        msg: String;
    }
</script>

<script lang="ts">
    import { format } from 'date-fns';

    export let logLines = [] as LogLine[];

    const unixToString = (unix: number) => {
        return format(new Date(unix * 1000), 'hh:mm:ss a');
    };
</script>

<div class="logbox">
    {#each logLines as logLine}
        <p class={logLine.level}>
            {unixToString(logLine.unixTime)} - {logLine.msg}
        </p>
    {/each}
</div>

<style lang="scss">
    @import '../colors.scss';

    .logbox {
        border-radius: 0.7em;
        padding: 1.2em 0em 1.2em 1.2em;
        width: 40em;
        height: 15em;
        background-color: white;
        overflow: scroll;
        overflow-x: hidden;
    }
    // https://stackoverflow.com/a/21684424
    .logbox::-webkit-scrollbar {
        border-radius: 1em;
    }
    .logbox::-webkit-scrollbar-thumb {
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        border-radius: 1em;
        background-color: #aaaaaa;
    }

    .info {
        color: $logs-info;
    }
    .success {
        color: $logs-success;
    }
    .error {
        color: $logs-error;
    }
</style>
