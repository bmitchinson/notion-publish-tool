import TooltipComp from '../Tooltip.svelte';
import { getComponent } from './utilities';

export default {
    title: 'Components/Tooltip',
    component: TooltipComp,
};

const defaultArgs = {
    text: 'text for tooltip. this text should wrap and be nice! 😍',
};

const instance = ({ ...args }) => ({
    Component: TooltipComp,
    props: { ...defaultArgs, ...args },
});

export const Tooltip = getComponent(instance);
