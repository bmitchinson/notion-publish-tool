<!-- A consumer for the modal component for storybook to
  demonstrate <slot> -->
<script lang="ts">
    import Modal from '../Modal.svelte';
    let modal_ref;
</script>

<div class="modal-storybook-view">
    <div class="controls-row">
        <div class="controls">
            <button on:click={modal_ref.openModal}>Open Modal</button>
        </div>
    </div>
    <Modal bind:this={modal_ref} isOpen>
        <div class="modal-contents">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                scelerisque feugiat urna. In dictum blandit nisl at rhoncus.
                Maecenas diam lorem, porttitor sed arcu non, sollicitudin
                viverra ex. Sed in molestie neque, eget gravida est. Nam enim
                massa, aliquam sollicitudin aliquam ut, pellentesque nec quam.
                Vivamus quis sollicitudin nisl. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia curae;
            </p>
            <p>
                Suspendisse eleifend massa diam. Curabitur at lectus facilisis,
                maximus orci id, congue risus. Mauris et augue at mi tempus
                semper. Vivamus sit amet quam eros. Praesent vehicula lacus quis
                urna faucibus tempor. Duis placerat lectus a metus rhoncus
                malesuada. Proin scelerisque convallis diam.
            </p>
            <p>
                Phasellus eget faucibus neque, at sollicitudin felis. Maecenas
                pretium sodales dolor, eleifend ultricies enim lobortis in. Nunc
                ac sollicitudin nisi, at ultrices urna. Nunc dignissim odio
                odio, sed euismod est feugiat eget. Sed convallis justo at neque
                dignissim suscipit. Donec a sollicitudin ipsum, eu posuere
                metus. Sed dignissim suscipit scelerisque. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Donec ut rutrum ex, ac porttitor nulla.
            </p>
            <p>
                Aenean efficitur quis dui non vestibulum. Maecenas quis
                hendrerit dui. Quisque pharetra, arcu sed fermentum fringilla,
                urna magna semper urna, in consectetur tellus diam vel sapien.
                Etiam tincidunt laoreet accumsan. Sed nibh sem, porttitor quis
                aliquet ullamcorper, lobortis vel lorem. Integer et auctor dui.
                Fusce in fringilla ante, et suscipit nibh. Sed est nibh, pretium
                in dictum vel, convallis pellentesque neque. Nullam dignissim id
                erat vitae malesuada. Sed sem diam, fermentum a vestibulum ac,
                cursus at ligula. Proin suscipit quam id porta gravida.
            </p>
            <p>
                Quisque eu dapibus urna. Sed in lectus dapibus felis rutrum
                commodo fermentum a urna. Nullam feugiat sit amet eros mollis
                lobortis. Duis eget pulvinar libero. Proin faucibus sollicitudin
                ligula, ac laoreet quam ullamcorper ac. Nulla faucibus congue
                ligula ut fringilla. Nulla ultricies libero id semper hendrerit.
                Fusce nec malesuada felis.
            </p>
        </div>
    </Modal>
</div>

<style lang="scss">
    .modal-contents {
        display: flex;
        flex-direction: column;
        gap: 2em;
    }
    .controls-row {
        display: flex;
        justify-content: center;
    }
    .controls {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
</style>
