<script lang="ts">
    export let placeholder = 'placeholder';
    export let failed = false;
    export let success = false;
    export let loading = false;
    export let failureReason = 'required value';

    let focused = false;
    let onFocus = () => {
        focused = true;
    };
    let onBlur = () => {
        focused = false;
    };
    $: show_error_items = failed && !focused && !loading;
    $: show_success = success && !focused && !loading && !failed;
</script>

<div class="inputparent">
    <input
        class:fail={failed && !focused && !loading}
        {placeholder}
        on:focus={onFocus}
        on:blur={onBlur}
    />
    <img
        class="loadingicon"
        class:hide={!loading}
        src={'/assets/icons/loading.svg'}
        alt="loading icon"
    />
    <img
        class="failicon"
        class:hide={!show_error_items}
        src={'/assets/icons/fail_two.svg'}
        alt="fail icon"
    />
    <img
        class="successicon"
        class:hide={!show_success}
        src={'/assets/icons/success.svg'}
        alt="success icon"
    />
    <p class="failreason" class:hide={!show_error_items}>{failureReason}</p>
</div>

<style lang="scss">
    @import '../colors.scss';

    input {
        padding: 1em 0em 0.8em 0.8em;
        border: none;
        border-radius: 0%;
        border-bottom: solid 2px $text-input-border-grey;
    }
    input:focus {
        outline: 3px solid $primary-blue;
        border-bottom: solid 2px white;
    }
    .fail {
        outline: 3px solid $text-input-border-red;
        border-bottom: solid 2px white;
    }
    .loadingicon {
        position: absolute;
        right: 0.5em;
        top: 0.55em;
        z-index: 10;
        width: 1.5em;
        animation: rotation 1s infinite ease;
    }
    .failicon {
        position: absolute;
        right: 0.4em;
        top: 0.55em;
        z-index: 10;
        width: 1.5em;
    }
    .successicon {
        position: absolute;
        right: 0.4em;
        top: 0.55em;
        z-index: 10;
        width: 1.5em;
    }
    .failreason {
        color: $text-input-border-red;
        padding-top: 0.5em;
        width: auto;
        margin-left: -4.5px;
    }
    .hide {
        visibility: hidden;
    }
    .inputparent {
        position: relative;
    }

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }
</style>
