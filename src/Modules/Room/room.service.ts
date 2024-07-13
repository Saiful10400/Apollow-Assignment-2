import { Troom } from "./room.interface";
import { roomModel } from "./room.model";

//1. create a room
const createSingleRoom=async(payload:Troom)=>{
    const result=await roomModel.create(payload)
    return result
}

// 2. get single room.
const getRoom=async(id:string|undefined)=>{

    if(id){
        const result=await roomModel.findById(id)
        return result
    }
     else{
        const result=await roomModel.find()
        return result
    }
}


// 3. delete a room

const deleteSingleRoom=async(id:string)=>{
    const result=await roomModel.findByIdAndUpdate(id,{isDeleted:true})
    return result
}

//4. update single room.
const updateSingleRoom=async(id:string,payload:Partial<Troom>)=>{
    const result=roomModel.findByIdAndUpdate(id,payload)
    return result
}


// export modules.
const roomService={createSingleRoom,getRoom,deleteSingleRoom,updateSingleRoom}
export default roomService