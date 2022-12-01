<script lang="ts" context="module">
    export enum ButtonTypes {
        Primary = 'primary',
        Cancel = 'cancel',
    }
</script>

<script lang="ts">
    export let onClick = () => {};
    export let text = 'button';
    export let btnType: ButtonTypes = ButtonTypes.Primary;
    export let disabled = false;

    const className = disabled ? 'disabled' : btnType;
</script>

<button on:click={onClick} class={className} {disabled}>{text}</button>

<style lang="scss">
    @use 'sass:color';
    @import '../colors.scss';

    button {
        color: #fff;
        padding: 0.4em 0.7em;
        border: none;
        &.primary {
            background-color: $primary-blue;
            &:hover {
                background-color: color.scale($primary-blue, $lightness: -10%);
            }
            &:active {
                background-color: color.scale($primary-blue, $lightness: -20%);
            }
        }
        &.cancel {
            background-color: $cancel-red;
            &:hover {
                background-color: color.scale($cancel-red, $lightness: -10%);
            }
            &:active {
                background-color: color.scale($cancel-red, $lightness: -20%);
            }
        }
        &.disabled {
            background-color: $disabled-grey;
            color: color.scale($disabled-grey, $lightness: -50%);
        }
    }
</style>
