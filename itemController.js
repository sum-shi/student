import Item from "../models/item.js";

export function getAllItems(req,res){
     Item.find().then(
        (items)=>{
            res.json(items)
        }
     ).catch(
        ()=>{
            res.json({
                message: "Error"
            })
        }
     )
}
export function savaItems(req,res){
    const item = new Item(req.body)
    item.save().then(
        ()=>{
            res.json({
                massage:"Item saved"
            })
        }
    ).catch(
        ()=>{
            res.json({
                massage:"Error"
            })
        }
    )
}
export function searchItem(req,res){
    //const itemName = req.body.name;
    //get the parameter in link
    const itemName = req.params.name;
    Item.find(
        {
            name : itemName
        }
    ).then(
        (items)=>{
            res.json(items)
        }
    ).catch(
        ()=>{
            res.jason({
                message: "Inavalid item name"
            })
        }
    )
}