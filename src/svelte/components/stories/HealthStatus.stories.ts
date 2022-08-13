import HealthStatus from '../HealthStatus.svelte';
import withMock from 'storybook-addon-mock';

import { storybookURL } from './storybookurl';

export default {
    title: 'Components/HealthStatus',
    component: HealthStatus,
    decorators: [withMock],
};

const Template = ({ ...args }) => ({
    Component: HealthStatus,
    props: args,
});

const mockHealthCheckUrl = `${storybookURL}/healthcheck/fake_service`;
const mockHealthCheckResults = {
    success: {
        url: mockHealthCheckUrl,
        method: 'GET',
        status: 200,
        response: {
            data: { healthy: true },
        },
    },
    failure: {
        url: mockHealthCheckUrl,
        method: 'GET',
        status: 200,
        response: {
            data: { healthy: false },
        },
    },
};

export const Success = Template.bind({});
Success.parameters = { mockData: [mockHealthCheckResults.success] };
Success.args = { healthCheckUrl: mockHealthCheckUrl };

export const Fail = Template.bind({});
Fail.parameters = { mockData: [mockHealthCheckResults.failure] };
Fail.args = { healthCheckUrl: mockHealthCheckUrl };
