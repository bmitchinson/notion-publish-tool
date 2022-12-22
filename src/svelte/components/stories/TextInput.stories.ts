import TextInput from '../TextInput.svelte';
import { getComponent } from './utilities';

export default {
    title: 'Components/TextInput',
    component: TextInput,
};

const instance = ({ ...args }) => ({
    Component: TextInput,
    props: { ...args },
});

export const TextEntry = getComponent(instance);
