import ButtonComp, { ButtonTypes } from '../Button.svelte';

export default {
    title: 'Components/Button',
    component: ButtonComp,
};

const Template = ({ ...args }) => ({
    Component: ButtonComp,
    props: { ...args },
});

export const PrimaryButton = Template.bind({});
PrimaryButton.parameters = {
    layout: 'centered',
};

export const CancelButton = Template.bind({});
CancelButton.parameters = {
    layout: 'centered',
};
CancelButton.args = { btnType: ButtonTypes.Cancel };

export const DisabledButton = Template.bind({});
DisabledButton.parameters = {
    layout: 'centered',
};
DisabledButton.args = { disabled: true };
