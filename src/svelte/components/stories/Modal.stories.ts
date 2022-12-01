import ModalViewComp from '../storybook_wrappers/ModalView.svelte';

export default {
    title: 'Components/Modal',
    component: ModalViewComp,
};

const instance = () => ({
    Component: ModalViewComp,
});

export const Modal = instance.bind({});
