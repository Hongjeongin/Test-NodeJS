const nmodemailer = require('nodemailer');
const email = {
    "host": "",
    "port": "",
    "secure": false,
    "auth": {
        "user": "",
        "pass": ""
    }
};

const send = async (option) => {
    nmodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error) {
            console.log(error);
        } else {
            console.log(info)
            return info.response;
        }
    });
};

let email_data = {
    from: 'wildcardhong@gmail.com',
    to: 'wildcardhong@gmail.com',
    subject: '테스트 메일 입니다.',
    text: 'nodejs 한시간만에 끝내보자.'
};

send(email_data);