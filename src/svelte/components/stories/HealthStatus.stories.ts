import HealthStatus from '../HealthStatus.svelte';
import { getComponent } from './utilities';

export default {
    title: 'Components/HealthStatus',
    component: HealthStatus,
};

const defaultArgs = {
    title: 'cloudinary api',
};

const instance = ({ ...args }) => ({
    Component: HealthStatus,
    props: { ...defaultArgs, ...args },
});

export const Success = getComponent(instance);
Success.args = { healthy: true };

export const Fail = getComponent(instance);
Fail.args = { healthy: false };

export const FailWithReason = getComponent(instance);
FailWithReason.storyName = 'Failed with Reason Tooltip (Hover)';
FailWithReason.args = {
    title: 'drat',
    healthy: false,
    failReason: 'Aww man the request failed :/',
};

export const Pending = getComponent(instance);
