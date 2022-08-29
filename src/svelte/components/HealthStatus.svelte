<script lang="ts">
    import { onMount } from 'svelte';
    import type { ServiceHealthRes } from '../../api/healthchecks/response';
    import Tooltip from './Tooltip.svelte';
    // args /////////////////
    export let healthCheckUrl: string;
    export let title: string;
    /////////////////////////
    // later: write "false" to a store that confirms all health status are passing
    /////////////////////////
    let healthy: boolean | undefined;
    let failReason = null;
    healthy = undefined;

    onMount(async () => {
        fetch(healthCheckUrl)
            .then((r) => r.json())
            .then(({ data }: { data: ServiceHealthRes }) => {
                healthy = data.healthy;
                failReason = data?.failReason;
            })
            .catch((e) => {
                console.error(`failed to check ${title}: ${e}`);
                healthy = false;
                failReason = 'failed to reach healthcheck.';
            });
    });
</script>

<div class="health-status">
    {#if failReason}
        <Tooltip text={failReason} />
    {/if}
    <div class="health-status-contents">
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
        <!-- todo: 3 fix to sit at center of entire area, despite logo -->
        <div class="text">
            <p>{title}</p>
        </div>
    </div>
</div>

<style lang="scss">
    .health-status {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .health-status:hover {
        :global(.tooltip) {
            opacity: 1;
        }
    }

    .health-status-contents {
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
            text-align: center;
        }
    }
</style>
