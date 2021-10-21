const bcrypt = require('bcryptjs');

const password = "1234";
const hash = bcrypt.hashSync(password, 8)

const users = [
    {
        user_id: 1,
        username: "Gandalf",
        password: hash,
        role: "organizer",
    },
    {
        user_id: 2,
        username: "Bilbo",
        password: hash,
        role: "organizer",
    },
    {
        user_id: 3,
        username: "Sauron",
        password: hash,
        role: "organizer",
    },
    {   
        user_id: 4,
        username: "Frodo",
        password: hash,
        role: "guest",
    },
    {
        user_id: 5,
        username: "Samwise",
        password: hash,
        role: "guest",
    },
    {
        user_id: 6,
        username: "Pippin",
        password: hash,
        role: "guest",
    },
    {
        user_id: 7,
        username: "Gollum",
        password: hash,
        role: "guest",
    },
    {
        user_id: 8,
        username: "Orc1",
        password: hash,
        role: "guest",
    },
    {
        user_id: 9,
        username: "Orc2",
        password: hash,
        role: "guest",
    }
]

const foods = [
    {
        food_id: 1,
        food_name: "bread",
    },
    {
        food_id: 2,
        food_name: "game hen",
    },
    {
        food_id: 3,
        food_name: "mead",
    },
    {
        food_id: 4,
        food_name: "tea",
    },
    {
        food_id: 5,
        food_name: "scones",
    },
    {
        food_id: 6,
        food_name: "shepherd's pie",
    },
    {
        food_id: 7,
        food_name: "roast vegetables",
    }
]

const guests = [
    {
        guest_id: 1,
        guest_name: "Frodo",
        user_id: 4,
    },
    {
        guest_id: 2,
        guest_name: "SamwiseGangee",
        user_id: 5,
    },
    {
        guest_id: 3,
        guest_name: "Pippin",
        user_id: 6,
    },
    {
        guest_id: 4,
        guest_name: "Gollum",
        user_id: 7,
    },
    {
        guest_id: 5,
        guest_name: "Orc1",
        user_id: 8,
    },
    {
        guest_id: 6,
        guest_name: "Orc2",
        user_id: 9,
    },
    {
        guest_id: 7,
        guest_name: "Bilbo",
        user_id: 2,
    }
]

const potlucks = [
    {
        potluck_id: 1,
        potluckName: "Bilbo's Birthday Bash",
        date: "March 8th",
        time: "3:00pm",
        location: "Bilbo's Backyard",
        user_id: 1,
    },
    {
        potluck_id: 2,
        potluckName: "Hobbit Second Breakfast",
        date: "June 2nd",
        time: "10:00am",
        location: "Frodo's House",
        user_id: 1,
    },
    {
        potluck_id: 3,
        potluckName: "Gathering of the Dark Lords",
        date: "January 23rd",
        time: "11:00pm",
        location: "Mount Doom",
        user_id: 3,
    }
]

const potluck_foods = [
    {
        potluck_food_id: 1,
        potluck_id: 1,
        food_id: 3,
    },
    {
        potluck_food_id: 2,
        potluck_id: 1,
        food_id: 6,
    },
    {
        potluck_food_id: 3,
        potluck_id: 1,
        food_id: 7,
    },
    {
        potluck_food_id: 4,
        potluck_id: 2,
        food_id: 4,
    },
    {
        potluck_food_id: 5,
        potluck_id: 2,
        food_id: 5,
    },
    {
        potluck_food_id: 6,
        potluck_id: 3,
        food_id: 1,
    },
    {
        potluck_food_id: 7,
        potluck_id: 3,
        food_id: 2,
    }
]

const potluck_guests = [
    {
        potluck_guest_id: 1,
        potluck_id: 1,
        guest_id: 1,
    },
    {
        potluck_guest_id: 2,
        potluck_id: 1,
        guest_id: 2,
    },
    {
        potluck_guest_id: 3,
        potluck_id: 1,
        guest_id: 3,
    },
    {
        potluck_guest_id: 4,
        potluck_id: 1,
        guest_id: 7,
    },
    {
        potluck_guest_id: 5,
        potluck_id: 2,
        guest_id: 1,
    },
    {
        potluck_guest_id: 6,
        potluck_id: 2,
        guest_id: 2,
    },
    {
        potluck_guest_id: 7,
        potluck_id: 2,
        guest_id: 3,
    }
]


exports.users = users
exports.foods = foods
exports.guests = guests
exports.potlucks = potlucks
exports.potluck_foods = potluck_foods
exports.potluck_guests = potluck_guests


exports.seed = async function(knex) {
    await knex('users').insert(users)
    await knex('foods').insert(foods)
    await knex('guests').insert(guests)
    await knex('potlucks').insert(potlucks)
    await knex('potluck_foods').insert(potluck_foods)
    await knex('potluck_guests').insert(potluck_guests)
}