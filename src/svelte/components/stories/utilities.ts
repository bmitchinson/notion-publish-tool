export const getComponent = (instance) => {
    const r = instance.bind({});
    r.parameters = {
        layout: 'centered',
    };
    return r;
};
