<script>
    // export let requestURL;
    // todo: this component needs to write "false" to a store that confirms
    //       all health status are passing
</script>

<div class="health-status">
    <img src={'/assets/icons/checkmark--filled.svg'} alt="green checkmark" />
    <p>cloudinary api</p>
</div>

<style lang="scss">
    .health-status {
        border-radius: 10px;
        background-color: white;
        display: flex;
        width: 100%;
    }

    p {
        margin: 0.5em 0.25em;
    }
</style>
