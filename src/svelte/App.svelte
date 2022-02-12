<script lang="ts">
    export let name: string;
    // TODO: Move to svelte appropriate request / population
    fetch('/api/hello')
        .then((r) => r.json())
        .then(
            ({ msg }) => (document.getElementById('API_MSG').textContent = msg),
        );
    fetch('/api/hello_secret')
        .then((r) => r.json())
        .then(
            ({ msg }) =>
                (document.getElementById('API_SECRET').textContent = msg),
        );
    // TODO: Move to svelte appropriate request / population
    const host_is_ssl = window.location.href.includes('https');
    const socket_prefix = host_is_ssl ? 'wss' : 'ws';
    const socket_url = `${socket_prefix}://${window.location.host}/logger`;
    const socket = new WebSocket(socket_url);
    socket.addEventListener('message', function (event) {
        console.log('Message from server ', event.data);
        document.getElementById('SOCKET_MSG').textContent = event.data;
    });
</script>

<main>
    <h1>Hello {name}!</h1>
    <p>
        Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
        how to build Svelte apps.
    </p>
    <p id="API_MSG">Pending API Response...</p>
    <p id="SOCKET_MSG">Pending WebSocket Response...</p>
    <p id="API_SECRET">Pending API Secret Response...</p>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
