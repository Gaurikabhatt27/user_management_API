let success = true;

export const checkAuth = (req, res, next) => {
    if(success){
        console.log("Auth checked");
        next();
    }else{
        console.log("Auth Failed !!");
        res.status(400).json({
            success: false,
            message: "Failed auth"
        });
    }
};

export const validateUserId = (req, res, next) => {

    const {id} = req.params;
    console.log("User id: ", id);
    
    if(!id){
        console.log("Invalid user id");
        
        return res.status(400).json({
            success: false,
            message: "user ID required"
        });
        
    };
    next();
};

