import reservationModels from "../models/reservationModels.js";

const createReservation = async (req, res) => {
    // res.json({success: true, message: "Reservation created successfully"})
    try {
        const {name, email, phone, date, time, guests} = req.body;
        if(!name || !email || !phone || !date || !time || !guests) {
            return res.json({success: false, message: "Please fill all the fields"})
        }

        const newReservation = new reservationModels({name, email, phone, date, time, guests});
        await newReservation.save();
        res.json({success: true, message: "Reservation created successfully", reservation: newReservation});

    } catch (error) {
        console.log(error);
        res.json({message: error.message})
    }
}

const getAllReservations = async (req, res) => {
    try {
        const reservations = await reservationModels.find({})
        res.json({success: true, reservations})
    } catch (error) {
        console.log(error)
        res.json({message: error.message})
    }
}

const deleteReservation = async (req, res) => {
    try {
        const { id }= req.params;
        await reservationModels.findByIdAndDelete(id)
        res.json({success: true, message: "Reservation deleted"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

export {createReservation, getAllReservations, deleteReservation}