let BASE_URL: string;
const TIME_OUT = 20 * 1000


if (import.meta.env.MODE === 'production') {
    BASE_URL = '/api'
} else {
    BASE_URL = '/api'
}

export { BASE_URL, TIME_OUT }