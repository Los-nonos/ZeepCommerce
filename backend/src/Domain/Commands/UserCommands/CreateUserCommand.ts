class CreateUserCommand{
        private userId: number;
        private userName: string;
        private userLastName: string;
    
        public constructor(userId: number, userName: string, userLastName: string){
            this.userId = userId;
            this.userName = userName;
            this.userLastName = userLastName;
        }
        public getUserId(){
            return this.userId;
        }
    
        public getUserName(){
            return this.userName;
        }
    
        public getUserLastName(){
            return this.userLastName;
        }
    }
export default CreateUserCommand;