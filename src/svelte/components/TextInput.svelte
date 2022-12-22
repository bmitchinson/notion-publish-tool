<script lang="ts">
    export let placeholder = 'placeholder';
    export let failed = false;
    export let failureReason = 'required value';

    let focused = false;
    let onFocus = () => {
        focused = true;
    };
    let onBlur = () => {
        focused = false;
    };
    $: show_error_items = failed && !focused;
</script>

<div>
    <input
        class:fail={failed && !focused}
        {placeholder}
        on:focus={onFocus}
        on:blur={onBlur}
    />
    <img
        class="icon"
        class:hide={!show_error_items}
        src={'/assets/icons/fail_two.svg'}
        alt="fail icon"
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
    .icon {
        position: relative;
        right: 2em;
        top: 0.2em;
        z-index: 10;
    }
    .failreason {
        color: $text-input-border-red;
        padding-top: 0.5em;
        margin-left: -4.5px;
    }
    .hide {
        visibility: hidden;
    }
</style>
