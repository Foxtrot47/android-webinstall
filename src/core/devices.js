const DEVICE_NAMES = {
    bhima: "POCO X3 Pro(Indian Variant)",
    vayu: "POCO X3 Pro(Global Variant)"
};

export function getDeviceName(device) {
    return device in DEVICE_NAMES ? DEVICE_NAMES[device] : device;
}
