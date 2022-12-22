import Component, { LogLineLevel } from '../LogArea.svelte';
import { getComponent } from './utilities';

export default {
    title: 'Components/LogArea',
    component: Component,
};

const instance = ({ ...args }) => ({
    Component: Component,
    props: { ...args },
});

export const LogArea = getComponent(instance);
LogArea.args = {
    logLines: [
        {
            unixTime: 1671748325,
            level: LogLineLevel.Info,
            msg: 'Info message. Not good not bad, just some info. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque feugiat urna. In dictum blandit nisl at rhoncus. Maecenas diam lorem, porttitor sed arcu non, sollicitudin viverra ex.',
        },
        {
            unixTime: 1671748345,
            level: LogLineLevel.Error,
            msg: "Awe man it's an error. Must be bad. Sed in molestie neque, eget gravida est. Nam enim massa, aliquam sollicitudin aliquam ut, pellentesque nec quam. Vivamus quis sollicitudin nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        },
        {
            unixTime: 1671748365,
            level: LogLineLevel.Success,
            msg: 'Congrats! Something good happened! Suspendisse eleifend massa diam. Curabitur at lectus facilisis, maximus orci id, congue risus. Mauris et augue at mi tempus semper.',
        },
    ],
};
