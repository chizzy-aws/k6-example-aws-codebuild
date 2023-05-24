import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    const res = http.get('http://cw-demo-env.eba-a4yhduwd.us-east-1.elasticbeanstalk.com/');
    sleep(1);
}
