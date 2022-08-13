<script lang="ts">
    let healthy: boolean;
    export let healthCheckUrl: string;
    // todo: write "false" to a store that confirms all health status are passing
    fetch(healthCheckUrl)
        .then((r) => r.json())
        .then(({ data }) => {
            healthy = data.healthy;
        })
        .catch(() => {
            healthy = false;
        });
</script>

<div class="health-status">
    {#if healthy}
        <img
            src={'/assets/icons/checkmark--filled.svg'}
            alt="green checkmark"
            class="icon"
        />
    {:else}
        <img src={'/assets/icons/fail.svg'} alt="red cross" class="fail-icon" />
    {/if}
    <div class="text">
        <p>cloudinary api</p>
    </div>
</div>

<style lang="scss">
    .health-status {
        border-radius: 16px;
        background-color: white;
        display: flex;
        align-items: center;
        max-width: 13em;
        padding: 0.2em 0em 0.2em 0.4em;
        .icon {
            width: 2em;
        }
        .fail-icon {
            @extend .icon;
            margin-left: 0.15em;
        }

        .text {
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }
</style>
