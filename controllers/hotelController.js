const Hotel = require('../models/Hotel')

exports.getHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find()
        res.json(hotels)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server error' })
    }
}

exports.getHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel not found' })
        }
        res.json(hotel)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server error' })
    }
}

exports.createHotel = async (req, res) => {
    try {
        const newHotel = new Hotel(req.body)
        const savedHotel = await newHotel.save()
        res.status(201).json(savedHotel)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server error' })
    }
}

exports.updateHotel = async (req, res) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updatedHotel) {
            return res.status(404).json({ message: 'Hotel not found' })
        }
        res.json(updatedHotel)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server error' })
    }
}

exports.deleteHotel = async (req, res) => {
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id)
        if (!deletedHotel) {
            return res.status(404).json({ message: 'Hotel not found' })
        }
        res.json({ message: 'Hotel deleted successfully' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server error' })
    }
}