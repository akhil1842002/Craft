const ObjectID = require('mongodb').ObjectId;
const { main } = require('../database/connect')

const primaryColor = async (req, res) => {
    console.log("sdfsdfsdf");

    const color = req.body.primaryColor

    try {
        const database = await main()
        const collection = await database.collection("Home-Primary-Color")
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

const secondaryColor = async (req, res) => {
    console.log("sdfsdfsdf");

    const color = req.body.secondaryColor

    try {
        const database = await main()
        const collection = await database.collection("Home-Secondary-Color")
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

const headerImage = async (req, res) => {
    console.log("sdfsdfsdf");

    const image = req.body.headerImage

    try {
        const database = await main()
        const collection = await database.collection("Header-Image")
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

const whoImage = async (req, res) => {
    console.log("sdfsdfsdf");

    const image = req.body.whoImage

    const database = await main()
    const collection = await database.collection("Who-Image")
    const find = await collection.findOne()

    try {

        if (find) {
            const id = find._id
            const convertToStr = id.toString()

            const idToUpdate = new ObjectID(convertToStr)

            const updateData = await collection.updateOne({ _id: idToUpdate }, { $set: { whoImage: image } })

            if (updateData.modifiedCount === 1) {
                res.status(200).json({ "message": "Data updated Successfully", "success": true });
            } else {
                res.status(200).json({ "message": "Data not updated", "success": false });
            }
        } else {

            const insertData = await collection.insertOne({
                whoImage: image
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

const workOneImage = async (req, res) => {
    console.log("work");

    const image = req.body.workOneImage

    const database = await main()
    const collection = await database.collection("Work-One-Image")
    const find = await collection.findOne()

    try {

        if (find) {
            const id = find._id
            const convertToStr = id.toString()

            const idToUpdate = new ObjectID(convertToStr)

            const updateData = await collection.updateOne({ _id: idToUpdate }, { $set: { workOneImage: image } })

            if (updateData.modifiedCount === 1) {
                res.status(200).json({ "message": "Data updated Successfully", "success": true });
            } else {
                res.status(200).json({ "message": "Data not updated", "success": false });
            }
        } else {

            const insertData = await collection.insertOne({
                workOneImage: image
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

const workTwoImage = async (req, res) => {
    console.log("work");

    const image = req.body.workTwoImage

    const database = await main()
    const collection = await database.collection("Work-Two-Image")
    const find = await collection.findOne()

    try {

        if (find) {
            const id = find._id
            const convertToStr = id.toString()

            const idToUpdate = new ObjectID(convertToStr)

            const updateData = await collection.updateOne({ _id: idToUpdate }, { $set: { workTwoImage: image } })

            if (updateData.modifiedCount === 1) {
                res.status(200).json({ "message": "Data updated Successfully", "success": true });
            } else {
                res.status(200).json({ "message": "Data not updated", "success": false });
            }
        } else {

            const insertData = await collection.insertOne({
                workTwoImage: image
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

const workThreeImage = async (req, res) => {
    console.log("work");

    const image = req.body.workThreeImage

    const database = await main()
    const collection = await database.collection("Work-Three-Image")
    const find = await collection.findOne()

    try {

        if (find) {
            const id = find._id
            const convertToStr = id.toString()

            const idToUpdate = new ObjectID(convertToStr)

            const updateData = await collection.updateOne({ _id: idToUpdate }, { $set: { workThreeImage: image } })

            if (updateData.modifiedCount === 1) {
                res.status(200).json({ "message": "Data updated Successfully", "success": true });
            } else {
                res.status(200).json({ "message": "Data not updated", "success": false });
            }
        } else {

            const insertData = await collection.insertOne({
                workThreeImage: image
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

const workFourImage = async (req, res) => {
    console.log("work");

    const image = req.body.workFourImage

    const database = await main()
    const collection = await database.collection("Work-Four-Image")
    const find = await collection.findOne()

    try {

        if (find) {
            const id = find._id
            const convertToStr = id.toString()

            const idToUpdate = new ObjectID(convertToStr)

            const updateData = await collection.updateOne({ _id: idToUpdate }, { $set: { workFourImage: image } })

            if (updateData.modifiedCount === 1) {
                res.status(200).json({ "message": "Data updated Successfully", "success": true });
            } else {
                res.status(200).json({ "message": "Data not updated", "success": false });
            }
        } else {

            const insertData = await collection.insertOne({
                workFourImage: image
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

const testOne = async (req, res) => {
    console.log("work");

    const name = req.body.name
    const review = req.body.review

    const database = await main()
    const collection = await database.collection("Home-First-Test")
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

const testTwo = async (req, res) => {
    console.log("work");

    const name = req.body.name
    const review = req.body.review

    const database = await main()
    const collection = await database.collection("Home-second-Test")
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

const testThree = async (req, res) => {
    console.log("work");

    const name = req.body.name
    const review = req.body.review

    const database = await main()
    const collection = await database.collection("Home-Three-Test")
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

const testFour = async (req, res) => {
    console.log("work");

    const name = req.body.name
    const review = req.body.review

    const database = await main()
    const collection = await database.collection("Home-Four-Test")
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

const testFifth = async (req, res) => {
    console.log("work");

    const name = req.body.name
    const review = req.body.review

    const database = await main()
    const collection = await database.collection("Home-Fifth-Test")
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

const testSixth = async (req, res) => {
    console.log("work");

    const name = req.body.name
    const review = req.body.review

    const database = await main()
    const collection = await database.collection("Home-Sixth-Test")
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
    headerImage,
    whoImage,
    workOneImage,
    workTwoImage,
    workThreeImage,
    workFourImage,
    primaryColor,
    secondaryColor,
    testOne,
    testTwo,
    testThree,
    testFour,
    testFifth,
    testSixth
}