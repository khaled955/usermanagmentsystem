import { ReactNode } from "react";

export interface FormValues {
    username?: string;
    password?: string;
    firstName?:string;
    lastName?:string;
    age?:number;
  }

   export interface CustomApiError {
    response?: {
      data?: {
        message?: string;
      };
    };
  }



  export interface UserContextType {
    token: string | null;
    setToken: (token: string | null) => void;
    handleLogOut:()=>void;
  }


export interface UsersSearchContextType{
  filteredValues:string;
  filtereUsers:User[];
  setFilteredValues:(filteredValues:string)=>void;
  setFilteredUsers:(filteredUsers:[])=>void;
}


   export interface UserDataDecoded {
    email: string;
    exp: number;
    firstName: string;
    gender: string;
    iat: number;
    id: number;
    image: string;
    lastName: string;
    username: string;
  }

  export interface Address {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
  }
  
  export interface Bank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  }
  
  export interface Company {
    department: string;
    name: string;
    title: string;
    address: Address;
  }
  
  export interface Hair {
    color: string;
    type: string;
  }
  
  export interface Crypto {
    coin: string;
    wallet: string;
    network: string;
  }

  export interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: Hair;
    domain: string;
    ip: string;
    address: Address;
    macAddress: string;
    university: string;
    bank: Bank;
    company: Company;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: Crypto;
    role: string;
  }



   export interface UserCardProps {
    userInfo: User;
  }


  export interface NavBarProps {
    handleShow: () => void; 
    handleHide: () => void;
    show?:boolean,
  }
  export interface SideBarProps {
    handleHide: () => void;
  }
  export interface addFormProps {
    handleAddFormShow?: () => void;
    handleAddFormHide: () => void;
  }



   export interface ModalProps {
    showModal: boolean;
    modalContent:string;
    handleModalShow: () => void;
    handleModalHide: () => void;
    handleModalUpdateContent:()=>void;
    handleModalDeleteContent:()=>void;
  }


   export interface ProtectedRouteProps {
    children: ReactNode; // Define the type for the children prop
  }



   export interface ModalContextValue {
      showModal: boolean;
      modalContent: string;
      showUpdateForm:boolean;
      handleModalShow: () => void;
      handleModalHide: () => void;
      handleModalUpdateContent: () => void;
      handleModalDeleteContent: () => void;
      handleUpdateShowForm:()=> void;
      handleUpdateHideForm:()=> void;
    }



    export interface ModalProviderProps {
      children: ReactNode;
    }