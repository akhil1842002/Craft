const ObjectID = require('mongodb').ObjectId;
const { main } = require('../database/connect')

const portPrimaryColor = async (req, res) => {
    console.log("sdfsdfsdf");

    const color = req.body.primaryColor

    try {
        const database = await main()
        const collection = await database.collection("Port-Primary-Color")
        const find = await collection.findOne()

        if (find) {
            const id = find._id
            const convertToStr = id.toString()

            const idToUpdate = new ObjectID(convertToStr)

            const updateData = await collection.updateOne({ _id: idToUpdate }, { $set: { primaryColor: color } })

            if (insertData.modifiedCount === 1) {
                res.status(200).json({ "message": "Data updated Successfully", "success": true });
            } else {
                res.status(200).json({ "message": "Data not updated", "success": false });
            }
        } else {

            const insertData = await collection.insertOne({
                primaryColor: color
            })

            if (insertData.insertedId) {
                res.status(200).json({ "message": "Data inserted Successfully", "success": true });
            } else {
                res.status(200).json({ "message": "Data not inserted", "success": false });
            }

        }


    } catch (error) {
        console.log(error);
        res.status(500).send('Error creating user');
    }
}

const portSecondaryColor = async (req, res) => {
    console.log("sdfsdfsdf");

    const color = req.body.secondaryColor

    try {
        const database = await main()
        const collection = await database.collection("Port-Secondary-Color")
        const find = await collection.findOne()

        if (find) {
            const id = find._id
            const convertToStr = id.toString()

            const idToUpdate = new ObjectID(convertToStr)

            const updateData = await collection.updateOne({ _id: idToUpdate }, { $set: { secondaryColor: color } })

            if (updateData.modifiedCount === 1) {
                res.status(200).json({ "message": "Data updated Successfully", "success": true });
            } else {
                res.status(200).json({ "message": "Data not updated", "success": false });
            }
        } else {

            const insertData = await collection.insertOne({
                secondaryColor: color
            })

            if (insertData.insertedId) {
                res.status(200).json({ "message": "Data inserted Successfully", "success": true });
            } else {
                res.status(200).json({ "message": "Data not inserted", "success": false });
            }

        }


    } catch (error) {
        console.log(error);
        res.status(500).send('Error creating user');
    }
}

const portHeaderImage = async (req, res) => {
    console.log("sdfsdfsdf");

    const image = req.body.headerImage

    try {
        const database = await main()
        const collection = await database.collection("Port-Header-Image")
        const find = await collection.findOne()

        if (find) {
            const id = find._id
            const convertToStr = id.toString()

            const idToUpdate = new ObjectID(convertToStr)

            const updateData = await collection.updateOne({ _id: idToUpdate }, { $set: { headerImage: image } })

            if (insertData.modifiedCount === 1) {
                res.status(200).json({ "message": "Data updated Successfully", "success": true });
            } else {
                res.status(200).json({ "message": "Data not updated", "success": false });
            }
        } else {

            const insertData = await collection.insertOne({
                headerImage: image
            })

            if (insertData.insertedId) {
                res.status(200).json({ "message": "Data inserted Successfully", "success": true });
            } else {
                res.status(200).json({ "message": "Data not inserted", "success": false });
            }

        }


    } catch (error) {
        console.log(error);
        res.status(500).send('Error creating user');
    }

};


const portTestOne = async (req, res) => {
    console.log("work");

    const name = req.body.name
    const review = req.body.review

    const database = await main()
    const collection = await database.collection("Port-First-Test")
    const find = await collection.findOne()

    try {

        if (find) {
            const id = find._id
            const convertToStr = id.toString()

            const idToUpdate = new ObjectID(convertToStr)

            const updateData = await collection.updateOne({ _id: idToUpdate }, { $set: { 
                name: name,
                review: review
            } })

            if (updateData.modifiedCount === 1) {
                res.status(200).json({ "message": "Data updated Successfully", "success": true });
            } else {
                res.status(200).json({ "message": "Data not updated", "success": false });
            }
        } else {

            const insertData = await collection.insertOne({
                name: name,
                review: review
            })

            if (insertData.insertedId) {
                res.status(200).json({ "message": "Data inserted Successfully", "success": true });
            } else {
                res.status(200).json({ "message": "Data not inserted", "success": false });
            }

        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Error creating user');
    }

};

const portTestTwo = async (req, res) => {
    console.log("work");

    const name = req.body.name
    const review = req.body.review

    const database = await main()
    const collection = await database.collection("Port-second-Test")
    const find = await collection.findOne()

    try {

        if (find) {
            const id = find._id
            const convertToStr = id.toString()

            const idToUpdate = new ObjectID(convertToStr)

            const updateData = await collection.updateOne({ _id: idToUpdate }, { $set: { 
                name: name,
                review: review
            } })

            if (updateData.modifiedCount === 1) {
                res.status(200).json({ "message": "Data updated Successfully", "success": true });
            } else {
                res.status(200).json({ "message": "Data not updated", "success": false });
            }
        } else {

            const insertData = await collection.insertOne({
                name: name,
                review: review
            })

            if (insertData.insertedId) {
                res.status(200).json({ "message": "Data inserted Successfully", "success": true });
            } else {
                res.status(200).json({ "message": "Data not inserted", "success": false });
            }

        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Error creating user');
    }

};

const portTestThree = async (req, res) => {
    console.log("work");

    const name = req.body.name
    const review = req.body.review

    const database = await main()
    const collection = await database.collection("Port-Three-Test")
    const find = await collection.findOne()

    try {

        if (find) {
            const id = find._id
            const convertToStr = id.toString()

            const idToUpdate = new ObjectID(convertToStr)

            const updateData = await collection.updateOne({ _id: idToUpdate }, { $set: { 
                name: name,
                review: review
            } })

            if (updateData.modifiedCount === 1) {
                res.status(200).json({ "message": "Data updated Successfully", "success": true });
            } else {
                res.status(200).json({ "message": "Data not updated", "success": false });
            }
        } else {

            const insertData = await collection.insertOne({
                name: name,
                review: review
            })

            if (insertData.insertedId) {
                res.status(200).json({ "message": "Data inserted Successfully", "success": true });
            } else {
                res.status(200).json({ "message": "Data not inserted", "success": false });
            }

        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Error creating user');
    }

};

const portTestFour = async (req, res) => {
    console.log("work");

    const name = req.body.name
    const review = req.body.review

    const database = await main()
    const collection = await database.collection("Port-Four-Test")
    const find = await collection.findOne()

    try {

        if (find) {
            const id = find._id
            const convertToStr = id.toString()

            const idToUpdate = new ObjectID(convertToStr)

            const updateData = await collection.updateOne({ _id: idToUpdate }, { $set: { 
                name: name,
                review: review
            } })

            if (updateData.modifiedCount === 1) {
                res.status(200).json({ "message": "Data updated Successfully", "success": true });
            } else {
                res.status(200).json({ "message": "Data not updated", "success": false });
            }
        } else {

            const insertData = await collection.insertOne({
                name: name,
                review: review
            })

            if (insertData.insertedId) {
                res.status(200).json({ "message": "Data inserted Successfully", "success": true });
            } else {
                res.status(200).json({ "message": "Data not inserted", "success": false });
            }

        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Error creating user');
    }

};

const portTestFifth = async (req, res) => {
    console.log("work");

    const name = req.body.name
    const review = req.body.review

    const database = await main()
    const collection = await database.collection("Port-Fifth-Test")
    const find = await collection.findOne()

    try {

        if (find) {
            const id = find._id
            const convertToStr = id.toString()

            const idToUpdate = new ObjectID(convertToStr)

            const updateData = await collection.updateOne({ _id: idToUpdate }, { $set: { 
                name: name,
                review: review
            } })

            if (updateData.modifiedCount === 1) {
                res.status(200).json({ "message": "Data updated Successfully", "success": true });
            } else {
                res.status(200).json({ "message": "Data not updated", "success": false });
            }
        } else {

            const insertData = await collection.insertOne({
                name: name,
                review: review
            })

            if (insertData.insertedId) {
                res.status(200).json({ "message": "Data inserted Successfully", "success": true });
            } else {
                res.status(200).json({ "message": "Data not inserted", "success": false });
            }

        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Error creating user');
    }

};

const portTestSixth = async (req, res) => {
    console.log("work");

    const name = req.body.name
    const review = req.body.review

    const database = await main()
    const collection = await database.collection("Port-Sixth-Test")
    const find = await collection.findOne()

    try {

        if (find) {
            const id = find._id
            const convertToStr = id.toString()

            const idToUpdate = new ObjectID(convertToStr)

            const updateData = await collection.updateOne({ _id: idToUpdate }, { $set: { 
                name: name,
                review: review
            } })

            if (updateData.modifiedCount === 1) {
                res.status(200).json({ "message": "Data updated Successfully", "success": true });
            } else {
                res.status(200).json({ "message": "Data not updated", "success": false });
            }
        } else {

            const insertData = await collection.insertOne({
                name: name,
                review: review
            })

            if (insertData.insertedId) {
                res.status(200).json({ "message": "Data inserted Successfully", "success": true });
            } else {
                res.status(200).json({ "message": "Data not inserted", "success": false });
            }

        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Error creating user');
    }

};


module.exports = {
    portPrimaryColor,
    portSecondaryColor,
    portHeaderImage,
    portTestOne,
    portTestTwo,
    portTestThree,
    portTestFour,
    portTestFifth,
    portTestSixth
}