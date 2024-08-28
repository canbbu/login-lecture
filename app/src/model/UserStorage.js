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

    static getUserInfo(id){
        const users = this.#users
        const idx = users.id.indexOf(id)
        const usersKeys = Object.keys(users)
        const userInfo = usersKeys.reduce((newUser, info) =>{
            newUser[info] = users[info][idx]
            return newUser
        },{})

        return userInfo
    }

    static save(userInfo){
        const users = this.#users
        users.id.push(userInfo.id)
        users.psword.push(userInfo.psword)
        users.name.push(userInfo.name)
        console.log(users)
        return {success:true}
    }
}

module.exports = UserStorage