import http from 'k6/http';
import { sleep } from 'k6';


export const options = {
    ext: {
        loadimpact: {
            name: 'cloud-test',
        },
    },
    duration: '1m',
    vus: 50,
    thresholds: {
        http_req_duration: ['p(95)<500'],
    },
};

export default function () {
    const res = http.get('http://cw-demo-env.eba-a4yhduwd.us-east-1.elasticbeanstalk.com/');
    sleep(1);
}
