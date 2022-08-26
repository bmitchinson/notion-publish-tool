import HealthStatus from '../HealthStatus.svelte';
import withMock from 'storybook-addon-mock';

import { storybookURL } from './storybookurl';

export default {
    title: 'Components/HealthStatus',
    component: HealthStatus,
    decorators: [withMock],
};

const mockHealthCheckUrl = `${storybookURL}/healthcheck/fake_service`;
const defaultArgs = {
    healthCheckUrl: mockHealthCheckUrl,
    title: 'cloudinary api',
};

const Template = ({ ...args }) => ({
    Component: HealthStatus,
    props: { ...defaultArgs, ...args },
});

const buildMockWithResponse = (response) => ({
    url: mockHealthCheckUrl,
    method: 'GET',
    status: 200,
    response,
    delay: 2000,
});

const mockHealthCheckResults = {
    success: buildMockWithResponse({
        data: { healthy: true },
    }),
    failure: buildMockWithResponse({
        data: { healthy: false },
    }),
};

export const Success = Template.bind({});
Success.parameters = {
    mockData: [mockHealthCheckResults.success],
    layout: 'centered',
};
// Success.args = { defaultArgOverrides: here  };

export const Fail = Template.bind({});
Fail.parameters = {
    mockData: [mockHealthCheckResults.failure],
    layout: 'centered',
};
