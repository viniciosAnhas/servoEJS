const Gpio = require('pigpio').Gpio;
let motor = new Gpio(21, {mode: Gpio.OUTPUT});

let pulseWidth = 500;
let pulseWidth2 = 1500;

const IndexController = {

    index: (req, res) => {
      
        return res.render('index', {

            title: 'Home'

        })

    },

    servo90: (req, res) => {

        motor.servoWrite(pulseWidth);

        return res.render('servo90', {

            title: 'Servo',
            status: 'Servo em 90°'

        })


    },

    servo180: (req, res) => {

        motor.servoWrite(pulseWidth2); 

          return res.render('servo180', {

            title: 'Servo',
            status: 'Servo em 180°'

        })

    }

}

module.exports = IndexController