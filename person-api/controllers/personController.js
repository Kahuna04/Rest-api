const Person = require('../models/person');

exports.createPerson = async (req, res) => {
    const { name, age, email } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    try {
        const person = new Person({ name, age, email });
        await person.save();
        res.status(201).json(person);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getPersonById = async (req, res) => {
    const { user_id } = req.params;
    try {
        const person = await Person.findOne({ user_id });
        if (!person) {
            return res.status(404).json({ error: 'Person not found' });
        }
        res.json(person);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.updatePersonById = async (req, res) => {
    const { user_id } = req.params;
    const { name, age, email } = req.body;
    try {
        const person = await Person.findOneAndUpdate({ user_id }, { name, age, email }, { new: true });
        if (!person) {
            return res.status(404).json({ error: 'Person not found' });
        }
        res.json(person);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deletePersonById = async (req, res) => {
    const { user_id } = req.params;
    try {
        const person = await Person.findOneAndRemove({ user_id });
        if (!person) {
            return res.status(404).json({ error: 'Person not found' });
        }
        res.json(person);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

