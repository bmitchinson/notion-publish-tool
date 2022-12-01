import ButtonComp, { ButtonTypes } from '../Button.svelte';
import { getComponent } from './utilities';

export default {
    title: 'Components/Button',
    component: ButtonComp,
};

const instance = ({ ...args }) => ({
    Component: ButtonComp,
    props: { ...args },
});

export const PrimaryButton = getComponent(instance);

export const CancelButton = getComponent(instance);
CancelButton.args = { btnType: ButtonTypes.Cancel };

export const DisabledButton = getComponent(instance);
DisabledButton.args = { disabled: true };
