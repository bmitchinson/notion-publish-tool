import ModalViewComp from '../storybook_wrappers/ModalView.svelte';

export default {
    title: 'Components/Modal',
    component: ModalViewComp,
};

const Template = () => ({
    Component: ModalViewComp,
});

export const Modal = Template.bind({});
