const Cryptojs = require("crypto-js")
const JWT = require("jsonwebtoken")

const cryptedToPassword = (password) => {
    return Cryptojs.HmacSHA1(password, process.env.CRYPTED_KEY).toString()
}

const createAccessToken = (data) => {
    return JWT.sign({name: data.e_mail, ...data}, process.env.ACCESS_TOKEN_KEY, {expiresIn: "20m"})
}

const createRefreshToken = (data) => {
    return JWT.sign({name: data.e_mail, ...data}, process.env.REFRESH_TOKEN_KEY)
}

const createAdminAccessToken = (adminData) => {
    return JWT.sign({name: adminData.admin_name, ...adminData}, process.env.ACCESS_TOKEN_KEY, {expiresIn: "1h"})
}

const createAdminRefreshToken = (adminData) => {
    return JWT.sign({name: adminData.admin_name, ...adminData}, process.env.REFRESH_TOKEN_KEY)
}

module.exports = {
    cryptedToPassword,
    createAccessToken,
    createRefreshToken,
    createAdminAccessToken,
    createAdminRefreshToken
}