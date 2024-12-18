const express = require("express");

const Item = require("../models/Item.js");


const router = express.Router();



router.post("/item/create", async (req, res) => {
  try {
      const { name, amount, image, description, color } = req.body;

      if (!name || !color || !amount || !description || !image) {
          return res.status(400).send('Please provide a name, amount and description for the item creation');
      }
      

      const item = new Item({
          name,
          amount,
          color,
          image,
          description
      });

      const saveditem = await item.save();

      res.json(saveditem);
  } catch (error) {
      res.status(500).send(`Failed to create new item: ${error.message}`);
  }
});

router.get("/items", async (req, res) => {
    try {
       const items = await Item.find()
       res.send(items)
    }
    catch{
        res.status(500).send(`Failed to load Items`);
    }
})


router.post("/item/:id", async (req, res) => {
    try {
        const { name, amount, image, description, color } = req.body;

        const finditem = await Item.findOneAndUpdate({ _id: req.params.id }, { name: name, amount: amount, description: description, image: image, color: color },{ new: true });

        return res.status(200).json(finditem);
  
    } catch (error) {
        res.status(500).send(`Failed to create new item: ${error.message}`);
    }
  });

router.delete("/item/:id", async (req, res) => {
    try {
      const itemId = req.params.id;
      
      const deletedItem = await Item.findByIdAndRemove(itemId);
  
      if (!deletedItem) {
        return res.status(404).send("L'item n'a pas été trouvé.");
      }
  
      return res.status(200).json(deletedItem);
    } catch (error) {
      res.status(500).send(`Échec de la suppression de l'item : ${error.message}`);
    }
  });

  



module.exports = router;
