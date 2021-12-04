import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'madushan@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },

    {
        name: 'Madushan',
        email: 'kamal@gmail.com',
        password: bcrypt.hashSync('123456', 10)
        
    },

    {
        name: 'Nipuna',
        email: 'nipuna@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        
    }
]

export default users