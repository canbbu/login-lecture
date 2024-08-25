"user strict"

class UserStorage {
    static #users = {
        id:["young","yong","mike"],
        psword:["1234","2345","3456"],
        name:["영","모아","안도"],
    }

    static getUsers(...fields){
        const users = this.#users
        const newUsers = fields.reduce((newUsers, field) =>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field]
            }
            return newUsers
        },{})
        return newUsers
    }
}

module.exports = UserStorage