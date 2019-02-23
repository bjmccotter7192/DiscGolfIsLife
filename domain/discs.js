var discsDB = require('../db/discs');

exports.addDisc = (discData) => {
    return new Promise((resolve, reject) => {
        if (!discData.discName) {
            reject(`Property 'discName' is required`);
        }

        discsDB.addDisc(discData)
            .then(disc => { resolve(disc) })
            .catch(err => { reject(err) })
    });
}

exports.getDiscs = () => {
    return new Promise((resolve, reject) => {
        discsDB.getDiscs()
            .then(discs => { resolve(discs) })
            .catch(err => { reject(err) })
    });
}

exports.getDiscIdByName = (discName) => {
    return new Promise((resolve, reject) => {
        discsDB.getDiscIdByName(discName)
            .then(disc => { resolve(disc) })
            .catch(err => { reject(err) })
    });
}

exports.deleteDisc = (discId) => {
    return new Promise((resolve, reject) => {
        discsDB.deleteDisc(discId)
            .then(disc => { resolve(disc) })
            .catch(err => { reject(err) })
    });
}

exports.updateDisc = (discData) => {
    return new Promise((resolve, reject) => {
        if (!discData._id) {
            reject(`Invalid disc Id or Name`);
        }

        discsDB.updateDisc(discData)
            .then(disc => { resolve(disc) })
            .catch(err => { reject(err) })
    });
}