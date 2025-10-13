// enum Colors{
//     Red,
//     Green,
//     Blue
// }

// for(let color in Colors){
//     console.log(color)
// } 

// function showColor(color){
//     console.log(`A cor selecionada foi: ${color}`)
// }

// showColor(Colors.Red); 

//------------------------------------------------------------

// enum UserResponse{
//     No = 0,
//     Yes = 1
// }   

// function respondEmail(recipient: string, userResponse: UserResponse): void{
//     //... salvar no BD se o usuário respondeu ou não
// }

// respondEmail("Carlos", UserResponse.No);

//------------------------------------------------------------

enum StatusCodes{
    OK = 200,
    NotFound = 404,
    InternalServerError = 500,
    BadRequest = 400
}

const ok = StatusCodes.OK; //200
const indexOk = StatusCodes['OK']; //200
const stringNotFound = StatusCodes[404]; //NotFound


//------------------------------------------------------------
enum gender{
    Male = "M",
    Female = "F"
}