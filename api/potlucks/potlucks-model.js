const db = require('../data/db-config.js')

const findBy = (filter) => {
    return db('potlucks').where(filter);
}

const findByOrganizerId = (id) => {
    return db('potlucks').where('user_id', id).first();
}

async function add(newPotluck) {
    const [id] = await db('potlucks').insert(newPotluck, ["potluck_id"]);
    return db('potlucks').where('potluck_id', id).first();
}

module.exports = {
    findBy,
    findByOrganizerId,
    add
}