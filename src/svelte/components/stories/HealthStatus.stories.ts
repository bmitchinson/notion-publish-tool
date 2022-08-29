import HealthStatus from '../HealthStatus.svelte';
import withMock from 'storybook-addon-mock';

import { storybookURL } from './storybookurl';

import { ServiceHealthRes } from '../../../api/healthchecks/response';

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

const buildMockWithResponse = (response: { data: ServiceHealthRes }) => ({
    url: mockHealthCheckUrl,
    method: 'GET',
    status: 200,
    response,
    delay: 1500,
});

const mockHealthCheckResults = {
    success: buildMockWithResponse({
        data: { healthy: true },
    }),
    failure: buildMockWithResponse({
        data: { healthy: false },
    }),
    failureWithReason: buildMockWithResponse({
        data: { healthy: false, failReason: 'Aww man the request failed :/' },
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

export const FailWithReason = Template.bind({});
FailWithReason.parameters = {
    mockData: [mockHealthCheckResults.failureWithReason],
    layout: 'centered',
};
FailWithReason.args = { title: 'drat' };
FailWithReason.storyName = 'Failed with Reason Tooltip (Hover)';
