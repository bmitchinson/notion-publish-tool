<script lang="ts">
    import { Confetti } from 'svelte-confetti';
</script>

<div
    style="
position: fixed;
top: -50px;
left: 0;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
overflow: hidden;
pointer-events: none;"
>
    <Confetti
        x={[-5, 5]}
        y={[0, 0.1]}
        delay={[0, 2000]}
        duration="2000"
        amount="700"
        fallDistance="60vh"
        rounded
    />
</div>
