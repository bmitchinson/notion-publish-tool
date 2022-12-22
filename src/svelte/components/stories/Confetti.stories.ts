import Confetti from '../ConfettiFullscreen.svelte';
import { getComponent } from './utilities';

export default {
    title: 'Components/Confetti',
    component: Confetti,
};

const instance = ({ ...args }) => ({
    Component: Confetti,
    props: { ...args },
});

export const FullscreenConfetti = getComponent(instance);
