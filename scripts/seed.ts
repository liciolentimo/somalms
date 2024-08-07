const { PrismaClient} = require("@prisma/client");

const database = new PrismaClient();
async function main() {
    try {
        await database.category.createMany({
            data: [
                { name: "Computer Science" },
                { name: "Cybersecurity" },
                { name: "Artificial Intelligence" },
                { name: "Web Development" },
                { name: "Mobile App Development" },
                { name: "Graphic Design" },
                { name: "Cloud" },
            ]
        });
        console.log("Success");
    } catch (error) {
        console.log("Error seeding the database categories",error);
    } finally {
        await database.$disconnect();
    }
}

main();