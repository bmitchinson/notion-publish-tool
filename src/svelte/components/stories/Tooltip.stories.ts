import TooltipComp from '../Tooltip.svelte';

export default {
    title: 'Components/Tooltip',
    component: TooltipComp,
};

const defaultArgs = {
    text: 'text for tooltip. this text should wrap and be nice! 😍',
};

const Template = ({ ...args }) => ({
    Component: TooltipComp,
    props: { ...defaultArgs, ...args },
});

export const Tooltip = Template.bind({});
Tooltip.parameters = {
    layout: 'centered',
};
