<script lang="ts">
    // args /////////////////
    export let healthCheckUrl: string;
    export let title: string;
    /////////////////////////
    // later: write "false" to a store that confirms all health status are passing
    /////////////////////////
    let healthy: boolean | undefined;
    healthy = undefined;
    /////////////////////////
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
    {#if healthy === undefined}
        <img
            src={'/assets/icons/loading.svg'}
            alt="loading"
            class="icon spin load-icon"
        />
    {:else if healthy === true}
        <img
            src={'/assets/icons/checkmark--filled.svg'}
            alt="green checkmark"
            class="icon"
        />
    {:else}
        <img
            src={'/assets/icons/fail.svg'}
            alt="red cross"
            class="icon fail-icon"
        />
    {/if}
    <div class="text">
        <p>{title}</p>
    </div>
</div>

<style lang="scss">
    .health-status {
        border-radius: 16px;
        background-color: white;
        display: flex;
        align-items: center;
        width: 13em;
        min-height: 2em;
        padding: 0.2em 0em 0.2em 0.4em;
        .icon {
            width: 2em;
        }
        .fail-icon {
            margin-left: 0.15em;
        }

        .load-icon {
            margin: 0.15em 0.15em;
        }
        .text {
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }
</style>
