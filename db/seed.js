import sequelize from "./dbconnection.js"
import User from '../modules/users/models/user.model.js'
import Note from '../modules/tasks/models/task.model.js'

const seedDatabase = async () => {
    try {
        // Sync the database (create tables)
        await sequelize.sync({ force: true });

        // Insert sample data into the User table
        const user1 = await User.create({
            name: 'John Doe',
            email: 'john@example.com',
            password: 'password123',
            age: 25,
        });

        const user2 = await User.create({
            name: 'Jane Doe',
            email: 'jane@example.com',
            password: 'password456',
            age: 30,
        });

        // Insert sample data into the Note table
        await Note.create({
            title: 'Meeting Notes',
            content: 'Discuss project updates.',
            UserId: user1.id,
        });

        await Note.create({
            title: 'Shopping List',
            content: 'Milk, eggs, bread.',
            UserId: user2.id,
        });

        console.log('Sample data inserted successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Close the database connection
        await sequelize.close();
    }
};

// Run the seed function
// seedDatabase()
export {

 seedDatabase}