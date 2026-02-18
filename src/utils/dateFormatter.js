// Date formatting utility
export const formatCurrentDate = (dateString) => {
    const dateObj = new Date(dateString);
    const formatter = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric",
    });
    return formatter.format(dateObj);
};

export const formatTime = (isoString) => {
    return new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        hour12: true,
    }).format(new Date(isoString));
};
